import Head from 'next/head'
import LoginHero from '../components/LoginHero'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          A better way to ship apps
        </title>
        <meta
          name="description"
          content="A better way to ship apps."
        />
      </Head>
      <LoginHero />
      <Pricing />
      <Blog />
      <Footer />
    </>
  )
}
