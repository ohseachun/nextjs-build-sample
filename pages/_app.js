import '../styles/global.css'
import ServerSide from "./serverside";

export default function App({ Component, pageProps }) {

    // App.getInitialProps = async function(ctx) {
    //     const res = await fetch('https://api.github.com/repos/vercel/next.js');
    //     const json = await res.json();
    //
    //     console.log("json=", json);
    //
    //     return { stars: json.stargazers_count };
    // }

  return <Component {...pageProps} />

}
