import { Link } from "react-router-dom";


const AllFoods = () => {
    return (
        <div className="w-full h-full font-outfit bg-[url('https://i.ibb.co/8zxX0XY/bg-2.jpg')] bg-cover bg-center bg-no-repeat p-5">
            <h3 className="text-green-300 font-bold mb-5 text-xl md:text-3xl text-center pt-5">Explore Our All Food Items</h3>
            <div className="text-center mt-6 text-white font-bold font-poppins">
                <Link to="/">Home</Link> | <span className="bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text">All Foods</span>
            </div>

            {/* search box */}
            <div className="flex items-center pb-6 md:py-0 md:w-1/2 my-6 ml-10 font-outfit">
                <form className="">
                    <div className="flex flex-col bg-black/70 p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                        <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-white dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter Food Name" aria-label="Enter your email"/>

                        <button className="font-poppins px-5 py-3 text-base font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Search</button>
                    </div>
                </form>
            </div>

            {/* card */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-7">
            <div className="w-full max-w-sm overflow-hidden  rounded-lg shadow-md shadow-zinc-50 bg-grey-100">
    <img className="object-cover object-center w-full h-56" src="https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_640.jpg" alt="avatar"/>

    <div className="flex px-6 py-3 bg-white ">
        

        <h1 className="text-xl font-semibold text-gray-900">Food Name</h1>
    </div>

    <div className="px-6 py-4 bg-black">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Food Category: </h1>

        

        <div className="flex gap-6 items-center mt-4 text-gray-700 dark:text-gray-200">
            

            <h1 className="text-sm">Price: $100</h1>
            <h1 className="text-sm">Quantity: 100</h1>
        </div>

        <Link to="/food-details" className="my-4 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-green-600 via-green-700 to-green-400 group-hover:opacity-100"></span>
        
        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
       
        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        
        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        
        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span className="relative">Details</span>
        </Link>
        </div>
    </div>
                </div>

        </div>
    );
};

export default AllFoods;