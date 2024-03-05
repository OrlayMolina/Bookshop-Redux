export interface BookProps {
    id: number;
    title: string;
    author: string;
    image: string;
    literary_genre_id: number;
    language: string;
    quantity?: number;
    editorial: string;
    edition_year: string;
    available: boolean;
    price: number;
}

export interface BookState {
    status: "idle" | "loading" | "succeeded" | "failed";
    books: BookProps[];
    totalItems: number;
    literaryGenres: LiteraryGenreProps[];
    modal: boolean;
    currentLiteraryGenre: LiteraryGenreProps | null;
    currentBook: BookProps | null;
}

export interface LiteraryGenreProps {
    id: number;
    genre: string;
}