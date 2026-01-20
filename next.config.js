/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'web.archive.org',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // This allows build to succeed even if there are ESLint errors
    // They will still fail in pre-commit hooks
    ignoreDuringBuilds: false,
  },
  // Exclude Playwright test directories from Next.js compilation
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: [
        '**/node_modules',
        '**/.next',
        '**/tests/**',
        '**/test/**',
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],
    };
    return config;
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
