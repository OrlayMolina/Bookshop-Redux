import clienteAxios from "../../config/axios";
import { UserProps } from "./userTypes";

export type GetUserResponse = {
    data: UserProps[];
}

const getUsers = async () => {
    try {
        const response = await clienteAxios.get<GetUserResponse>('/api/users');
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export {
    getUsers
}