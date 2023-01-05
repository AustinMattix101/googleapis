module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        net: false,
        dns: false,
        tls: false
      };
    }

    return config;
  },
  experimental: {
    runtime: 'nodejs'
  },
};
