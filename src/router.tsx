import {createBrowserRouter} from 'react-router-dom';
import Layout from './layout/Layout';
import Books from './views/Books';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Books />
            }
        ]
    }
]);

export default router;
