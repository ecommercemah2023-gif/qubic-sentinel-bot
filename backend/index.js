require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const cors = require('cors');

// --- 1. SERVER SETUP ---
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // This is crucial to read the data sent by EasyConnect

// --- 2. DISCORD BOT SETUP ---
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
    console.log(`👀 Watching for commands and webhooks...`);
});

// --- 3. BOT COMMANDS ---
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // Debug: Print what the bot hears
    console.log(`👂 HEARD: "${message.content}" from ${message.author.tag}`);

    if (message.content === '!verify') {
        // This link points to your hosted frontend (or localhost for now)
        // Ideally update this to your Vercel link once Precious deploys it
        const verifyLink = `https://qubic-sentinel.vercel.app/verify?user=${message.author.id}`;
        
        try {
            await message.reply(`🛡️ **Initiate Protocol:** [Click here to verify](${verifyLink})`);
            console.log("🚀 Reply sent!");
        } catch (error) {
            console.error("❌ Error sending reply:", error);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);

// --- 4. API ENDPOINTS ---

// A. Health Check (To see if Render is alive)
app.get('/', (req, res) => {
    res.json({ status: "online", system: "Qubic Sentinel" });
});

// B. WEBHOOK ENDPOINT (The Fix for EasyConnect)
app.post('/webhook', (req, res) => {
    // 1. Log the incoming data so you can see what Qubic sends you
    console.log("📩 Webhook Data Received:", JSON.stringify(req.body, null, 2));

    // 2. Send a success response immediately so EasyConnect knows we got it
    // If you don't send this, EasyConnect thinks it failed!
    res.status(200).send('Webhook received successfully!');

    // TODO: In Phase 3, we will add logic here to actually give the role
});

// --- 5. START SERVER ---
app.listen(PORT, () => {
    console.log(`🌐 API Server running on port ${PORT}`);
});