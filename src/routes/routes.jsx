import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddEquipment from "../pages/AddEquipment";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addequipment',
                element: <AddEquipment></AddEquipment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;