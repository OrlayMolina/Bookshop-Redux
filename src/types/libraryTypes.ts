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

export interface CustomProps {
    content: {
        top?: string | number;
        left?: string | number;
        bottom?: string | number;
        right?: string | number;
        transform?: "none" | "translate" | "rotate" | string;
        marginRight?: string;
    }
}