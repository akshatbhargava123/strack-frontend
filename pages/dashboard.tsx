import '@lib/init-firebase';
import Link from 'next/link';
import Head from 'next/head';
import Dashboard from '@components/Dashboard';
import { isMobile } from 'react-device-detect';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Strack Dashboard</title>
        <meta name="description" content="Welcome to Strack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile ? (
        <div className="min-h-screen flex flex-col justify-center px-5">
          <h3 className="text-black font-semibold text-2xl">Sorry, we don't support this screen size yet for dashboard.</h3>
          <p className="text-gray-600">Try opening on your computer's browser</p>
        </div>
      ) : (
        <Dashboard />
      )}

    </div>
  )
}
