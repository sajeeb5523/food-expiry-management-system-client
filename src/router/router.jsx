import {
    createBrowserRouter
} from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Fridge from "../pages/Fridge/Fridge";
import AddFood from "../pages/AddFood/AddFood";
import MyItems from "../pages/MyItems/MyItems";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import Error from "../pages/Error/Error";
import AboutUs from "../pages/AboutUs/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/fridge',
                loader: () => fetch('https://fets-bd-server.vercel.app/foods'),
                Component: Fridge,
            },
            {
                path: '/about-us',
                Component: AboutUs,
            },
            {
                path: '/food/:id',
                loader: ({ params }) => fetch(`https://fets-bd-server.vercel.app/foods/${params.id}`).then(res => res.json()),
                Component: FoodDetails,
            },
            {
                path: '/add-food',
                element: <PrivateRoutes>
                    <AddFood></AddFood>
                </PrivateRoutes>
            },
            {
                path: '/my-items',
                element: <PrivateRoutes>
                    <MyItems></MyItems>
                </PrivateRoutes>
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/login',
                Component: Login,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    },
    {
        path: '*',
        Component: Error,
    }
]);

export default router;