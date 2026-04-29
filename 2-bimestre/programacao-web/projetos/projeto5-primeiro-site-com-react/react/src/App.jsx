import Footer from "./components/footer";
import Header from "./components/header";
import Contato from "./pages/contato";
import Home from "./pages/home";
import Sobre from "./pages/sobre";

export default function App() {
    return(
        <div>
            <Header />
            
            <main>
                <Home />
                <Sobre />
                <Contato />
            </main>

            <Footer />
        </div>
    )
}