import { gql } from '@apollo/client'
import { getClient } from '@/apollo-client/ApolloClient'
import { getTranslations } from 'next-intl/server'

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
  const t = await getTranslations('Homepage')

  const { data, error } = await getClient().query({ query })

  if (error) return <p>Error : {error.message}</p>

  return (
    <div>
      <h1>{t('title')}</h1>
      {data.user.fullName}
    </div>
  )
}
