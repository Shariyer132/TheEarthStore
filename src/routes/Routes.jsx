import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Errorpage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";
import Dashboard from "../layouts/Dashboard";
import ProductDashboard from "../components/Dashboard/ProductDashboard/ProductDashboard";
import Transactions from "../components/Dashboard/Transactions/Transactions";
import BuyedProducts from "../components/Dashboard/Transactions/BuyedProducts";
import ProductDetails from "../components/Dashboard/ProductDashboard/ProductDetails";
import CreateProduct from "../components/Dashboard/CreateProduct/CreateProduct";
import AdminHome from "../components/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome/>
            },
            {
                path: 'productDashboard',
                element: <ProductDashboard/>
            },
            {
                path: 'transactions',
                element: <Transactions/>
            },
            {
                path: 'buyedProduct',
                element:<BuyedProducts/>
            },
            {
                path: 'productDetails',
                element: <ProductDetails/>
            },
            {
                path: 'createProduct',
                element: <CreateProduct/>
            }
        ],
    },
    { path: '/login', element: <h2>login</h2> },
    { path: '/signup', element: <h2>sign up</h2> }
])