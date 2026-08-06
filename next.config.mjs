import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import("next").NextConfig} */
export default function nextConfig(phase) {
    return {
        output: 'export',
        distDir: phase === PHASE_DEVELOPMENT_SERVER ? './.next-dev' : './dist',
        images: {
            unoptimized: true,
        },
    };
}
