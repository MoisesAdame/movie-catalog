import { Home, Popular, TopRated, NowPlaying, MyFavorites, Show, Login, Register } from "../pages";
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from "./constants";
import { useAppContext } from "../store/app-context/app-context";

export const AppRouter = () => {
    const { user } = useAppContext();
    const isLogged = Boolean(user);

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
                { path: `${ROUTES.SHOW.path}:id`, element: <Show/>},
            ],
        },
        {
            path: '/', 
            element: isLogged ? <Navigate to={ROUTES.HOME.path}/> : <PublicRouter/>,
            children: [
                { path: ROUTES.Register.path, element: <Register/>},
                { path: ROUTES.Login.path, element: <Login/>},
            ],
        }
    ];

    return createBrowserRouter(routes);
}


