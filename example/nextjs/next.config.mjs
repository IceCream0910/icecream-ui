import {
    createVanillaExtractPlugin
} from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

export default withVanillaExtract(nextConfig);