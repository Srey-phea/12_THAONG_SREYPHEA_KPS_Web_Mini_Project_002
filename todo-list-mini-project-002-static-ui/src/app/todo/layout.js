import TodoPage from "./page"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>{children}</div>
        </body>
     </html>
  )
}
