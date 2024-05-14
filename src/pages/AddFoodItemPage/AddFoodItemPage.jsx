import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";



const AddFoodItemPage = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

  
        
        const handleSubmit = async(e)=>{
            e.preventDefault();
            const form = e.target;
            const name = user?.displayName;
            const email = user?.email;
            const food_name = form.food_name.value;
            const food_image = form.food_image.value;
            const category = form.category.value;
            const quantity = parseFloat(form.quantity.value)
            const price = parseFloat(form.price.value)
            const food_origin= form.food_origin.value;
            const description = form.description.value;

            if(quantity<0){
                return toast('Include a positive number')
            }
            if(quantity===0){
                return toast('Quantity should be greater than zero')
            }
            const foodData = {
                name,
                email,
                food_name,
                food_image,
                category,
                quantity,
                price,
                food_origin,
                description,
                addBy:{
                    email,
                    name:user?.displayName,

                },
                
                purchase_count:0,
                
                
            }
            
            try{
                const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/foods`,foodData)
                toast.success('Food Added Successfully')
                form.reset();
                
            }
            catch(err){
                // console.log(err);
                toast.error(err)
            }
        }

    return (
        <div>
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SavorSafary | AddFoodItem</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>
            <section className="p-6 mx-auto bg-white shadow-md dark:bg-gray-900">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Food Item</h2>

    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200">Name</label>
                <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"defaultValue={user && user.displayName}/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Email</label>
                <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user && user.email} required/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Food Name</label>
                <input name="food_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Food Image</label>
                <input name="food_image" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 dark:text-gray-200' htmlFor='category'>
                Category
              </label>
              <select
                 required
                name='category'
                id='category'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              >
                <option value='Appetizers'>Appetizers</option>
                <option value='Soups'>Soups</option>
                <option value='Salad'>Salad</option>
                <option value='Entrees'>Entrees</option>
                <option value='Pizza'>Pizza</option>
                <option value='Curry'>Curry</option>
                <option value='Sushi'>Sushi</option>
                <option value='Steak'>Steak</option>
                <option value='Dessert'>Dessert</option>
              </select>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Quantity</label>
                <input name="quantity" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Price</label>
                <input name="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Food Origin</label>
                <input name="food_origin" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>
            
        </div>
        <div>
                <label className="text-gray-700 dark:text-gray-200">Description</label>
                <textarea name="description" rows={4}  cols={50} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
        </div>
    </form>
</section>
        </div>
    );
};

export default AddFoodItemPage;