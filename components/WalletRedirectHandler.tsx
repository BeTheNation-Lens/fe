"use client";

/**
 * Component that handles wallet connection redirects.
 * This is a client component with no UI that just uses the hook logic.
 */
import { useWalletRedirect } from '@/hooks/useWalletRedirect';

export function WalletRedirectHandler() {
  // Use the redirect hook
  useWalletRedirect();

  // Return null as this component doesn't render anything
  return null;
}
