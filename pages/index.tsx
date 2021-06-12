import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Strack</title>
        <meta name="description" content="Welcome to Strack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <span className="font-semibold text-4xl">Welcome to the website</span>
      </div>

    </div>
  )
}
