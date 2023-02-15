import '@/styles/globals.css'

interface T {
  children: React.ReactNode
}

const RootLayout: React.FC<T> = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <html lang='ru'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
