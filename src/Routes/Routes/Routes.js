import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import About from "../../Pages/Others/About/About";
import Hotels from "../../Pages/Others/Hotels/Hotels";
import Place from "../../Pages/Others/Place/Place";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/places/:id',
        element: <Place></Place>,
        loader: ({ params }) => fetch(`https://travel-guru-server-tau.vercel.app/places/${params.id}`)
      },
      {
        path: '/hotels/:id',
        element: <Hotels></Hotels>,
        loader: ({ params }) => fetch(`https://travel-guru-server-tau.vercel.app/hotels/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  }
]);