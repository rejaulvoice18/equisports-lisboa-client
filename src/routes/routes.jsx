import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddEquipment from "../pages/AddEquipment";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import EquipDetails from "../pages/EquipDetails";
import AllSports from "../pages/AllSports";
import MyEquip from "../pages/MyEquip";
import UpdateEquip from "../components/UpdateEquip";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addequipment',
                element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <EquipDetails></EquipDetails>,
                loader: ({params}) => fetch(`https://equisports-lisboa-server.vercel.app/sports/${params.id}`)
            },
            {
                path: '/updateequip/:id',
                element: <PrivateRoute><UpdateEquip></UpdateEquip></PrivateRoute>,
                loader: ({params}) => fetch(`https://equisports-lisboa-server.vercel.app/sports/${params.id}`)
            },
            {
                path: '/allsports',
                element: <AllSports></AllSports>,
                loader: ()=> fetch('https://equisports-lisboa-server.vercel.app/sports')
            },
            {
                path: '/myequip',
                element: <MyEquip></MyEquip>,
                loader: ()=> fetch('https://equisports-lisboa-server.vercel.app/sports')
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default router;