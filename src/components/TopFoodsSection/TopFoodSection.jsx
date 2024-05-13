import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TopFoodSection = () => {
    const [foods,setFoods]=useState([]);
    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/top-purchased-foods`)

            setFoods(data); 
        }
        getData();
    },[])
    return (
        <div className="bg-black/60 bg-[url('https://i.ibb.co/kQ0mc37/4.png')] bg-cover bg-center bg-no-repeat p-5">
            <div>
                <h1 className="font-outline text-2xl md:text-4xl text-center text-green-400 font-bold mt-5">Our Popular Foods</h1>
            </div>
         
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
            {
                foods.map(food=>(
                    <div key={food._id} className="mx-auto my-10 flex  flex-col items-center rounded-xl border px-4 py-4 text-center md:w-[500px] md:flex-row md:items-start md:text-left transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                    <div className="mb-4 md:mr-6 md:mb-0">
                      <img className="h-56 rounded-lg object-cover md:w-56" src={food.food_image} alt="" />
                    </div>
                    <div className="">
                      <p className="text-xl font-medium text-green-400 font-outfit">{food.food_name}</p>
                      <p className="mb-4 text-xl font-medium text-white">{food.category}</p> 
                      <div className="flex space-x-2">
                        
                        <div className="flex flex-col items-center rounded-xl bg-gray-100 mb-2 p-3">
                          <p className="text-sm font-medium text-gray-800 font-poppins">Price</p>
                          <p className="text-3xl font-medium text-green-600">$ {food.price}</p>
                        </div>

                      </div>
                      <div className="mb-3"></div>
                      <div className="flex space-x-2">
                        <Link to={`/food-details/${food._id}`} className="btn rounded-lg border-2 border-transparent text-center
                         bg-transparent border-green-500 px-4 py-2 font-medium text-white hover:bg-white hover:text-green-400">Details</Link>
                      </div>
                    </div>
                  </div>
                ))
            }
        </div>

        <div className="flex justify-center items-center my-6">
            <Link to="/all-foods" className="btn bg-green-400 text-white font-poppins">See All</Link>
        </div>
        </div>
    );
};

export default TopFoodSection;