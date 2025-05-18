"use client";

import { ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/wallet";
import "@rainbow-me/rainbowkit/styles.css";
import { PositionsProvider } from "@/components/trading/PositionsContext";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <PositionsProvider>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </PositionsProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
