import MessageConfirmation from "../components/MessageConfirmation";
import Alert from "../components/Alert";
import { createRef, RefObject, useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { Data } from "../types/libraryTypes";
import clienteAxios from "../config/axios";

export default function Register(): JSX.Element {

    const nameRef: RefObject<HTMLInputElement> = createRef();
    const emailRef: RefObject<HTMLInputElement> =  createRef();
    const passwordRef: RefObject<HTMLInputElement> = createRef();
    const passwordConfirmationRef: RefObject<HTMLInputElement> = createRef();

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);
    // const { register } = useAuth({middleware: 'guest', url: '/'});

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data: Data = {
            name: nameRef?.current?.value || '',
            email: emailRef?.current?.value,
            password: passwordRef?.current?.value,
            password_confirmation: passwordConfirmationRef?.current?.value
        };

        // register(data, setErrors, setSuccess);

        try {
            const response = await clienteAxios.post('/api/register', data);
            console.log(response);  
        } catch (error) {
            console.log(Object.values(error?.response.data.errors));
        }
    }

    return (
        <>
            <h1 className="text-4xl font-black">Create your Account</h1>
            <p>Create your Account by filling out the form</p>

            <div className="bg-white shadow-xl rounded-xl mt-10 px-5">
                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-5 p-5"
                    noValidate
                >
                    {errors ? errors.map((error, i )=> <Alert key={i}>{error}</Alert>): null}

                    {success && (
                        <MessageConfirmation>User created successfully </MessageConfirmation>
                    )}
                <div className="mb-4">
                    <label htmlFor="name" className="text-slate-800">
                    Name:
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="name"
                    placeholder="Your Name"
                    ref={nameRef}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="text-slate-800">
                    Email:
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="email"
                    placeholder="Your Email"
                    ref={emailRef}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="text-slate-800">
                    Password:
                    </label>
                    <input
                    type="password"
                    id="password"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="password"
                    placeholder="Your Password"
                    ref={passwordRef}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password_confirmation" className="text-slate-800">
                    Repeat Password:
                    </label>
                    <input
                    type="password"
                    id="password_confirmation"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="password_confirmation"
                    placeholder="Repeat Password"
                    ref={passwordConfirmationRef}
                    />
                </div>

                <input
                    type="submit"
                    value="Create Account"
                    className="bg-teal-600 hover:bg-teal-800 text-white w-full rounded-xl shadow-md mt-5 p-3 uppercase font-bold cursor-pointer"
                />
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/account/login">Do you already have an account?, {''}
                    <span className="font-medium">Log in</span>
                </Link>
            </nav>
        </>
    );
}
