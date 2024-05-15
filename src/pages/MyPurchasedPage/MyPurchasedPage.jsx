import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";

const MyPurchasedPage = () => {
    const {user}= useAuth();
    const [foods,setFoods]= useState([]);
    

    useEffect(()=>{
        getData();
    },[user])

    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/purchase-food-items/${user?.email}`)
        console.log(data);
        setFoods(data);
    } 

    const handleDelete =async(id)=>{
        console.log(id);
        
        
        try{
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/purchase-food-items/${id}`)
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
                <title>SavorSafary | PurchasedFoodItems</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>
            <table className="divide-y divide-gray-200 overflow-x-auto w-full">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black font-outfit uppercase tracking-wider">
                Image
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black font-outfit uppercase tracking-wider">
            Food Owner
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black font-outfit uppercase tracking-wider">
                Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black font-outfit uppercase tracking-wider">
                Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black font-outfit uppercase tracking-wider">
            Added Date
            </th>
            
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black font-outfit uppercase tracking-wider">
                Actions
            </th>
            
        </tr>
    </thead>
    <tbody className="bg-black/50 divide-y divide-gray-200">
        {
            foods.map(food=>(
            <tr key={food._id} className="">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex-shrink-0">
                        <img className="rounded-md lg:w-40 lg:h-32 object-cover object-center" src={food.food_image} alt=""/>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white font-medium">{food.food_owner}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white font-medium">{food.food_name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white font-medium">{food.price}</div>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-sm text-white font-medium leading-5  rounded-full">
                    {food.buying_date}
                </span>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <button className="btn bg-red-500 border-0  text-white font-outfit hover:text-red-500" onClick={()=>handleDelete(food._id)}>Delete</button>
            </td>
        </tr>
            ))
        }


    </tbody>
</table>
        </div>
    );
};

export default MyPurchasedPage;