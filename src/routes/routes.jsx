import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddEquipment from "../pages/AddEquipment";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import EquipDetails from "../pages/EquipDetails";
import AllSports from "../pages/AllSports";
import MyEquip from "../pages/MyEquip";


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
                path: '/details/:id',
                element: <EquipDetails></EquipDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/sports/${params.id}`)
            },
            {
                path: '/allsports',
                element: <AllSports></AllSports>,
                loader: ()=> fetch('http://localhost:5000/sports')
            },
            {
                path: '/myequip',
                element: <MyEquip></MyEquip>,
                loader: ()=> fetch('http://localhost:5000/sports')
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;