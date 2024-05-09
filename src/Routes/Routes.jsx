import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main.jsx';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';

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
        }
    ]
  }
])

export default router;