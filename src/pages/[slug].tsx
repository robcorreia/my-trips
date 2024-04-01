import client from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGE_BY_SLUG, GET_PAGES } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate, { type PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()
  // retorna um loading, qualquer coisa enquanto está sendo criado
  if (router.isFallback) return null
  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

//getStaticPaths => serve para gerar as urls em build time /about /trip/petropolis
//getStaticProps => serve para buscar os dados da página (props) em build time - estático
//getServerSideProps => serve para buscar os dados da página em runtime - toda requisição (bom para SEO) (blundle fica so no server)
//getInitialProps => serve para buscar os dados da página (props) - runtime- toda requisiçao fica no client - hydrate
