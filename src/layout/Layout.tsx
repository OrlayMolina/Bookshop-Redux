import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Home(): JSX.Element{
    return (
        <div className="bg-gray-50">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
