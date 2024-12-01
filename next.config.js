// next.config.js
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  reloadOnOnline: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};
module.exports = withPWA(nextConfig);

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA({
//   reactStrictMode: true,
// });
