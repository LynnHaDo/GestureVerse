const withMDX = require('@next/mdx')()
const isProd = process.env.NODE_ENV === 'production'

module.exports = withMDX({
    trailingSlash: true,
    assetPrefix: isProd ? '../' : undefined,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    optimizeFonts: false,
    webpack: (config) => {
        config.resolve.fallback ={ fs: false, path: false };
        return config;
    }
})
