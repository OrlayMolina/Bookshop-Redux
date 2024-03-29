import { BookProps } from "../bookTypes";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, setModal, setCurrentBook } from "../bookSlice";
import { formatMoney } from "../../../helpers/utilities";

export default function Book({ book }: { book: BookProps }): JSX.Element {

    const dispatch = useDispatch();
    const { title, price, image } = book;
    const modalBook = useSelector(selectModal);

    const toggleModal = () => {
        const newState = !modalBook;
        dispatch(setModal(newState));
    }

    const handleSetBook = () => {
        dispatch(setCurrentBook(book));
    }

    return (
        <div className="border w-80 p-6 shadow rounded-xl bg-white">
            <div className="flex flex-col items-center">
                <img
                    src={`/img/${image}.JPG`}
                    alt={`${title} image`}
                    className="w-auto object-cover rounded-xl cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
                />

                <div className="p-5 flex flex-col items-start">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="mt-5 font-black text-4xl text-amber-500 bottom-0">
                        {formatMoney(price)}
                    </p>
                </div>

                <button 
                    type="button"
                    className="bg-teal-600 hover:bg-teal-800 text-white w-full mt-5 p-3 uppercase rounded-2xl font-bold"
                    onClick={() => {
                        toggleModal();
                        handleSetBook();
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
