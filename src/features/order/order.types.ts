import { BookProps } from "../book/bookTypes";
import { UserProps } from "../user/userTypes";

export interface OrderProps {
    id: number;
    user: UserProps;
    products: BookProps[];
    totalItems: 0;
    totalOrder: 0;
    status: "in progress" | "completed"
}

export interface OrderState {
    status: "idle" | "loading" | "succeeded" | "failed";
    orders: BookProps[];
    modal: boolean;
    currentOrder: OrderProps | null;
    error: string | null;
}