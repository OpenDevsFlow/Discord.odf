import { describe, it, expect } from 'vitest';
import * as DiscordESM from '../dist/esm';
const DiscordCJS = require('../dist/cjs');

describe('Module Import Tests', () => {
    it('should import ESM module successfully', () => {
        expect(DiscordESM).toBeDefined();
        expect(DiscordESM.version).toBeDefined();
        expect(DiscordESM.Client).toBeDefined();
    });

    it('should require CJS module successfully', () => {
        expect(DiscordCJS).toBeDefined();
        expect(DiscordCJS.version).toBeDefined();
        expect(DiscordCJS.Client).toBeDefined();
    });
});