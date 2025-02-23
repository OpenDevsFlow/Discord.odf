import { describe, it, expect, vi } from 'vitest';
import { Client, GatewayIntentBits, Events } from '../dist/esm';

describe('Discord.js Event Handling', () => {
    it('should properly emit and handle client events', () => {
        const client = new Client({
            intents: [GatewayIntentBits.Guilds]
        });

        const mockHandler = vi.fn();
        client.on('debug', mockHandler);

        // Test debug event instead of ready since it's more permissive with types
        const debugMessage = 'Test debug message';
        client.emit('debug', debugMessage);

        expect(mockHandler).toHaveBeenCalledTimes(1);
        expect(mockHandler).toHaveBeenCalledWith(debugMessage);
    });

    it('should properly handle multiple event listeners', () => {
        const client = new Client({
            intents: [GatewayIntentBits.Guilds]
        });

        const handler1 = vi.fn();
        const handler2 = vi.fn();

        client.on('debug', handler1);
        client.on('debug', handler2);

        const debugMessage = 'Test debug message';
        client.emit('debug', debugMessage);

        expect(handler1).toHaveBeenCalledWith(debugMessage);
        expect(handler2).toHaveBeenCalledWith(debugMessage);
    });

    it('should properly remove event listeners', () => {
        const client = new Client({
            intents: [GatewayIntentBits.Guilds]
        });

        const handler = vi.fn();

        client.on('debug', handler);
        client.off('debug', handler);

        client.emit('debug', 'Test message');

        expect(handler).not.toHaveBeenCalled();
    });

    it('should support typed events using Events enum', () => {
        const client = new Client({
            intents: [GatewayIntentBits.Guilds]
        });

        const handler = vi.fn();
        client.on(Events.Debug, handler);

        const debugMessage = 'Test debug message';
        client.emit(Events.Debug, debugMessage);

        expect(handler).toHaveBeenCalledWith(debugMessage);
    });
});