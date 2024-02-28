import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import clienteAxios from '../config/axios';
import { selectBooks, selectCurrentLiteraryGenre, fetchBooksAsync } from '../features/book/bookSlice';
import { BookProps } from '../features/book/bookTypes';
import Book from '../features/book/components/Book';
import Spinner from '../components/Spinner';

export default function Books(): JSX.Element {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);
    const currentCategory = useSelector(selectCurrentLiteraryGenre);
    const title = currentCategory?.genre ? currentCategory.genre : 'Books';
    const token = localStorage.getItem('AUTH_TOKEN');

    // Consulta SWR
    const fetcher = async (): Promise<BookProps[]> => {
        const response = await clienteAxios.get('/api/books', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data;
    };

    const { data, error, isLoading } = useSWR<BookProps[]>('/api/books', fetcher);

    useEffect(() => {
        dispatch(fetchBooksAsync());
    }, [dispatch]);

    if (isLoading) return <div className="flex py-48 justify-center"><Spinner /></div>;
    if (error) return <div className="text-center text-2xl font-bold">There was an error</div>;

    const leakedBooks = currentCategory?.id ? books.filter(book => book.literary_genre_id === currentCategory?.id) : books;

    return (
        <>
            <div className="mt-10 mx-6 md:mx-12 lg:mx-16">
                <h1 className="text-4xl text-white font-bold">
                    <span className="px-4 py-1 bg-teal-600 rounded-xl shadow-lg">{title}</span>
                </h1>
                <p className="text-2xl my-10">Choose your favorite books.</p>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                    {leakedBooks.map((book: BookProps) => (
                        <Book
                            key={book.id}
                            book={book}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
