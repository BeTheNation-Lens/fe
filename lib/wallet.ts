import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { type Chain } from "viem";
import { http } from "viem";

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID");
}

// Chain config untuk GRASS (testnet)
export const lensTestnet: Chain = {
  id: 37111,
  name: "Lens Testnet",
  nativeCurrency: {
    name: "Grass",
    symbol: "GRASS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.lens.dev"],
    },
    public: {
      http: ["https://rpc.testnet.lens.dev"],
    },
  },
  blockExplorers: {
    default: {
      name: "Lens Explorer",
      url: "https://testnet.lensscan.io",
    },
  },
};

interface FeeEstimation {
  maxPriorityFeePerGas: bigint;
  maxFeePerGas: bigint;
}

export const config = createConfig(
  getDefaultConfig({
    chains: [lensTestnet],
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    appName: "BeTheNation",
    transports: {
      [lensTestnet.id]: http(lensTestnet.rpcUrls.default.http[0]),
    },
    // Add Family Account support
    enableFamily: true,
    familyOptions: {
      enabled: true,
      minimumGuardians: 2,
      defaultGuardianNetwork: lensTestnet.id,
      createRecoveryConfig: {
        recoveryPeriod: 3600 * 24 * 7, // 7 days
        recoveryThreshold: 2, // Minimum guardians needed for recovery
      },
    },
  })
);
