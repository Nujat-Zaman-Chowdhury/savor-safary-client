import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const MyFoodItemPage = () => {
    const {user} = useAuth();
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        getData();
    },[user])

    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/foods/${user?.email}`)
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
        <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 overflow-x-auto my-6 container mx-auto">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
            </th>
            
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        {
            foods.map(food=>(
            <tr key={food._id} className="">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex-shrink-0">
                        <img className="rounded-md w-40 h-32 object-cover object-center" src={food.food_image} alt=""/>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{food.food_name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{food.category}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {food.price}
                </span>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap space-x-2  text-sm font-medium">
                <Link to={`/update/${food._id}`} className="btn text-indigo-600 hover:text-indigo-900">Update</Link>
            
                <button onClick={()=>handleDelete(food._id)} className="btn text-indigo-600 hover:text-indigo-900">Delete</button>
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