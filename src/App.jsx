// import Cart from "./components/cart"
import Header from "./components/Header"
import ProductsList from "./pages/ProductsList";
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import ProductsDetails from "./pages/ProductsDetails";
import Order from "./pages/Order";

import {createBrowserRouter,  RouterProvider} from 'react-router-dom';

const allPath = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    children:[
      {
        path:'/',
        element:<ProductsList/>
      },{
        path:'/cart',
        element:<Cart/>
      },{
        path:'/checkout',
        element:<CheckOut/>
      },{
        path:'/products/:id',
        element:<ProductsDetails/>
      },{
        path:'/order',
        element:<Order/>
      }, {
        path:'*',
        element:<ProductsList/>
      },
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={allPath} />
  )
}

export default App
