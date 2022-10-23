import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Layout({children}) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}

export default Layout;