import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ApolloWrapper } from '@/apollo-client/ApolloWrapper'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metaData: Metadata = {
  title: 'Homepage',
  description: 'This is the homepage',
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <ApolloWrapper>
          <Header />
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  )
}
