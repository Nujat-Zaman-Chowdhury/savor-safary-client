import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const FoodPurchasePage = () => {
    const food = useLoaderData();
    const {_id,food_name,food_image,category,price,name,food_origin,description,quantity} = food;
    const {user} = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;
        const food_name = form.food_name.value;
        const buying_date = startDate.toLocaleDateString();
        const quantity = parseFloat(form.quantity.value)
        const price = parseFloat(form.price.value)

        // console.log(name,email,food_name,quantity,price,buying_date);
        const purchaseData = {
            buyer:{
                name,
                email,
            },
            food_name,
            food_image,
            buying_date,
            quantity,
            price
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
        <section className="p-6 mx-auto bg-[url('https://i.ibb.co/Vt5F7dy/jason-leung-po-I7-Del-Fi-VA-unsplash.jpg')] bg-cover bg-center bg-no-repeat">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Food Item</h2>
    
        <form onSubmit={handleSubmit} className="container mx-auto flex flex-col justify-center items-center ">
            <div className="flex flex-col p-5 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <div className="flex gap-4">
                <div>
                    <label className="text-gray-700 dark:text-white">Buyer Name</label>
                    <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"defaultValue={user && user.displayName} readOnly/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Buyer Email</label>
                    <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user && user.email} readOnly/>
                </div>
                </div>
                <div >
                    <label className="text-gray-700 dark:text-gray-200">Date</label><br></br>
                    <DatePicker className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} required/>
                    {/* <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user && user.email} required/> */}
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Food Name</label>
                    <input name="food_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={food_name}/>
                </div>

    
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Quantity</label>
                    <input name="quantity" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={quantity}/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Price</label>
                    <input name="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black/60 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={price}/>
                </div>

                <div className="flex justify-end mt-6">
                <input type="submit" value="Purchase" className="px-8 py-2.5 leading-5 bg-black/60 text-white transition-colors duration-300 transform rounded-md hover:bg-black/60 focus:outline-none hover:text-green-400 focus:bg-gray-600"/>
                </div>
            </div>
    
            
        </form>
    </section>
    );
};

export default FoodPurchasePage;