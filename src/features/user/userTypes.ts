export interface UserProps {
    id: number;
    name: string;
    email: string;
    password: string;
    admin: boolean;
}

export interface UserState {
    status: "idle" | "loading" | "succeeded" | "failed";
    users: UserProps[];
    totalItems: number;
    modal: boolean;
    currentUser: UserProps | null;
}