import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { type Chain } from "viem";
import { http } from "viem";

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID");
}

// Chain config untuk Lens GHO (mainnet)
export const lensMainnet: Chain = {
  id: 232,
  name: "Lens GHO",
  nativeCurrency: {
    name: "GHO",
    symbol: "GHO",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.lens.xyz"],
      webSocket: ["wss://rpc.lens.xyz/ws"],
    },
    public: {
      http: ["https://rpc.lens.xyz"],
      webSocket: ["wss://rpc.lens.xyz/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Lens Explorer",
      url: "https://explorer.lens.xyz",
    },
  },
};

interface FeeEstimation {
  maxPriorityFeePerGas: bigint;
  maxFeePerGas: bigint;
}

export const config = createConfig(
  getDefaultConfig({
    chains: [lensMainnet],
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    appName: "BeTheNation",
    transports: {
      [lensMainnet.id]: http(lensMainnet.rpcUrls.default.http[0]),
    },
    // Add Family Account support
    enableFamily: true,
    familyOptions: {
      enabled: true,
      minimumGuardians: 2,
      defaultGuardianNetwork: lensMainnet.id,
      createRecoveryConfig: {
        recoveryPeriod: 3600 * 24 * 7, // 7 days
        recoveryThreshold: 2, // Minimum guardians needed for recovery
      },
    },
  })
);
