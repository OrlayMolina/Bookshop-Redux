import { useSelector } from "react-redux";
import { LiteraryGenreProps } from "../features/book/bookTypes";
import { selectCurrentLiteraryGenre } from "../features/book/bookSlice";

interface CategoriesProps {
    category: LiteraryGenreProps;
    onClickCategory: () => void;
}

export default function Category({ category, onClickCategory }: CategoriesProps): JSX.Element  {

    const currentLiteraryGenre = useSelector(selectCurrentLiteraryGenre);
    const { id, genre} = category;

    return (
        <div className={`${currentLiteraryGenre?.id ===  id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>

            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                onClick={() => onClickCategory()}
            >
                {genre}
            </button>
        </div>
    )
}
