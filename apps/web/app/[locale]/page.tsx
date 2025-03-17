import { gql } from '@apollo/client'
import { getClient } from '@/apollo-client/ApolloClient'
import { getTranslations } from 'next-intl/server'
import { auth } from '@/auth'
import Link from 'next/link'

const query = gql`
  query GET_USER {
    user(id: "001") {
      id
      fullName
      isAdmin
    }
  }
`

export default async function Homepage() {
  const session = await auth()
  const t = await getTranslations()

  // const { data, error } = await getClient().query({ query })

  // if (error) return <p>Error : {error.message}</p>

  return (
    <div>
      <h1>{t('Homepage.title')}</h1>
      {/* {data.user.fullName} */}
      <Link href="/de/profile">{t('Profile.title')}</Link>
    </div>
  )
}
