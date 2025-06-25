import "@/styles/globals.css";
import { WagmiProvider } from "wagmi";
import { createConfig, http } from "wagmi";
import { xdc } from "@/config/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig({
  chains: [xdc],
  transports: {
    [xdc.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
