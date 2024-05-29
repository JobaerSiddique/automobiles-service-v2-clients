
import EmergencyService from "../Bookings/EmergencyService";
import AddGarage from "../Dashboard/AddGarage/AddGarage";
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
import AllPayment from "../Payment/Payment/AllPayment/AllPayment";
import GaragePayment from "../Payment/Payment/GaragePayment";
import GaragePaymentFail from "../Payment/Payment/GaragePaymentSection/GaragePaymentFail";
import GaragePaymentSuccess from "../Payment/Payment/GaragePaymentSection/GaragePaymentSuccess";
import NewPayment from "../Payment/Payment/NewPayment/NewPayment";
import SingleGaragepay from "../Payment/Payment/NewPayment/SingleGaragepay";
import Payment from "../Payment/Payment/Payment";
import PaymentFailed from "../Payment/Payment/PaymentFailed";
import PaymentHistory from "../Payment/Payment/PaymentHistory";
import PaymentSuccess from "../Payment/Payment/PaymentSuccess";
import Register from "../Register/Register";
import NotFound from "../Shared/NotFound";
import GarageHome from "../components/GarageHome/GarageHome";
import AdminRoutes from "./AdminRoutes";
import GarageRoutes from "./GarageRoutes";
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
                loader:({params})=>fetch(`https://taqwaa-services-v2-servers.vercel.app/garages/${params.id}`)
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
                element:<RequireAuth><EmergencyService/></RequireAuth>
            },
           
            {
                path:'/payment/:id',
                element:<Payment/>,
                loader:({params})=> fetch(`https://taqwaa-services-v2-servers.vercel.app/booked/${params.id}`)
            },
            {
                path:'/payment/success/:transId',
                element:<PaymentSuccess/>,
                
            },
            
            {
                path:'/garage/payment/failed/:transId',
                element:<GaragePaymentFail/>,
                
            },
            {
                path:'/payment/failed/:transId',
                element:<PaymentFailed/>,
                
            },
            {
                path:'*',
                element:<NotFound/>,
                
            },
           
           
           
        ]
        
       
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
           {
            path:'/dashboard',
            element:<RequireAuth><MyAppoinment/></RequireAuth>
           },
           {
            path:'/dashboard/payment/paymenthistory',
            element:<RequireAuth><PaymentHistory/></RequireAuth>
           },
           {
            path:'/dashboard/review',
            element:<RequireAuth><Review/></RequireAuth>
           },
           {
            path:'/dashboard/user',
            element:<RequireAuth><AdminRoutes><AllUsers/></AdminRoutes></RequireAuth>
           },
           {
            path:'/dashboard/admin/allGarage',
            element:<RequireAuth><AdminRoutes><AllGarages/></AdminRoutes></RequireAuth>
           },
           {
            path:'/dashboard/admin/manageOrders',
            element:<RequireAuth><AdminRoutes><ManageAllOrder/></AdminRoutes></RequireAuth>
           },
           {
            path:'/dashboard/admin/add-garage',
            element:<RequireAuth><AdminRoutes><AddGarage/></AdminRoutes></RequireAuth>
           },
           {
            path:'/dashboard/admin/allpayment',
            element:<RequireAuth><AdminRoutes><NewPayment/></AdminRoutes></RequireAuth>,
            
           },
           {
            path:'/dashboard/garage/payment/success/:transId',
            element:<AdminRoutes><GaragePaymentSuccess/></AdminRoutes>,
            
        },
        //    {
        //     path:'/dashboard/admin/garagePayment',
        //     element:<RequireAuth><AdminRoutes><GaragePayment/></AdminRoutes></RequireAuth>
        //    },
        //    {
        //     path:'/dashboard/admin/garagePayment/:id',
        //     element:<RequireAuth><AdminRoutes><SingleGaragepay/></AdminRoutes></RequireAuth>,
        //     loader:({params})=> fetch(`http://localhost:5000/garagePayment/${params.id}`)
        //    },
           
           {
            path:'/dashboard/garage/garagehome',
            element:<RequireAuth><GarageRoutes><GarageHome/></GarageRoutes></RequireAuth>
           }
        ]
    }
])
export default router;