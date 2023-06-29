import Layout from '../../components/layout'
// import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post() {

  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <article>
        <h1>할루</h1>
        <div>
          {/*<Date dateString="29829892" />*/}
        </div>
        {/*<div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />*/}
      </article>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }
//
// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }
