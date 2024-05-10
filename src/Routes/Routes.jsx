import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main.jsx';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import AllFoods from '../pages/AllFoods/AllFoods.jsx';
import SingleFoodDetails from '../pages/SingleFoodDetails/SingleFoodDetails.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<NotFound></NotFound>,
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/sign-up',
            element:<SignUp></SignUp>
        },
        {
          path:'/all-foods',
          element:<AllFoods></AllFoods>
        },
        {
          path:"/food-details",
          element:<SingleFoodDetails></SingleFoodDetails>
        }
    ]
  }
])

export default router;