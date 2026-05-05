import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Contato from "./pages/contato.jsx";
import Home from "./pages/home.jsx";
import Sobre from "./pages/sobre.jsx";

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