import { Home, Popular, TopRated, NowPlaying, MyFavorites } from "../pages";
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
            { path: ROUTES.TOP_RATED.path, element: <TopRated/>},
            { path: ROUTES.NOW_PLAYING.path, element: <NowPlaying/>},
            { path: ROUTES.MY_FAVORITES.path, element: <MyFavorites/>},
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
