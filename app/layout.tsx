export const metadata = {
  title: 'Portfolio Website',
  description: 'Portfolio for Christopher Lenhardt',
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
  )
}
