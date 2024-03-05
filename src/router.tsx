import {createBrowserRouter} from 'react-router-dom';
import Layout from './layout/Layout';
import Books from './views/Books';
import Home from './views/Home';
import AuthLayout from './layout/AuthLayout';
import Login from './views/Login';
import Register from './views/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/books',
                element: <Books />
            }
        ]
    },
    {
        path: '/account',
        element: <AuthLayout />,
        children: [
            {
                path: '/account/login',
                element: <Login />
            },
            {
                path: '/account/register',
                element: <Register />
            }
        ]
    }
]);

export default router;
