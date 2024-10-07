import { featureFlags } from "@features/feature-flags";

export function Navbar(): void {
  if (featureFlags.isLoggingEnabled) {
    console.log("[Navbar]");
  }
}
