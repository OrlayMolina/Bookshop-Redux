import Category from "./Category";
import { useEffect } from "react";
import { LiteraryGenreProps } from "../features/book/bookTypes";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from 'react-redux';
import { selectLiteraryGenres, setCurrentLiteraryGenre, fetchCategoriesAsync} from "../features/book/bookSlice";
import { AppDispatch } from "../app/store";

export default function Sidebar(): JSX.Element {

    const dispatch = useDispatch<AppDispatch>();
    const categories: LiteraryGenreProps[] = useSelector(selectLiteraryGenres);
    const { user} = useAuth({middleware: 'auth', url: '/'})

    const handleClickCategory = (category: LiteraryGenreProps) => {
        dispatch(setCurrentLiteraryGenre(category));
    }

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, [dispatch]);

    return (
        <aside className="md:w-70 mx-4">
            <div className="p-4">
                <img 
                    className="w-40 m-auto"
                    src="/img/logo_backgorund_white.JPG" 
                    alt="imagen logo" 
                />
            </div>

            <p className="my-10 text-xl text-center font-bold">
                Hi: {user?.name}
            </p>

            <div className="mt-10">
                {categories && categories.map((category: LiteraryGenreProps) => (
                    <Category
                        key={category.id}
                        category={category} 
                        onClickCategory={() => handleClickCategory(category)}
                    
                    />
                ))}
            </div>

            <div className="my-5 px-5">

            </div>
        </aside>
    )
}
