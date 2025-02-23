import { describe, it, expect } from 'vitest';
import * as DiscordESM from '../dist/esm';
const DiscordCJS = require('../dist/cjs');

describe('Module Exports', () => {
    it('should export all discord.js functionality in ESM format', () => {
        expect(DiscordESM.Client).toBeDefined();
        expect(DiscordESM.GatewayIntentBits).toBeDefined();
        expect(DiscordESM.version).toBeDefined();
        expect(typeof DiscordESM.version).toBe('string');
    });

    it('should export all discord.js functionality in CJS format', () => {
        expect(DiscordCJS.Client).toBeDefined();
        expect(DiscordCJS.GatewayIntentBits).toBeDefined();
        expect(DiscordCJS.version).toBeDefined();
        expect(typeof DiscordCJS.version).toBe('string');
    });

    it('should maintain type compatibility with discord.js', () => {
        const client: DiscordESM.Client = new DiscordESM.Client({
            intents: [DiscordESM.GatewayIntentBits.Guilds]
        });
        expect(client).toBeInstanceOf(DiscordESM.Client);
    });
});
