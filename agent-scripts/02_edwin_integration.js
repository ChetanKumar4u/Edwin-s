// Connect to Edwin's API
import { EdwinClient } from "edwin-sdk";

const edwin = new EdwinClient({
  apiKey: process.env.EDWIN_API_KEY
});

const connectAgent = async (agent) => {
  const session = await edwin.registerAgent(agent);
  console.log("🔗 Connected to Edwin:", session.agentId);
};

connectAgent(agent);
