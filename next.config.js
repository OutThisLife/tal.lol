const withPlugins = require('next-compose-plugins')

const {
  NODE_ENV = 'development',
  VERCEL_ENV = NODE_ENV,
  VERCEL_URL = 'localhost:3000',
  HOSTNAME = `http${/local/.test(VERCEL_URL) ? '' : 's'}://${VERCEL_URL}`,
  NON_PROD = VERCEL_ENV !== 'production',
  VERCEL_GIT_COMMIT_SHA = Date.now()
} = process.env

const nonProd = `${NON_PROD}` === 'true'
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = withPlugins(
  [[require('next-offline'), ['!', PHASE_DEVELOPMENT_SERVER]]],
  {
    devIndicators: { buildActivity: false },
    eslint: { ignoreDuringBuilds: true },

    experimental: { styledComponents: true },
    generateBuildId: async () => VERCEL_GIT_COMMIT_SHA,
    async headers() {
      const baseHeaders = [
        {
          key: 'Cache-Control',
          value: 'max-age=31536000, immutable'
        },
        {
          key: 'X-Host',
          value: HOSTNAME
        },
        {
          key: 'X-Robots-Tag',
          value: nonProd ? 'none' : 'all'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Strict-Transport-Policy',
          value: 'max-age=31536000; includeSubdomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Download-Options',
          value: 'noopen'
        }
      ]

      if (!nonProd) {
        baseHeaders.push({
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self' data: https:",
            "font-src 'self' data: https:",
            "frame-src 'self' https:",
            "img-src 'self' data: https:",
            "manifest-src 'self'",
            "object-src 'none'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
            "style-src 'self' 'unsafe-inline' https:"
          ].join('; ')
        })
      }

      return [
        {
          headers: [
            ...baseHeaders,
            {
              key: 'X-Page',
              value: '/'
            }
          ],
          source: '/'
        },
        {
          headers: [
            {
              key: 'Service-Worker-Allowed',
              value: '/'
            }
          ],
          source: '/service-worker.js'
        }
      ]
    },

    images: { formats: ['image/avif', 'image/webp'] },

    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    typescript: { ignoreBuildErrors: true },

    webpack(cfg) {
      cfg.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })

      return cfg
    }
  }
)
