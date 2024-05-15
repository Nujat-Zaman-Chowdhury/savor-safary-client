import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";


const MyFoodItemPage = () => {
    const {user} = useAuth();
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        getData();
    },[user])

    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/foods/${user?.email}`,{withCredentials:true})
        // console.log(data);
        setFoods(data);
    } 

    const handleDelete =async(id)=>{
        console.log(id);
       
        
        try{
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/food/${id}`)
            toast.success('Deleted')

            getData();
        }
        catch(error){
            console.log(error.message);
            toast.error(error.message)
        }
    }

    return (
        <div className="overflow-x-auto w-full">
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SavorSafary | AddedFoodItems</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>
            <table className="divide-y divide-gray-200 overflow-x-auto  w-full">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider">
                Image
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider">
                Name
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider">
                Category
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider">
                Price
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider">
                Actions
            </th>
            
        </tr>
    </thead>
    <tbody className="bg-black/50 divide-y divide-gray-200">
        {
            foods.map(food=>(
            <tr key={food._id} className="">
            <td className="px-2 md:px-6 md:py-4 whitespace-nowrap flex justify-center">
                <div className="flex-shrink-0">
                        <img className="rounded-md  h-24 w-24 md:w-40  md:h-32 object-cover object-center" src={food.food_image} alt=""/>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-white font-medium font-outfit ">{food.food_name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-white font-medium font-outfit" >{food.category}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className=" inline-flex text-sm leading-5  rounded-full text-white font-medium font-outfit">
                    ${food.price}
                </span>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap space-x-2  text-sm font-medium ">
                <div className="flex justify-center gap-2">
                <Link to={`/update/${food._id}`} className="btn text-green-600 bg-white">Update<MdOutlineSystemUpdateAlt/></Link>
            
            <button onClick={()=>handleDelete(food._id)} className="bg-white btn text-red-600 hover:text-red-600">Delete<MdDelete/></button>
                </div>
            </td>
        </tr>
            ))
        }


    </tbody>
</table>
        </div>
    );
};

export default MyFoodItemPage;