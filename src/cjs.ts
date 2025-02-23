// CommonJS entry point
import * as Discord from 'discord.js';

// Re-export everything from discord.js
const exports = {
    ...Discord,
    version: '3.0.0',
} as typeof Discord & { version: string };

// Using Object.assign to maintain proper types
Object.assign(module.exports, exports);
export {};