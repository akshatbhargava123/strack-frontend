import '@lib/init-firebase';
import Head from 'next/head';
import Home from '@components/Home';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Strack</title>
        <meta name="description" content="Welcome to Strack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

    </div>
  )
}
