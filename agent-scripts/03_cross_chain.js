// Enable agent to access cross-chain data
import { MultiChainModule } from "edwin-sdk";

const chains = ["ethereum", "cosmos", "polygon"];

chains.forEach(chain => {
  MultiChainModule.connect(chain)
    .then(() => console.log(`🌉 Connected to ${chain}`));
});
