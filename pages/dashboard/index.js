import Head from 'next/head'
import Dashboard from '../../components/Dashboard'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Home({ user }) {

  return (
    <>
      <Head>
        <title>
          Dashboard
        </title>
        <meta
          name="description"
          content="Dashboard"
        />
      </Head>
      <Dashboard user={user} />
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
