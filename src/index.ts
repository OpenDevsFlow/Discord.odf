// Re-export all discord.js functionality
export * from 'discord.js';

// Additional type declarations
export interface DiscordODF extends Record<string, unknown> {
    version: string;
}

// Package version information - single source of truth
export const version = '3.0.0';

// Export utility functions
export * from './utils/embed';
export * from './utils/components';

// Ensure type compatibility with discord.js
export type * from 'discord.js';