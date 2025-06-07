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
                loader: () => fetch('http://localhost:3000/foods'),
                Component: Fridge,
            },
            {
                path: '/food/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/foods/${params.id}`).then(res => res.json()),
                Component: FoodDetails,
            },
            {
                path: '/add-food',
                Component: AddFood,
            },
            {
                path: '/my-items',
                Component: MyItems,
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
]);

export default router;