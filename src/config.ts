console.assert(
  process.env.OPENROUTER_API_KEY,
  "OPENROUTER_API_KEY is not set in env variables"
);

export type ModelConfig = {
  apiKey: string;
  httpReferer: string;
  xTitle: string;
  port: number;
  models: string[];
  temperature: number;
  maxTokens: number;
  systemPrompt: string;

  provider: {
    sort: {
      by: string;
      partition: string;
    };
  };
};

export const config: ModelConfig = {
  apiKey: process.env.OPENROUTER_API_KEY!,
  httpReferer: "http://localhost",
  xTitle: "SmartModelRouterGateway",
  port: 3000,
  models: [
    "arcee-ai/trinity-large-preview:free",
    "nvidia/nemotron-3-nano-30b-a3b:free"
  ],
  temperature: 0.2,
  maxTokens: 100,
  systemPrompt: "You are a helpful experienced Staff Software Engineer.",
  provider: {
    sort: {
      by: "throughput",
      partition: "none"
    }
  }
};
