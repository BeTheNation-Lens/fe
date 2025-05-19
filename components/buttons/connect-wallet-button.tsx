"use client";

import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export function ConnectWalletButton() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const [wasConnected, setWasConnected] = useState(false);

  // Track connection state changes
  useEffect(() => {
    if (isConnected && !wasConnected) {
      router.push("/dashboard");
    } else if (!isConnected && wasConnected) {
      router.push("/");
    }
    setWasConnected(isConnected);
  }, [isConnected, wasConnected, router]);

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <button
            onClick={show}
            className="px-[20.82px] py-[13.01px] bg-gradient-to-br from-[#111214] to-[#22242a] rounded-[80.08px] shadow-[-9.609195709228516px_-9.609195709228516px_19.21839141845703px_0px_rgba(21,94,239,0.24)] shadow-[9.609195709228516px_9.609195709228516px_19.21839141845703px_0px_rgba(255,175,41,0.24)] outline outline-[2.40px] outline-[#155dee] inline-flex justify-center items-center gap-[10.41px] overflow-hidden text-white"
          >
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
