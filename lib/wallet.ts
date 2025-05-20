import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { type Chain } from "viem";
import { http } from "viem";

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID");
}

// Family Continue + GHO chain configuration
export const ghoChain: Chain = {
  id: 232,
  name: "GHO Mainnet",
  nativeCurrency: {
    name: "GHO",
    symbol: "GHO",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.lens.dev"],
      webSocket: ["wss://rpc.lens.dev/ws"],
    },
    public: {
      http: ["https://rpc.lens.dev"],
      webSocket: ["wss://rpc.lens.dev/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "GHO Explorer",
      url: "https://explorer.lens.xyz",
    },
  },
};

// Add Family Continue configuration
export const familyChain: Chain = {
  id: 534351,
  name: "Family Continue",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.continuefamily.xyz"],
    },
    public: {
      http: ["https://rpc-testnet.continuefamily.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Continue Family Explorer",
      url: "https://explorer-testnet.continuefamily.xyz",
    },
  },
};

// Update config to support both chains
export const config = createConfig(
  getDefaultConfig({
    // Add both chains
    chains: [ghoChain, familyChain],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    appName: "BeTheNation",
    // Add transport for both chains
    transports: {
      [ghoChain.id]: http(ghoChain.rpcUrls.default.http[0]),
      [familyChain.id]: http(familyChain.rpcUrls.default.http[0]),
    },
  })
);
