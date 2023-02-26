import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LINKS</title>
        <link rel="icon" href="https://www.tahto.com.br/wp-content/uploads/2021/10/brand-1.svg" />
      </Head>

      <main>
        <Header title="Clique nos botões acima para expandir" />
        <p className="description">
          Este site funciona na intranet <code>e fora dela</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
