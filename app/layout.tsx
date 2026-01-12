import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ARCHON V7 - Health Monitor',
  description: 'ARCHON V7 Health Monitoring Module',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  ;
}