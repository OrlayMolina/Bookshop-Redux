import clienteAxios from "../../config/axios";
import { BookProps } from "./bookTypes";

export type GetBookResponse = {
    data: BookProps[];
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

export {
    getBooks
}