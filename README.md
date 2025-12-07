# 🤖 Qubic Sentinel Bot

**Where Blockchain Activity Becomes Social Capital**

A gamified Discord bot that automatically rewards community members with progressive tier roles based on their verified on-chain Qubic activity. Built for the Hack the Future Hackathon.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://qubic-sentinelrcv7.vercel.app)
[![Backend Status](https://img.shields.io/badge/backend-online-success)](https://qubic-sentinel.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🎯 Overview

Qubic Sentinel Bot transforms Discord communities by creating an automated, merit-based social hierarchy where status is earned through verifiable on-chain Qubic activity—not arbitrarily assigned.

### The Problem
- Discord roles are given arbitrarily or sold, creating fake status
- No connection between on-chain activity and community standing
- Manual verification of blockchain activity is time-consuming and error-prone
- Communities can't distinguish real contributors from lurkers

### Our Solution
- **Automated Role Assignment** based on verified on-chain Qubic activity
- **Progressive Tier System** (Explorer → Citizen → Sentinel) with transparent requirements
- **Social Status as Reward** - no complex token economics to manage
- **EasyConnect-Powered Automation** - zero manual intervention needed
- **Sybil-Resistant Design** - economic barriers and social proof requirements

---

## ✨ Features

### 🔰 Three-Tier Progression System

| Tier | Requirements | Benefits |
|------|-------------|----------|
| **🔰 Explorer** | 1+ Qubic transaction | • Access to #explorer-lounge<br>• Basic bot commands<br>• Bronze tier badge |
| **⭐ Citizen** | 10+ transactions<br>+ 1 staking OR 5 DEX swaps | • All Explorer benefits<br>• Access to #citizens-hall<br>• Community voting rights<br>• Can nominate for Sentinel<br>• Silver tier badge |
| **👑 Sentinel** | 50+ transactions<br>10+ staking interactions<br>20+ DEX swaps<br>50+ Discord messages<br>3 community nominations | • All Citizen benefits<br>• #sentinel-council access<br>• Governance voting power<br>• Mentorship opportunities<br>• Animated gold badge |

### ⚡ Core Functionality

- **One-Time Wallet Linking** - Connect Discord ID to Qubic wallet address
- **Real-Time Activity Monitoring** - EasyConnect watches blockchain 24/7
- **Automatic Role Updates** - Discord roles sync with on-chain activity
- **Activity Tracking** - Monitors transactions, staking (Qearn), and DEX swaps (QXBoard)
- **Social Proof for Elite Tier** - Sentinel requires community nominations
- **Beautiful Landing Page** - Professional UI with cyberpunk aesthetic

---

## 🏗️ Architecture

### System Components

```
┌─────────────────────────────────────────────┐
│        Frontend (Next.js + React)          │
│  • Landing page with tier showcase         │
│  • Wallet linking modal                    │
│  • Real-time status indicators             │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│      Backend (Node.js + Express)           │
│  • Discord bot (Discord.js)                │
│  • Webhook endpoints                       │
│  • Role management logic                   │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│     Database (In-Memory / Future: DB)      │
│  • User wallet mappings                    │
│  • Activity counters                       │
│  • Tier progression history                │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│    EasyConnect (Automation Platform)       │
│  • Monitors Qubic blockchain               │
│  • Detects transactions/staking/swaps      │
│  • Triggers role assignments               │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│         Qubic Blockchain (RPC)             │
│  • Transaction verification                │
│  • Staking status (Qearn)                 │
│  • DEX swap tracking (QXBoard)            │
└─────────────────────────────────────────────┘
```

### Technology Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18 with TypeScript
- TailwindCSS for styling
- Lucide React for icons
- Deployed on Vercel

**Backend:**
- Node.js with Express
- Discord.js v14 for bot functionality
- CORS enabled for cross-origin requests
- Deployed on Render

**Automation:**
- EasyConnect workflow automation
- Qubic RPC for blockchain data
- Webhook-based event triggers

**DevOps:**
- GitHub for version control
- Vercel for frontend deployment
- Render for backend hosting
- Environment-based configuration

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Discord account and server
- Qubic wallet address
- Discord bot token
- EasyConnect account (optional for full automation)

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ecommercemah2023-gif/qubic-sentinel-bot.git
   cd qubic-sentinel-bot/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd qubic-sentinel-bot/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```env
   DISCORD_TOKEN=your_discord_bot_token
   GUILD_ID=your_discord_server_id
   PORT=3000
   ```

4. **Run the bot**
   ```bash
   node index.js
   ```

---

## 📖 Usage

### For Users

1. **Visit the Landing Page**
   ```
   https://qubic-sentinelrcv7.vercel.app
   ```

2. **Link Your Wallet**
   - Click "Link Wallet" button
   - Enter your Discord User ID
   - Enter your Qubic wallet address
   - Click "Link Wallet"

3. **Complete Setup in Discord**
   - Go to your Discord server
   - Type: `!verify`
   - Bot will confirm your linkage

4. **Start Earning Tiers**
   - Make transactions on Qubic
   - Stake using Qearn
   - Trade on QXBoard DEX
   - Your role updates automatically!

### For Admins

**Bot Commands:**
```
!verify - Complete wallet verification
```

**Monitoring:**
- Check backend logs in Render dashboard
- View activity in Discord channels

---

## 📸 Screenshots

### Landing Page
The main entry point showcasing the three-tier system and value proposition.

![Landing Page](./public/screenshots/qubic-landing-page.png)

---

### Tier System
Progressive rank system based on verified on-chain activity.

![Tier Cards](./public/screenshots/qubic-tier-cards.png)

---

### Wallet Linking Flow
Users can link their Qubic wallet to Discord in a simple modal interface.

![Wallet Modal](./public/screenshots/qubic-modal.png)

---


## 🔧 Configuration

### Environment Variables

**Backend (`backend/.env`):**
```env
# Discord Bot Configuration
DISCORD_TOKEN=your_bot_token_here
GUILD_ID=your_server_id_here

# Server Configuration
PORT=3000

# Optional: Database Configuration (for production)
DATABASE_URL=your_database_connection_string
```

**Frontend (Vercel Environment Variables):**
```env
NEXT_PUBLIC_BACKEND_URL=https://qubic-sentinel.onrender.com
```

### EasyConnect Workflow Setup

1. **Create EasyConnect Account**
   - Visit https://www.kairos-tek.com/easyconnect
   - Sign up for an account

2. **Configure Qubic Monitor**
   - Create new workflow
   - Add Qubic blockchain trigger
   - Monitor wallet addresses

3. **Setup Webhook Actions**
   - Add webhook action
   - Point to: `https://qubic-sentinel.onrender.com/webhook`
   - Method: POST
   - Payload:
     ```json
     {
       "ParsedTransaction": {
         "NumberOfShares": 1000
       }
     }
     ```

4. **Test the Flow**
   - Make a test transaction
   - Verify webhook is triggered
   - Check Discord role assignment

---

## 🎮 Demo

**Live Demo:** https://qubic-sentinelrcv7.vercel.app

**Backend API:** https://qubic-sentinel.onrender.com

**API Endpoints:**
- `GET /` - Health check
- `POST /webhook` - EasyConnect webhook receiver

**Test the System:**
1. Visit the demo site
2. Click "Link Wallet"
3. Use test Discord ID: `123456789012345678`
4. Use test wallet: `QUBIC-TEST-WALLET-ADDRESS`
5. Submit and check backend logs

---

## 🛡️ Anti-Sybil Measures

### How We Prevent Gaming the System

**Layer 1: Basic Guards**
- Discord accounts must be 30+ days old
- Must be server member for 7+ days before linking
- One wallet per Discord account (database constraint)
- Verified role requirement (CAPTCHA)

**Layer 2: Economic Barriers**
- Staking requires locking real capital
- DEX swaps cost gas fees
- Transaction history must be organic

**Layer 3: Social Proof (Sentinel Tier)**
- Requires 3 nominations from existing Citizens
- Admin final approval
- Can't self-nominate
- 50+ Discord messages required (proves community engagement)

**Why This Works:**
Creating 10 fake accounts means:
- Waiting 30+ days for account age
- Paying gas for 50+ transactions per account
- Staking capital in each wallet
- Somehow convincing real users to nominate you
- **Result:** Economically unviable to farm at scale

---

## 🗺️ Roadmap

### ✅ Phase 1: MVP (Current)
- [x] Frontend landing page
- [x] Wallet linking functionality
- [x] Discord bot with basic commands
- [x] Explorer tier auto-assignment
- [x] Backend API endpoints
- [x] Beautiful UI with cyberpunk theme

### 🚧 Phase 2: Enhanced Automation (In Progress)
- [ ] Full EasyConnect integration
- [ ] Citizen tier auto-promotion
- [ ] Sentinel nomination system
- [ ] Activity tracking dashboard
- [ ] Leaderboard functionality

### 🔮 Phase 3: Advanced Features (Planned)
- [ ] Database integration (PostgreSQL/Supabase)
- [ ] Web3 wallet connection (MetaMask-style)
- [ ] NFT badge minting for achievements
- [ ] Analytics dashboard for admins
- [ ] API for third-party integrations

### 🌟 Phase 4: Ecosystem Growth (Future)
- [ ] White-label for other communities
- [ ] SaaS platform with subscription tiers
- [ ] Mobile app (iOS/Android)
- [ ] Governance token for platform decisions
- [ ] Plugin marketplace for custom features

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **Report Bugs**
   - Open an issue with detailed reproduction steps
   - Include screenshots if applicable
   - Specify your environment (OS, browser, etc.)

2. **Suggest Features**
   - Open a feature request issue
   - Explain the use case
   - Describe the expected behavior

3. **Submit Pull Requests**
   - Fork the repository
   - Create a feature branch (`git checkout -b feature/AmazingFeature`)
   - Commit your changes (`git commit -m 'Add some AmazingFeature'`)
   - Push to the branch (`git push origin feature/AmazingFeature`)
   - Open a Pull Request

### Development Guidelines

- Follow existing code style (ESLint + Prettier)
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Hack the Future Hackathon Team:**

- **Mahmoud** - Project Manager
- **Precious** - Frontend Developer 
- **Om** - Backend Lead 
- **Sania** - Frontend/Design 



---

## 🙏 Acknowledgments

- **EasyConnect** - For the no-code automation platform
- **Qubic** - For the blockchain infrastructure
- **Discord.js** - For the excellent bot framework
- **Vercel** - For frontend hosting
- **Render** - For backend deployment
- **Hack the Future Organizers** - For the opportunity to build this project

---

## 📞 Support

**Need Help?**

- 💬 Discord: [Join our community server](https://discord.gg/UrP58saS)
- 🐛 Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/qubic-sentinel-bot/issues)
- 📖 Documentation: [Full docs](#)

---

## 🔗 Links

- **Live Demo:** https://qubic-sentinelrcv7.vercel.app
- **Backend API:** https://qubic-sentinel.onrender.com
- **GitHub Repository:** https://github.com/ecommercemah2023-gif/qubic-sentinel-bot.git
- **EasyConnect Docs:** https://www.kairos-tek.com/easyconnect
- **Qubic Official:** https://qubic.org

---

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/qubic-sentinel-bot?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/qubic-sentinel-bot?style=social)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/qubic-sentinel-bot)
![GitHub pull requests](https://img.shields.io/github/issues-pr/YOUR_USERNAME/qubic-sentinel-bot)

---

<div align="center">

**Built with ❤️ for the Qubic Hack the Future Hackathon**

*Transforming blockchain activity into social capital, one transaction at a time.*

</div>





