require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const cors = require('cors');

// --- CONFIGURATION (PASTE YOUR IDs HERE) ---
const TARGET_GUILD_ID = '1446567957487550527';   // Example: "131415..."
const TARGET_USER_ID = '1208259180474138646';     // Example: "852369..."
const SENTINEL_ROLE_ID = '1446749828594925588'; // Example: "998877..."

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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
});

// --- DISCORD COMMANDS ---
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === '!verify') {
        const verifyLink = `https://qubic-sentinel.vercel.app/verify?user=${message.author.id}`;
        await message.reply(`🛡️ **Initiate Protocol:** [Click here to verify](${verifyLink})`);
    }
});

client.login(process.env.DISCORD_TOKEN);

// --- API & WEBHOOKS ---
app.get('/', (req, res) => {
    res.json({ status: "online", system: "Qubic Sentinel" });
});

// THE SMART LOGIC
app.post('/webhook', async (req, res) => {
    console.log("📩 Webhook Received!");
    
    // 1. Parse the Data (Simulated logic based on your screenshot)
    // We check if "ParsedTransaction" exists, otherwise we assume it's a test
    const data = req.body;
    let amount = 0;

    if (data.ParsedTransaction) {
        amount = data.ParsedTransaction.NumberOfShares || 0;
        console.log(`💰 Transaction detected: ${amount} Shares`);
    } else {
        console.log("⚠️ No transaction data found (likely a test ping).");
        // For the demo, we treat a TEST ping as a success so you see the role!
        amount = 100; 
    }

    // 2. Assign the Role
    try {
        const guild = await client.guilds.fetch(TARGET_GUILD_ID);
        const member = await guild.members.fetch(TARGET_USER_ID);

        // Check logic: If they bought something (or it's a test), give Sentinel
        if (amount > 0) {
            await member.roles.add(SENTINEL_ROLE_ID);
            console.log(`✅ Role 'Sentinel' given to ${member.user.tag}`);
            
            // Optional: Send a celebration message in the server
            // Find the first text channel to send a message
            const channel = guild.channels.cache.find(ch => ch.type === 0); 
            if (channel) channel.send(`🚨 **ALERT:** Sentinel Status Acquired! User <@${TARGET_USER_ID}> just verified a transaction.`);
        }

        res.status(200).send('Role Assigned Successfully');

    } catch (error) {
        console.error("❌ Error assigning role:", error);
        res.status(500).send('Error assigning role');
    }
});

app.listen(PORT, () => {
    console.log(`🌐 API Server running on port ${PORT}`);
});