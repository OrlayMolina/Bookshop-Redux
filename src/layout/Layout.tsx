import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";

export default function Home(): JSX.Element {
    const [isChatFloating, setIsChatFloating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setIsChatFloating(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-gray-50">
            <Header />
            <main className="relative">
                <Outlet />
                {/* bubble talk */}
                <div className={`absolute mt-6 right-8 bg-orange-500 text-white cursor-pointer rounded-full p-3 flex items-center transition-transform duration-300 ${isChatFloating ? 'transform translate-y-0' : 'transform translate-y-20'}`}>
                    <FiMessageSquare className="text-xl mr-2" />
                    <span className="text-sm">Need help?</span>
                </div>
            </main>
            <Footer />
        </div>
    );
}
