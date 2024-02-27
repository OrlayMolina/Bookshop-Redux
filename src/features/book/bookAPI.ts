import clienteAxios from "../../config/axios";
import { BookProps, LiteraryGenreProps } from "./bookTypes";

export type GetBookResponse = {
    data: BookProps[];
}

export type GetLiteraryGenreResponse = {
    data: LiteraryGenreProps[];
}

const getBooks = async () => {
    try {
        const response = await clienteAxios.get<GetBookResponse>('/api/books');
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

const getCategories = async () => {
    try {
        const response = await clienteAxios.get<GetLiteraryGenreResponse>('/api/literary_genre');
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export {
    getBooks,
    getCategories
}