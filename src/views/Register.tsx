import { Link } from "react-router-dom";

export default function Register(): JSX.Element {
    return (
        <>
            <h1 className="text-4xl font-black">Create your Account</h1>
            <p>Create your Account by filling out the form</p>

            <div className="bg-white shadow-xl rounded-xl mt-10 px-5">
                <form 
                    className="flex flex-col space-y-5 p-5"
                    noValidate
                >
                <div className="mb-4">
                    <label htmlFor="name" className="text-slate-800">
                    Name:
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="name"
                    placeholder="your Name"
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
                    placeholder="your Email"
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
                    placeholder="your Password"
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
