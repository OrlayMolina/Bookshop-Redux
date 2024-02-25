import ShippingInfo from "../components/ShippingInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Books from "../views/Books";

export default function Home(): JSX.Element{
    return (
        <div className="bg-gray-50">
            <Header />

            <main>
                <Books />
            </main>

            <Footer />
        </div>
    )
}
