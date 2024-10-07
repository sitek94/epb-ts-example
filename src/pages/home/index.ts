import { Navbar } from "@components/navbar";
import { featureFlags } from "@features/feature-flags";

export function Home(): void {
  if (featureFlags.isLoggingEnabled) {
    console.log("[Home page]");
  }

  Navbar();
}
