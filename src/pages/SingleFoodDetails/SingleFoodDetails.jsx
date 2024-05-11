import { Link, useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
    const food = useLoaderData();
    const {food_name,food_image,category,price,name,food_origin,description} = food;
    return (

        <section className="container mx-auto p-10 md:p-20 antialiased">
    <article
        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1">
        <img className="w-full max-h-[400px] object-cover md:w-96" src={food_image} alt=""/>
        <div className="">
            <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-500 mt-4">
                    Food Name : {food_name}
                </h1>
                <p className="text-xl text-white mt-2 leading-relaxed">
                    Food Category: {category} 
                </p>
            </div>
            <div  className="px-12">
            <div className="flex gap-6">
                <span>Price: ${price}</span>
                
            </div>
            <div>
                <h4>Made By: {name}</h4>
                <p>Food Origin: {food_origin}</p>
            </div>
            <hr />
            <div>
                <h4>Description</h4>
                <p>{description}</p>
                
            </div>
            <Link to="/food-purchase">
            <button className="btn">Purchase</button>
            </Link>
            </div>
           
        </div>
    </article>
</section>
    );
};

export default SingleFoodDetails;