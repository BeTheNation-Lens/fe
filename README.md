# BeTheNation

[![X](https://img.shields.io/badge/Twitter-@bethenation-%231DA1F2?logo=x&style=flat)](https://x.com/bethenation_fun)
[![Website](https://img.shields.io/badge/Website-BeTheNation-%230077B5?logo=web&style=flat)](https://bethenations-lens.netlify.app)


<div align="center">
  <img src="./public/btn.png" alt="BeTheNation Logo">
</div>

First Perpetual Prediction Market Don't Bet But Trade Your Country  
Unlock the power of perpetual contracts based on a country's progress, with predictions driven by key indicators such as GDP, inflation, currency rates and more. Trade long or short, with no time limits on your positions.

## Technology Stack

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Viem, Nuqs (state management)
- **Wallet & Web3 UI:** Wagmi + ConnectKit
- **Blockchain:** EVM-compatible (Lens GHO Mainnet)
- **Smart Contract:** Solidity, Foundry framework
- **Deployment:** Cloudflare Pages
- **Tools & Integrations:** Ethers.js (via Viem), ESLint, Prettier

## Chain Configuration

The application is configured to use the Lens GHO Mainnet:

- **Chain ID:** 232
- **Currency:** GHO
- **RPC URL:** https://rpc.lens.xyz
- **WebSocket URL:** wss://rpc.lens.xyz/ws
- **Block Explorer:** https://explorer.lens.xyz

## Architecture Overview

BeTheNation employs a **hybrid Web2.5 architecture**:

- **Frontend:** Handles the majority of application logic, user data, and provides a fast, real-time user experience.
- **Web3 (EVM, Wagmi & Viem):** Secures financial transactions through an on-chain escrow smart contract and manages user cryptographic keys/wallets via Wagmi embedded wallet solution.

This approach combines the ease of development and rich UX of Web2 technologies with the security and transparency of Web3 for critical financial interactions.

## Prerequisites

Ensure you have the following installed:

```bash
Node.js: v18.18.0 or higher
pnpm: (Recommended package manager) npm install -g pnpm
Next: v15.3.1 or higher (comes with project dependencies)
```

## Installation

Clone the repository:

```bash
git clone https://github.com/BeTheNation/Frontend-btn.git
cd Frontend-btn
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
