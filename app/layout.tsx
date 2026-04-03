import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: 'FortisTeach - IT, Network & Smart Technology Services in Armenia',
  description: 'FortisTeach-ը առաջարկում է պրոֆեսիոնալ IT ծառայություններ Հայաստանում՝ ներառյալ ցանցերի կարգավորում, սերվերների տեղադրում, VPN լուծումներ, տեսահսկման համակարգեր և Smart Home տեխնոլոգիաներ: IT services Armenia, IT support Yerevan, IT infrastructure services, IT consulting Armenia, network setup Armenia, VPN setup Armenia, MikroTik configuration, Cisco network configuration, server setup Armenia, NAS storage setup, Active Directory setup, virtualization server setup, Linux server configuration, CCTV installation Yerevan, IP camera installation Armenia, Smart Home installation Armenia, home automation system Armenia, cloud infrastructure setup.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a3a6b',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hy">
      <body className="font-sans antialiased">
        {/* Գլխավոր SEO նախադասություն */}
        <div style={{ display: 'none' }}>
          FortisTeach-ը առաջարկում է պրոֆեսիոնալ IT ծառայություններ Հայաստանում՝ ներառյալ ցանցերի կարգավորում, սերվերների տեղադրում, VPN լուծումներ, տեսահսկման համակարգեր և Smart Home տեխնոլոգիաներ: IT services Armenia, IT support Yerevan, IT infrastructure services, IT consulting Armenia, network setup Armenia, VPN setup Armenia, MikroTik configuration, Cisco network configuration, server setup Armenia, NAS storage setup, Active Directory setup, virtualization server setup, Linux server configuration, CCTV installation Yerevan, IP camera installation Armenia, Smart Home installation Armenia, home automation system Armenia, cloud infrastructure setup.
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}