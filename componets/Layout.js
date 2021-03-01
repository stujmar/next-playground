import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => (
    <div>
        <NavBar />
        {props.children}
        <Footer />
    </div>
)

export default Layout;