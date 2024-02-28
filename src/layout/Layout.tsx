import { useState, useEffect } from "react";
import Modal from "react-modal";
import { selectModal } from "../features/book/bookSlice";
import { useSelector } from "react-redux";
import ModalBook from "../components/ModalBook";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { useAuth } from "../hooks/useAuth";
import { CustomProps } from "../types/libraryTypes";

const customStyles: CustomProps = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement('#root');

export default function Layout(): JSX.Element {

    useAuth({middleware: 'auth'});
    const modal = useSelector(selectModal);
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
        <>
            <Header />
            <div className="md:flex">
                <div className="md:w-2/12" >
                    <Sidebar/>   
                </div>
                <div className="md:w-10/12 bg-gray-50">
                    
                    <main className="relative">
                        <Outlet />
                        {/* bubble talk */}
                        <div className={`absolute mt-6 right-8 bg-orange-500 text-white cursor-pointer rounded-full p-3 flex items-center transition-transform duration-300 ${isChatFloating ? 'transform translate-y-0' : 'transform translate-y-20'}`}>
                            <FiMessageSquare className="text-xl mr-2" />
                            <span className="text-sm">Need help?</span>
                        </div>
                    </main>
                    
                </div>
            </div>
            <Footer />

            <Modal isOpen={modal} style={customStyles}>
                <ModalBook/>
            </Modal>
        </>
    );
}
