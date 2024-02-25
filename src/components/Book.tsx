import { BookProps } from "../features/book/bookTypes";
import { formatMoney } from "../helpers/utilities";

export default function Book({book}: {book: BookProps}):JSX.Element {


    const { title, price, image } = book;

    return (
        <div className="border p-3 shadow bg-white">
            <img 
                src={`/img/${image}.jpg`}
                alt={`imagen ${title}`} 
                className="w-full"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatMoney(price)}</p>
            </div>

        </div>
    )
}
