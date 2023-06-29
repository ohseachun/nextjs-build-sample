import Layout, {siteTitle} from "../components/layout";
import Head from "next/head";
import Post from "./posts/[id]";

export default function ServerSide({data}) {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
                ServerSide Page... {data?.name}
            </div>
        </Layout>
    )

}


ServerSide.getInitialProps = async function(ctx) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();

    console.log("json=", json);

    return { stars: json.stargazers_count };
}


// export function getServerSideProps() {
//
//     console.log("call server side");
//
//     return {
//         props: {
//             // props for your component
//             data: {
//                 name: 'John Doe',
//                 age:   24,
//             }
//         }
//     }
// }
