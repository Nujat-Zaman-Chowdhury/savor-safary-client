
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//#82bd69
const Navbar = () => {
    const {user,logOut} = useAuth()

    return (
        <div className="navbar bg-base">
        <Link to="/" className="flex-1">
            <span className="btn border-0 shadow-none bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text md:text-3xl font-bold">SavorSafari</span>
        </Link>
        <div>
         
          
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
       <div className="flex gap-8 items-center font-outfit text-xl">
       <Link className="relative group">Home
       <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#223822] to-[#98FB98] transition-all group-hover:w-full"></span>
       </Link>
       <Link className="relative group">All Foods
       <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#223822] to-[#98FB98] transition-all group-hover:w-full"></span>
       </Link>
       <Link className="relative group">Gallery
       <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#223822] to-[#98FB98] transition-all group-hover:w-full"></span>
       </Link>
       {
        user?
        <Link onClick={logOut} to="/login" className="mr-4 relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Logout</span>
        </Link>:
        <Link  to="/login" className="mr-4 relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Login</span>
        </Link>
       }
      
       </div>
    </div>
    {
        user &&
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-green-500">
        
        <div title={user?.displayName} className="w-10 rounded-full">
          <img alt="user profile" src={user?.photoURL} />
        </div>
        
      </div>
      

      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>My added food items</Link></li>
        <li><Link>Add a food item</Link></li>
        <li><Link>My ordered food items</Link></li>
      </ul>
    </div>
    }
  </div>
</div>
    );
};

export default Navbar;