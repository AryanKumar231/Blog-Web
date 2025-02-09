import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Contact from "./pages/Contact";
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

const App = () => {

    const { isAuthenticated } = useSelector(state => state.auth);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <h1 className="w-full h-screen grid place-items-center text-5xl text-red-700">Page not Found!!</h1>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/detail/:id',
                    element: <Detail />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/write',
                    element: (isAuthenticated ? <Write /> : <><Navigate to='/' /></>)
                },
                {
                    path: '/profile',
                    element: (isAuthenticated ? <Profile /> : <><Navigate to='/' /></>)
                }
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;