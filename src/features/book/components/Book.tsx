import { BookProps } from "../bookTypes";
import { formatMoney } from "../../../helpers/utilities";

export default function Book({ book }: { book: BookProps }): JSX.Element {
    const { title, price, image } = book;

    return (
        <div className="border w-80 p-6 shadow rounded-xl bg-white">
            <div className="flex flex-col items-center">
                <img
                    src={`/img/${image}.JPG`}
                    alt={`${title} image`}
                    className="w-auto object-cover rounded-xl"
                />

                <div className="p-5 flex flex-col items-start">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="mt-5 font-black text-4xl text-amber-500 bottom-0">
                        {formatMoney(price)}
                    </p>
                </div>
            </div>
        </div>
    );
}
