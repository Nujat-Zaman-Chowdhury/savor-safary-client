import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const FoodPurchasePage = () => {
    const {user} = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const buyer_name = user?.displayName;
        const buyer_email = user?.email;
        const food_name = form.food_name.value;
        const quantity = parseFloat(form.quantity.value)
        const price = parseFloat(form.price.value)

        console.log(buyer_name,buyer_email,food_name,quantity,price);

        try{
            
            toast.success('Purchased Successful')
            
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <section className="p-6 mx-auto bg-black">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Food Item</h2>
    
        <form onSubmit={handleSubmit} className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col bg-blue-950 rounded-md p-5">
                <div className="flex gap-4">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Buyer Name</label>
                    <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"defaultValue={user && user.displayName}/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Buyer Email</label>
                    <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user && user.email} required/>
                </div>
                </div>
                <div >
                    <label className="text-gray-700 dark:text-gray-200">Date</label><br></br>
                    <DatePicker className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                    {/* <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user && user.email} required/> */}
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Food Name</label>
                    <input name="food_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>

    
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Quantity</label>
                    <input name="quantity" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Price</label>
                    <input name="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>

                
            </div>
    
            <div className="flex justify-end mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Purchase</button>
            </div>
        </form>
    </section>
    );
};

export default FoodPurchasePage;