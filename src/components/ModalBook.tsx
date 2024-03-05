import { useState, useEffect } from "react";
import { formatMoney } from "../helpers/utilities";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, setModal, selectCurrentBook } from "../features/book/bookSlice";
import { selectOrders } from "../features/order/orderSlice";

export default function ModalBook() {

    const dispatch = useDispatch();
    const modal = useSelector(selectModal);
    const book = useSelector(selectCurrentBook);
    const order = useSelector(selectOrders);
    const { title, image, price } = book || {};
    const [quantity, setQuantity] = useState(1);
    const [edition, setEdition] = useState(false);

    useEffect(()=> {
        if(order.some(orderState => orderState.id === book?.id)){
            const bookEdit = order.filter( orderState => orderState.id === book?.id)[0];

            if (bookEdit && bookEdit.quantity) {
                setQuantity(bookEdit.quantity);
                setEdition(true);
            }
        }
    }, [order, book?.id]);

    const changeModal = () => {
        const newState = !modal;
        dispatch(setModal(newState));
    }

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">

                <img 
                    src={`/img/${image}.JPG`} 
                    alt={`Imagen producto ${title}`} 
                />

            </div>

            <div className="md:w-2/3">

                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            changeModal();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>
                </div>

                <h1 className="text-3xl font-bold mt-5">
                    {title}
                </h1>

                <p className="mt-5 font-black text-5xl text-amber-500">{formatMoney(price || 0)}</p>

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (quantity <= 1 ) return
                            setQuantity(quantity - 1);
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>
                    </button>
                    <p className="text-3xl">{quantity}</p>

                    <button
                        type="button"
                        onClick={() => {
                            if (quantity >= 5 ) return
                            setQuantity(quantity + 1);
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>
                    </button>
                </div>

                <button
                    type="button"
                    className="bg-teal-600 hover:bg-teal-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded-md"
                >
                    {edition ? 'Save Changes' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}
