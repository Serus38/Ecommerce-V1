import {createBrowserRouter} from 'react-router-dom';
import { RootLayout } from '../layouts/Rootlayout';
import { HomePage, ProductsPage, AboutPage, ProductPage, LoginPage, RegisterPage } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {index: true,
            element: <HomePage />
            },
            {path: 'Products',
            element: <ProductsPage />
            },
            {
                path: 'Products/:slug',
                element: <ProductPage />
            },
            {path: 'About',
            element: <AboutPage />
            },
            {
                path: 'Login',
                element: <LoginPage />
            },
            {path: 'Register',
            element: <RegisterPage />
            }
        ]
    },
]);