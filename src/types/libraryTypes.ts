export interface DataRegister {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    password_confirmation: string | undefined;
}

export interface DataLogin {
    email: string | undefined;
    password: string | undefined;
}