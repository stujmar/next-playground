import NavBar from "./NavBar";

const Layout = (props) => (
    <div>
        <NavBar />
        {props.children}
        <Footer />
    </div>
)