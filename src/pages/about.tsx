import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate></AboutTemplate>
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)
  console.log(pages)
  return {
    props: {}
  }
}

//getStaticPaths => serve para gerar as urls em build time /about /trip/petropolis
//getStaticProps => serve para buscar os dados da página (props) em build time - estático
//getServerSideProps => serve para buscar os dados da página em runtime - toda requisição (bom para SEO) (blundle fica so no server)
//getInitialProps => serve para buscar os dados da página (props) - runtime- toda requisiçao fica no client - hydrate
