import Book from "../components/Book";
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

    const leakedBooks = Array.isArray(data) ? data.filter(book => book.literary_genre_id === currentLiteraryGenre?.id) : [];

    return (
        <div>
            <h1 className="text-4xl font-black">Books</h1>
            <p className="text-2xl my-10">
                Find the best collection on the market.
            </p>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
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
