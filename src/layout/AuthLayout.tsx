import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FiMessageSquare } from "react-icons/fi";

export default function AuthLayout(): JSX.Element {

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
        <div className="bg-gray-100">
            <Header />
            <h1 className="mt-6 text-center font-sans font-medium text-3xl text-white py-4">
                <span className="px-8 py-1 bg-teal-600 rounded-xl shadow-lg">Welcome to Practice Library!</span>
            </h1>
            <main className="max-w-4xl m-auto mt-4 mb-10 md:mb-14 lg:mb-32 flex flex-col md:flex-row items-center">

                <img
                    src="../../public/img/logo_backgorund_white.JPG"
                    alt="Logo image"
                    className="max-w-xs bg-white rounded-full px-14 py-4 shadow-lg"
                />
                
                <div className="p-10 w-full">
                    <Outlet />
                    {/* bubble talk */}
                    <div className={`absolute mt-6 right-8 bg-orange-500 text-white cursor-pointer rounded-full p-3 flex items-center transition-transform duration-300 ${isChatFloating ? 'transform translate-y-0' : 'transform translate-y-20'}`}>
                        <FiMessageSquare className="text-xl mr-2" />
                        <span className="text-sm">Need help?</span>
                    </div>
                </div>
                
            </main>
            <Footer />
        </div>
  )
}
