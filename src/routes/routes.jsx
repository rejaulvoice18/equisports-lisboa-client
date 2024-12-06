import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddEquipment from "../pages/AddEquipment";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
        {
            path: '/addequipment',
            element: <AddEquipment></AddEquipment>
        }
        ]
    }
])

export default router;