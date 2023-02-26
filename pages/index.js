import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LINKS</title>
        <link rel="icon" href="https://logodownload.org/wp-content/uploads/2014/02/oi-logo-b4.png" />
      </Head>

      <main>
        <Header title="Clique nos botões acima para expandir" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
