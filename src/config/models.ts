import { ModelConfig } from "../utils/types";

export const AVAILABLE_MODELS: ModelConfig[] = [
  {
    id: "gpt-4",
    name: "GPT-4",
    maxTokens: 8192,
    description: "Most capable GPT-4 model",
  },

  {
    id: "gpt-4-turbo-preview",
    name: "GPT-4 Turbo",
    maxTokens: 128000,
    description: "GPT-4 Turbo with higher context window",
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    maxTokens: 4096,
    description: "Fast and efficient for most tasks",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    maxTokens: 128000,
    description: "Fast and efficient and multimodal for most tasks",
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o-mini",
    maxTokens: 128000,
    description: "Fast and more efficient but less accurate for most tasks",
  },
];

export const DEFAULT_MODEL = "gpt-3.5-turbo";