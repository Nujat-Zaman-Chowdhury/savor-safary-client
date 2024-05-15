import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const FoodPurchasePage = () => {
    const food = useLoaderData();
    // console.log(food);
    const {_id,food_name,food_image,category,price,name,food_origin,description,quantity,addBy} = food || {};
    // console.log(addBy);
    const availableQuantity = quantity;
    
    
    const {user} = useAuth();
    const [startDate, setStartDate] = useState(new Date());

    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(user?.email === addBy.email ) return toast.error('You cannot purchase your own added food item')
        // if(availableQuantity === 0){
        //     return toast.error(`Item is not available`)
        // }
        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;
        const food_name = form.food_name.value;
        const buying_date = startDate.toDateString();
        const food_owner = addBy.name;
        console.log(buying_date);
        const quantity = parseFloat(form.quantity.value)
        const price = parseFloat(form.price.value)
        if(quantity<=0) return toast('Include a positive number')

       if(quantity>availableQuantity){
        return toast.error(`Apologize,${availableQuantity} quantity available`)
       }
        
        // console.log(name,email,food_name,quantity,price,buying_date);
        const purchaseData = {
            name,
            email,
            food_name,
            food_image,
            buying_date,
            quantity,
            price,
            buyer:{
                email,
                name:user?.displayName
            },
            purchase_count:0,
            availableQuantity,
            food_owner,

        }
        // console.log(purchaseData);

        try{
            const {data} = axios.post(`${import.meta.env.VITE_API_URL}/purchase-food-items`,purchaseData)
            toast.success('Purchased Successful')
            
        }
        catch(err){
            console.log(err);
            
        }
    }
    return (
        <section className="p-6 mx-auto bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://i.ibb.co/Vt5F7dy/jason-leung-po-I7-Del-Fi-VA-unsplash.jpg')] bg-cover bg-center bg-no-repeat">
        
        <div className="text-center my-2 space-y-2">
        <h2 className="text-lg lg:text-3xl  font-bold  capitalize text-white">Purchase Food Item</h2>
        </div>

        {
            availableQuantity === 0?
            <div className="flex justify-center my-4">
                <p className="text-xl text-white font-outfit font-bold">You can not buy that item because that item is not available</p>
            </div>
            :
            <form onSubmit={handleSubmit} className="container mx-auto flex flex-col justify-center items-center ">
            <div className="flex flex-col p-5 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <div className="my-2">
                    <label className="text-gray-700 dark:text-gray-200">Buying Date: <span className="text-green-400">{startDate.toDateString()}</span></label><br></br>    
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                
                <div>
                    <label className="text-gray-700 dark:text-white">Buyer Name</label>
                    <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"defaultValue={user && user.displayName} readOnly/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Buyer Email</label>
                    <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user && user.email} readOnly/>
                </div>
                </div>
                
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Food Name</label>
                    <input name="food_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={food_name}/>
                </div>

    
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Quantity</label>
                    <input name="quantity" type="text" placeholder="" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Price</label>
                    <input name="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={price}/>
                </div>

                <div className="flex justify-end mt-6">
                <input disabled={quantity === 0}  type="submit" value="Purchase" className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 bg-black/60 text-white transition-colors duration-300 transform rounded-md hover:bg-black/60 focus:outline-none hover:text-green-400 focus:bg-gray-600"/>
                </div>
            </div>
    
            
        </form>
        }
    </section>
    );
};

export default FoodPurchasePage;