import { Home, Popular } from "../pages";
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from "./constants";

const routes: RouteObject[] = [
    {
        path: '/', 
        element: <PrivateRouter/>,
        children: [
            { path: ROUTES.HOME.path, element: <Home/>},
            { path: ROUTES.POPULAR.path, element: <Popular/>},
        ],
    },
    {
        path: '/login', 
        element: <PublicRouter/>,
        children: [
            { path: '/login', element: <div> Log In </div>}
        ],
    }
]

export const router = createBrowserRouter(routes);
