import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main.jsx';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import AllFoods from '../pages/AllFoods/AllFoods.jsx';
import SingleFoodDetails from '../pages/SingleFoodDetails/SingleFoodDetails.jsx';
import Gallery from '../pages/Gallery/Gallery.jsx';
import MyFoodItemPage from '../pages/MyFoodItemPage/MyFoodItemPage.jsx';
import AddFoodItemPage from '../pages/AddFoodItemPage/AddFoodItemPage.jsx';
import FoodPurchasePage from '../pages/FoodPurchasePage/FoodPurchasePage.jsx';
import UpdatePage from '../pages/UpdatePage/UpdatePage.jsx';
import MyPurchasedPage from '../pages/MyPurchasedPage/MyPurchasedPage.jsx';

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
          path:"/food-details/:id",
          element:<SingleFoodDetails></SingleFoodDetails>,
          loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
        },
        {
          path:'/gallery',
          element:<Gallery></Gallery>
        },
        {
          path:'/my-food-items',
          element:<MyFoodItemPage></MyFoodItemPage>
        },
        {
          path:"/add-food-item",
          element:<AddFoodItemPage></AddFoodItemPage>
        },
        {
          path:'/food-purchase/:id',
          element:<FoodPurchasePage></FoodPurchasePage>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)

        },
        {
          path:'/update/:id',
          element:<UpdatePage></UpdatePage>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
        },
        {
          path:'/my-ordered-items',
          element:<MyPurchasedPage></MyPurchasedPage>
        }
    ]
  }
])

export default router;