import call from "../../assets/6.png"
import { motion} from "framer-motion"
import { fadeIn } from "../../animation";
const OpeningHour = () => {
    return (
        <div className="bg-black/60 relative bg-[url('https://i.ibb.co/S3z3PVR/7.png')] bg-cover bg-no-repeat bg-center">
            <div className="p-6">
            <div className="z-30">
                
                <div className="w-full my-10  relative">
                    <motion.div
                    variants={fadeIn("right",0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount:0.6}}
                    className="lg:w-2/3 h-[400px]">
                    <img src="https://i.ibb.co/YcxCJzD/opening.jpg" className=" object-cover w-full h-full  rounded-lg shadow-2xl" />
                    </motion.div>
                    <motion.div
                    variants={fadeIn("left",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount:0.2}}
                    className="absolute w-1/3 top-10 right-40 bg-black p-5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
                        <h4 className="text-green-300 md:text-3xl font-outfit font-bold mb-4" >Our Opening Hours</h4>
                        <p className="mb-2 font-poppins text-gree-100">Welcome to a haven where time stands still, and each moment is an invitation to embrace the beauty of the present.</p>
                        <ul className="list-none text-white font-outfit font-semibold">
                        <li className="">Sunday To Tuesday: 10:00 - 09:00</li>
                        <li>Wednesday To Thursday: 11:30 - 10:30</li>
                        <li>Friday & Saturday: 10:30 - 12:00</li>
                        </ul>
                        <div className="mt-2 flex gap-3 items-center">
                            <div className="bg-black/60 p-2 rounded-full w-16 h-16 flex justify-center items-center">
                                <img src={call} className="w-8 h-8 object-cover" alt="" />
                            </div>
                            <p className="text-xl text-white font-outfit">+012345563</p>
                        </div>
                    </motion.div>
                    
                </div>

                
                
            </div>
            </div>
            </div>
       
    );
};

export default OpeningHour;