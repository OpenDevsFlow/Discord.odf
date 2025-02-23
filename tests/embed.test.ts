import { describe, it, expect } from 'vitest';
import { EmbedBuilder } from 'discord.js';
import {
    EmbedBuild,
    EmbedColors
} from '../src/utils/embed';

describe('Embed Utilities', () => {
    it('should create a basic embed', () => {
        const embed = EmbedBuild({
            title: 'Test Embed',
            description: 'Test Description'
        });

        expect(embed).toBeInstanceOf(EmbedBuilder);
        expect(embed.data.title).toBe('Test Embed');
        expect(embed.data.description).toBe('Test Description');
    });
    it('should create a basic embed with color', () => {
        const embed = EmbedBuild({
            title: 'Test Embed',
            description: 'Test Description',
            type: 'success'
        });

        expect(embed).toBeInstanceOf(EmbedBuilder);
        expect(embed.data.title).toBe('Test Embed');
        expect(embed.data.description).toBe('Test Description');
        // discord.js internally converts hex colors to numbers
        expect(typeof embed.data.color).toBe('number');
        expect(embed.data.color).toBe(parseInt(EmbedColors.success.replace('#', ''), 16));
    });
    it('should create a basic embed with fields', () => {
        const embed = EmbedBuild({
            title: 'Test Embed',
            description: 'Test Description',
            fields: [
                {
                    name: 'Test Field',
                    value: 'Test Value'
                }
            ]
        });

        expect(embed).toBeInstanceOf(EmbedBuilder);
        expect(embed.data.title).toBe('Test Embed');
        expect(embed.data.description).toBe('Test Description');
        expect(embed.data.fields?.length).toBe(1);
        expect(embed.data.fields![0].name).toBe('Test Field');
        expect(embed.data.fields![0].value).toBe('Test Value');
    });
});