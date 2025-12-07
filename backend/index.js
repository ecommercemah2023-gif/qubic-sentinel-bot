require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const cors = require('cors');

// --- CONFIGURATION (SECURE MODE) ---
// The code now asks the Server Environment for these numbers
const TARGET_GUILD_ID = process.env.GUILD_ID;
const TARGET_USER_ID = process.env.OWNER_ID;
const SENTINEL_ROLE_ID = process.env.ROLE_ID;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- DISCORD BOT SETUP ---
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log(`✅ Qubic Sentinel is ONLINE as ${client.user.tag}`);
    console.log(`🔒 Security Mode: Active. Loaded IDs from Environment.`);
});

// --- DISCORD COMMANDS ---
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // Debug: Print what the bot hears (Optional, you can remove this later)
    // console.log(`👂 HEARD: "${message.content}"`);

    if (message.content === '!verify') {
        const verifyLink = `https://qubic-sentinel.vercel.app/verify?user=${message.author.id}`;
        await message.reply(`🛡️ **Initiate Protocol:** [Click here to verify](${verifyLink})`);
    }
});

client.login(process.env.DISCORD_TOKEN);

// --- API & WEBHOOKS ---
app.get('/', (req, res) => {
    res.json({ status: "online", system: "Qubic Sentinel", mode: "secure" });
});

// --- THE LOGIC ---
app.post('/webhook', async (req, res) => {
    console.log("📩 Webhook Received!");
    
    // 1. Parse the Data
    const data = req.body;
    let amount = 0;

    // Check if real transaction data exists
    if (data.ParsedTransaction) {
        amount = data.ParsedTransaction.NumberOfShares || 0;
        console.log(`💰 Transaction detected: ${amount} Shares`);
    } else {
        console.log("⚠️ No transaction data found (likely a test ping).");
        // For the demo, we treat a TEST ping as a success!
        amount = 100; 
    }

    // 2. Assign the Role
    try {
        if (!TARGET_GUILD_ID || !TARGET_USER_ID || !SENTINEL_ROLE_ID) {
            throw new Error("Missing IDs in Environment Variables! Check Render Dashboard.");
        }

        const guild = await client.guilds.fetch(TARGET_GUILD_ID);
        const member = await guild.members.fetch(TARGET_USER_ID);

        // If they bought something (or it's a test), give Sentinel role
        if (amount > 0) {
            await member.roles.add(SENTINEL_ROLE_ID);
            console.log(`✅ Role 'Sentinel' given to ${member.user.tag}`);
            
            // Optional: Send a celebration message in the server
            const channel = guild.channels.cache.find(ch => ch.type === 0); 
            if (channel) channel.send(`🚨 **ALERT:** Sentinel Status Acquired! User <@${TARGET_USER_ID}> just verified.`);
        }

        res.status(200).send('Role Assigned Successfully');

    } catch (error) {
        console.error("❌ Error assigning role:", error);
        res.status(500).send(`Error assigning role: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`🌐 API Server running on port ${PORT}`);
});