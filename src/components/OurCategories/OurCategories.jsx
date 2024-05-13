import { Link } from "react-router-dom";
import appetizer from "../../assets/icons8-appetizer-64 (1).png"
import desert from "../../assets/icons8-cake-64.png"
import sushi from "../../assets/icons8-sushi-100.png"
import soup from "../../assets/icons8-soup-60.png"
import pizza from "../../assets/icons8-pizza-80.png"
import salad from "../../assets/icons8-salad-50.png"
import { Typewriter } from 'react-simple-typewriter'
import { motion} from "framer-motion"
import { fadeIn } from "../../animation";


const OurCategories = () => {
    
    return (
        <div className="md:px-10 bg-white p-10">
            <motion.div
            variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.2}}
             className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center md:justify-between items-center mb-6">
                <div
                className="text-2xl md:text-4xl font-bold font-outfit text-black">Our Categories 
                 <span  className="ml-2 text-green-400">
                <Typewriter className="" words={['Delicious Starters', 'Mouth-watering Appetizers', 'Tasty Beginnings', 'Savoury Small Plates']} loop={5} />

                </span>
                </div>

                <Link to="/all-foods" className="btn relative border-green-400 hover:border-none inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                <span className="w-0 h-0 rounded bg-green-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-green-500 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                See more
                </span>
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div
            
        className="flex flex-col justify-center group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 text-black md:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full  md:bg-green-400 transition-all duration-300 group-hover:scale-[10]"></span>
        <div
        
         className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-400">
                <img src={appetizer} className="w-16 h-16" alt="" />
            </span>
            <div className="pt-5 text-base font-bold leading-7">
                <p className="text-xl capitalize font-poppins">Appetizer</p>
            </div>
        </div>
    </div>
            <div
             
        className="flex flex-col justify-center group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 text-black md:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full md:bg-green-400 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-400">
                <img src={soup} className="w-16 h-16" alt="" />
            </span>
            <div className="pt-5 text-base font-bold leading-7">
                <p className="text-xl capitalize font-poppins">Soup</p>
            </div>
        </div>
    </div>
            <div
             
        className="flex flex-col justify-center group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 text-black md:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full md:bg-green-400 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-400">
                <img src={salad} className="w-16 h-16" alt="" />
            </span>
            <div className="pt-5 text-base font-bold leading-7">
                <p className="text-xl capitalize font-poppins">salad</p>
            </div>
        </div>
    </div>
            
            <div
             
        className="flex flex-col justify-center group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 text-black md:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full md:bg-green-400 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-400">
                <img src={desert} className="w-16 h-16" alt="" />
            </span>
            <div className="pt-5 text-base font-bold leading-7">
                <p className="text-xl capitalize font-poppins">desert</p>
            </div>
        </div>
    </div>
            <div
             
        className="flex flex-col justify-center group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 text-black md:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full md:bg-green-400  transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-400">
                <img src={pizza} className="w-16 h-16" alt="" />
            </span>
            <div className="pt-5 text-base font-bold leading-7">
                <p className="text-xl capitalize font-poppins">pizza</p>
            </div>
        </div>
    </div>
            
            <div
             
        className="flex flex-col justify-center group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 text-black md:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full md:bg-green-400 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-400">
                <img src={sushi} className="w-16 h-16" alt="" />
            </span>
            <div className="pt-5 text-base font-bold leading-7">
                <p className="text-xl capitalize font-poppins">sushi</p>
            </div>
        </div>
    </div>
            
            </div>
        </div>
    );
};

export default OurCategories;