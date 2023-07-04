import Layout, {siteTitle} from "../components/layout";
import Head from "next/head";
import Post from "./posts/[id]";

export default function ServerSide({data}) {

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
                ServerSide Page... {data?.name}
            </div>
        </Layout>
    )

}


export function getServerSideProps() {

    console.log("call server side");
    console.debug("call server side");

    return {
        props: {
            // props for your component
            data: {
                name: 'John Doe',
                age:   24,
            }
        }
    }
}
