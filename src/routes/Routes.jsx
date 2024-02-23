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
import Orderpage from "../components/Home/Order/Orderpage";
import ShopNow from "../components/Home/Shop/ShopNow";
import ShopingCart from "../components/Home/ShopingCart/ShopingCart";
import ManageUsers from "../components/Dashboard/ManageUsers/ManageUsers";
import SingleUser from "../components/Dashboard/ManageUsers/SingleUser";

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
            {
                path: '/orders',
                element: <Orderpage/>
            },
            {
                path: '/shop',
                element: <ShopNow/>
            },
            {
                path: '/shopingCart',
                element: <ShopingCart/>
            }
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
            },
            {
                path: 'manageUsers',
                element: <ManageUsers/>
            },
            {
                path: 'user',
                element: <SingleUser/>
            }
        ],
    },
    { path: '/login', element: <h2>login</h2> },
    { path: '/signup', element: <h2>sign up</h2> }
])