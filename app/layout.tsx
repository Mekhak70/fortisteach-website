import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

const siteUrl = 'https://www.fortisteach.com'

export const metadata: Metadata = {
  title: 'FortisTeach - IT, Network & Smart Technology Services in Armenia',
  description: 'FortisTeach-ը առաջարկում է պրոֆեսիոնալ IT ծառայություններ Հայաստանում՝ ներառյալ ցանցերի կարգավորում, սերվերների տեղադրում, VPN լուծումներ, տեսահսկման համակարգեր և Smart Home տեխնոլոգիաներ.',
  
  openGraph: {
    title: 'FortisTeach - IT, Network & Smart Technology Services in Armenia',
    description: 'FortisTeach-ը առաջարկում է պրոֆեսիոնալ IT ծառայություններ Հայաստանում՝ ներառյալ ցանցերի կարգավորում, սերվերների տեղադրում, VPN լուծումներ, տեսահսկման համակարգեր և Smart Home տեխնոլոգիաներ.',
    url: siteUrl,
    siteName: 'FortisTeach',
    images: [
      {
        url: `${siteUrl}/apple-icon.png`,
        width: 1200,
        height: 630,
        alt: 'FortisTeach Logo',
      },
    ],
    type: 'website',
    locale: 'hy_AM',
    alternateLocale: ['en_US', 'ru_RU'],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FortisTeach - IT, Network & Smart Technology Services in Armenia',
    description: 'FortisTeach-ը առաջարկում է պրոֆեսիոնալ IT ծառայություններ Հայաստանում՝ ներառյալ ցանցերի կարգավորում, սերվերների տեղադրում, VPN լուծումներ, տեսահսկման համակարգեր և Smart Home տեխնոլոգիաներ.',
    images: [
      {
        url: `${siteUrl}/apple-icon.png`,
        width: 1200,
        height: 630,
        alt: 'FortisTeach Logo',
      }
    ],
    site: '@fortisteach',
    creator: '@fortisteach',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: ['/favicon.ico'],
  },

  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Ավելացրեք ձեր Google Search Console կոդը
    // yandex: 'your-yandex-verification-code',
    // other: {
    //   'facebook-domain-verification': 'your-facebook-verification-code',
    // },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'hy': siteUrl,
      'en': `${siteUrl}/en`,
      'ru': `${siteUrl}/ru`,
    },
  },
  category: 'technology',
  classification: 'IT Services, Network Solutions, Smart Home Technology',
  keywords: [
    'IT services Armenia',
    'IT support Yerevan',
    'network setup Armenia',
    'VPN setup Armenia',
    'MikroTik configuration',
    'Cisco network configuration',
    'server setup Armenia',
    'CCTV installation Yerevan',
    'Smart Home installation Armenia',
    'cloud infrastructure',
    'IT consulting Armenia',
    'home automation system Armenia',
  ],
  authors: [{ name: 'FortisTeach', url: siteUrl }],
  creator: 'FortisTeach',
  publisher: 'FortisTeach',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteUrl),
  referrer: 'origin-when-cross-origin',
  applicationName: 'FortisTeach',
  generator: 'Next.js',
  themeColor: '#1a3a6b',
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  abstract: 'FortisTeach offers professional IT services in Armenia including network configuration, server installation, VPN solutions, surveillance systems and Smart Home technologies.',
}

export const viewport: Viewport = {
  themeColor: '#1a3a6b',
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hy" dir="ltr">
      <head>
        {/* Preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon fallbacks */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//vercel.com" />
      </head>
      <body className="font-sans antialiased">
        {/* Hidden SEO content - improved version */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>FortisTeach - Professional IT Services in Armenia</h1>
          <h2>IT Infrastructure Services</h2>
          <ul>
            <li>Network setup and configuration in Armenia</li>
            <li>VPN setup and secure connections</li>
            <li>MikroTik and Cisco network configuration</li>
            <li>Server setup and maintenance</li>
            <li>NAS storage and Active Directory setup</li>
            <li>Virtualization and Linux server configuration</li>
          </ul>
          <h2>Smart Technology Solutions</h2>
          <ul>
            <li>CCTV installation in Yerevan and throughout Armenia</li>
            <li>IP camera installation and configuration</li>
            <li>Smart Home installation and automation systems</li>
            <li>Home automation and cloud infrastructure setup</li>
          </ul>
          <h2>Contact FortisTeach</h2>
          <p>Professional IT consulting, support and technology services in Yerevan, Armenia.</p>
        </div>
        
        {children}
        
        {/* Structured Data / JSON-LD for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "FortisTeach",
              "url": siteUrl,
              "logo": `${siteUrl}/apple-icon.png`,
              "image": `${siteUrl}/apple-icon.png`,
              "description": "Professional IT services, network configuration, smart home technology and CCTV installation in Armenia",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yerevan",
                "addressCountry": "AM"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Armenia"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Network Setup",
                      "description": "Professional network configuration in Armenia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "CCTV Installation",
                      "description": "Security camera installation in Yerevan"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smart Home",
                      "description": "Smart home automation systems"
                    }
                  }
                ]
              },
              "telephone": "+374-XX-XX-XX-XX",
              "email": "info@fortisteach.com",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/fortisteach",
                "https://www.linkedin.com/company/fortisteach",
                "https://www.instagram.com/fortisteach"
              ]
            })
          }}
        />
        
        <Analytics />
      </body>
    </html>
  )
}