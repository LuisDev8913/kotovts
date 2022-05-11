const nextTranslate = require("next-translate");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    FORM_ID: process.env.FORM_ID
  }
});

module.exports = nextConfig;
