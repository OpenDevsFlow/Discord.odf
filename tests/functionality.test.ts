import { describe, it, expect } from 'vitest';
import { Client, GatewayIntentBits } from '../dist/esm';

describe('Discord.js Functionality Tests', () => {
    it('should create a Discord client', () => {
        const client = new Client({
            intents: [GatewayIntentBits.Guilds]
        });
        expect(client).toBeInstanceOf(Client);
    });

    it('should have correct Gateway Intents', () => {
        expect(GatewayIntentBits.Guilds).toBeDefined();
        expect(typeof GatewayIntentBits.Guilds).toBe('number');
    });
});