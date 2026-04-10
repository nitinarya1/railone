import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RailOne',
    short_name: 'RailOne',
    description: 'Premium Train Booking Application',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#0A64F8',
    icons: [
      {
        src: '/icon.svg',
        sizes: '192x192 512x512 any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable'
      }
    ],
  }
}
