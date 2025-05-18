# BeTheNation

[![X](https://img.shields.io/badge/Twitter-@bethenation-%231DA1F2?logo=x&style=flat)](https://x.com/bethenation_fun)
[![Website](https://img.shields.io/badge/Website-BeTheNation-%230077B5?logo=web&style=flat)](https://bethenation.netlify.app)
<div align="center">
  <img src="./public/btn.png" alt="BeTheNation Logo">
</div>

First Perpetual Prediction Market Don't Bet But Trade Your Country
Unlock the power of perpetual contracts based on a country's progress, with predictions driven by key indicators such as GDP, inflation, currency rates and more. Trade long or short, with no time limits on your positions.

## Technology Stack

- **Frontend:** React, Next, TypeScript, Viem, Tailwind CSS, nuqs state management
- **Off-Chain Backend :** Express (Mongodb NoSql Database, Handling API and Formula Functions)
- **Blockchain:** EVM
- **Smart Contract Framework:** Foundry (Solidity)
- **Authentication & Wallet Abstraction:** Wagmi
- **Deployment:** Cloudflare Pages (Frontend), Convex Cloud (Backend)

## Architecture Overview

BeTheNation employs a **hybrid Web2.5 architecture**:

- **Web2 (Backend & Frontend):** Handles the majority of application logic, user data, listings, off-chain order status, and provides a fast, real-time user experience.
- **Web3 (EVM, Wagmi & Viem):** Secures financial transactions through an on-chain escrow smart contract and manages user cryptographic keys/wallets via Wagmi embedded wallet solution.

This approach combines the ease of development and rich UX of Web2 technologies with the security and transparency of Web3 for critical financial interactions.

## Prerequisites
Ensure you have the following installed:
```bash
Node.js: v18.18.0 or higher
pnpm: (Recommended package manager) npm install -g pnpm
Next: v15.3.1 or higher (comes with project dependencies)
Database: Mongodb
Backend: Expressjs
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

cd backend
npm install
```
First, run the development server on root directory:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open API [http://localhost:1000](http://localhost:1000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
