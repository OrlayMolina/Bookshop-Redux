import { Link } from "react-router-dom";

export default function Login(): JSX.Element {
    return (
        <>
            <h1 className="text-4xl font-black">Log In</h1>
            <p>To create an order you must log in</p>

            <div className="bg-white shadow-lg rounded-md mt-10 px-5 py-10">
                <form 
                    noValidate
                >
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

                    />
                </div>

                <input
                    type="submit"
                    value="Log in"
                    className="bg-teal-600 hover:bg-teal-800 text-white w-full rounded-xl shadow-md mt-5 p-3 uppercase font-bold cursor-pointer"
                />
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/account/register">
                    You do not have an account?, {''}
                    <span className="font-medium">Create an Account</span>
                </Link>
            </nav>
        </>
    );
}
