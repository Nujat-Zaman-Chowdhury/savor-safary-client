import { Link, useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
    const food = useLoaderData();
    const {_id,food_name,food_image,category,price,name,food_origin,description} = food;
    return (

        <section className="container mx-auto p-10 md:p-12 antialiased .hover:shadow-lg bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 my-6">
    <article
        className="flex flex-wrap md:flex-nowrap mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1 h-full">
        <img className="w-full max-h-[400px] object-cover md:w-96" src={food_image} alt=""/>
        <div className="text-left px-12 space-y-3">
            <div className="bg-black/70 w-16 h-16 rounded-full flex items-center justify-center p-3">
                <img src="/food.svg" alt="" className="w-12 h-12" />
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold text-green-500 mt-4">
                    Food Name : {food_name}
                </h1>
                <p className="text-xl text-white mt-2 leading-relaxed">
                    Category: <span className="text-emerald-400">{category}</span> 
                </p>
            </div>
            <div  className="">
            <div className="flex gap-6 my-4">
                <div className="bg-black text-blue-400 font-outfit font-bold backdrop:blur-sm p-3 rounded-md bg-opacity-30">Price: ${price}</div>
                <div className="bg-black text-green-400 font-outfit font-bold backdrop:blur-sm p-3 rounded-md bg-opacity-30">Made By: {name}</div>
                <div className="bg-black text-purple-400 font-outfit font-bold backdrop:blur-sm p-3 rounded-md bg-opacity-30">Food Origin: {food_origin}</div>
            </div>
           
                
            
            <hr />
            <div className="text-center">
                <h4 className="text-red-400 font-outfit mt-3 text-xl">Description</h4>
                <p className="text-white/70 text-base">{description}</p>
                
            </div>
            <Link to={`/food-purchase/${_id}`} className="flex justify-end mt-5">
            <button className="btn bg-white text-green-600">Purchase</button>
            </Link>
            </div>
           
        </div>
    </article>
</section>
    );
};

export default SingleFoodDetails;