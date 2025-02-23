import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        cjs: 'src/cjs.ts',
        esm: 'src/esm.ts'
    },
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    splitting: false,
    sourcemap: true,
    minify: true,
    outDir: 'dist',
    target: 'node14',
    platform: 'node'
});
