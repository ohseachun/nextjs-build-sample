// @ts-check

/**
 * @type {import('next').NextConfig}
 * @see https://nextjs.org/docs/pages/api-reference/next-config-js
 **/
const nextConfig = {
  reactStrictMode: true,
    // webpack: (config, { isServer }) => {
    //     // Fixes npm packages that depend on `fs` module
    //     if (!isServer) {
    //         config.node = {
    //             fs: 'empty'
    //         }
    //     }
    //
    //     return config
    // },
  images: {
    unoptimized: true,
  },
    // trailingSlash: true,
  // output: 'export',
  compiler: {
    // https://nextjs.org/docs/architecture/nextjs-compiler#remove-react-properties
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
};

module.exports = nextConfig;
