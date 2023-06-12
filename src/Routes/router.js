


import EmergencyService from "../Bookings/EmergencyService";
import AllGarages from "../Dashboard/AllGarages";
import AllUsers from "../Dashboard/AllUsers";
import ManageAllOrder from "../Dashboard/ManageAllOrder";
import MyAppoinment from "../Dashboard/MyAppoinment";
import Review from "../Dashboard/Review";
import DashboardLayout from "../Layout/DashBoardLayout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Garage from "../Pages/GarageList/Garage";
import Garages from "../Pages/GarageList/Garages";
import Home from "../Pages/Home";
import Register from "../Register/Register";
import AdminRoutes from "./AdminRoutes";
import RequireAuth from "./RequireAuth";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/garagesList',
                element:<RequireAuth><Garages/></RequireAuth>
            },
            {
                path:'/garage/:id',
                element:<Garage/>,
                loader:({params})=>fetch(`http://localhost:5000/garages/${params.id}`)
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/Register',
                element:<Register/>
            },
            {
                path:'/emergencyService',
                element:<EmergencyService/>
            },
           
           
           
        ]
        
       
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
           {
            path:'/dashboard',
            element:<MyAppoinment/>
           },
           {
            path:'/dashboard/review',
            element:<Review/>
           },
           {
            path:'/dashboard/user',
            element:<AdminRoutes><AllUsers/></AdminRoutes>
           },
           {
            path:'/dashboard/admin/allGarage',
            element:<AdminRoutes><AllGarages/></AdminRoutes>
           },
           {
            path:'/dashboard/admin/manageOrders',
            element:<AdminRoutes><ManageAllOrder/></AdminRoutes>
           }
        ]
    }
])
export default router;