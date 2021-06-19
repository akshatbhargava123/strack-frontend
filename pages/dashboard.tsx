import '@lib/init-firebase';
import Head from 'next/head';
import Dashboard from '@components/Dashboard';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Strack Dashboard</title>
        <meta name="description" content="Welcome to Strack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />

    </div>
  )
}
