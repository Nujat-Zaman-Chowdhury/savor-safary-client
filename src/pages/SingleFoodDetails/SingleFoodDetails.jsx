import { Link } from "react-router-dom";

const SingleFoodDetails = () => {
    return (

        <section className="container mx-auto p-10 md:p-20 antialiased">
    <article
        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1">
        <img className="w-full max-h-[400px] object-cover md:w-96" src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg" alt=""/>
        <div className="">
            <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-500 mt-4">
                    Food Name
                </h1>
                <p className="text-xl text-white mt-2 leading-relaxed">
                    Food Category: 
                </p>
            </div>
            <div  className="px-12">
            <div className="flex gap-6">
                <span>Price: $</span>
                <span>Quantity: </span>
            </div>
            <div>
                <h4>Made By: </h4>
                <p>Food Origin: </p>
            </div>
            <hr />
            <div>
                <h4>Description</h4>
                <p>Ingredients</p>
                <ul>
                    <li></li>
                </ul>
                <p>Making Produre: </p>
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