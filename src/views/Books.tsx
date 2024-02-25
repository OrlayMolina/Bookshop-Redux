import Book from "../features/book/components/Book";
import Spinner from "../components/Spinner";
import { BookProps } from "../features/book/bookTypes";
import { useSelector } from 'react-redux';
import useSWR from "swr";
import { GetBookResponse } from "../features/book/bookAPI";
import { AxiosResponse } from 'axios';
import clienteAxios from "../config/axios";
import { selectCurrentLiteraryGenre } from "../features/book/bookSlice";

export default function Books(): JSX.Element {
    const currentLiteraryGenre = useSelector(selectCurrentLiteraryGenre);

    // Consulta SWR
    const fetcher = async (): Promise<BookProps[]> => {
        const response: AxiosResponse<GetBookResponse> = await clienteAxios.get('/api/books');
        console.log(response.data.data);
        return response.data.data;
    };
    const { data, error, isLoading } = useSWR<BookProps[]>('/api/books', fetcher);

    if (isLoading) return <div className="flex py-48 justify-center"><Spinner /></div>;
    if (error) return <div className="text-center text-2xl font-bold">There was an error</div>;

    const leakedBooks = currentLiteraryGenre
  ? data?.filter(book => book.literary_genre_id === currentLiteraryGenre.id)
  : data;

    return (
        <div className="mt-10 mx-6 md:mx-12 lg:mx-16">
            <h1 className="text-4xl text-white font-bold">
                <span className="px-4 py-1 bg-teal-600 rounded-xl shadow-lg">Books</span>
            </h1>
            <p className="text-2xl my-10">
                Find the best collection on the market.
            </p>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
                {leakedBooks?.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                    />
                ))}
            </div>
        </div>
    )
}
