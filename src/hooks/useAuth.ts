// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import clienteAxios from "../config/axios";
// import useSWR from "swr";

// type Middleware = 'guest' | 'auth' |'admin';

// export const useAuth = ({middleware, url}: {middleware: Middleware, url: string}) => {

//     const token = localStorage.getItem('AUTH_TOKEN');
//     const navigate = useNavigate();

//     const { data: user, error, mutate}  = useSWR('/api/user', () => 
//         clienteAxios('/api/user', {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then(res => res.data)
//         .catch(error => {
//             throw Error(error?.response?.data?.errors);
//         })
//     );

//     const register = async (datos: { name: string, email: string, password: string, password_confirmation: string }, setErrors: (errors: string[]) => void, setSuccess: (success: boolean) => void) => {
        
//         try {
//             const {data} = await clienteAxios.post('/api/register', datos);
//             localStorage.setItem('AUTH_TOKEN', data.token);
//             setErrors([]);
//             await mutate();

//             setSuccess(true);
//             setTimeout(() => {
//                 setSuccess(false);
//             }, 3000);
//         } catch (error: any) {
//             setErrors(Object.values(error.response.data.errors));
//         }
//     }

//     useEffect(() => {
//         if(middleware === 'guest' && url && user) {
//             navigate(url);
//         }
//         if(middleware === 'guest' && user && user.admin){
//             navigate('/admin');
//         }
//         if(middleware === 'admin' && user && !user.admin){
//             navigate('/');
//         }
//         if(middleware === 'auth' && error != null){
//             navigate('/auth/login');
//         }
//     }, [user, error]);

//     return {
//         user, 
//         register
//     };

// }