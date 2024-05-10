import { Link } from "react-router-dom";


const Gallery = () => {
    return (
        <div>
            <h3 className="text-green-300 font-bold mb-5 text-xl md:text-3xl text-center pt-5">Explore Our All Food Items</h3>
            <div className="text-center mt-6 text-white font-bold font-poppins">
                <Link to="/">Home</Link> | <span className="bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text">Gallery</span>
            </div>
        </div>
    );
};

export default Gallery;