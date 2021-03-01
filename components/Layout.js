import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => (
    <div>
        <Head>
            <title>NEXT | Playground</title>
        </Head>
        <NavBar />
        {props.children}
        <Footer />
    </div>
)

export default Layout;