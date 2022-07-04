import Head from 'next/head'
import Dashboard from '../../components/Dashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          A better way to ship apps
        </title>
        <meta
          name="description"
          content="A better way to ship apps. "
        />
      </Head>
      <Dashboard />
    </>
  )
}
