import { Link } from "react-router-dom";


const Gallery = () => {
    return (
        <div>
            <h3 className="text-green-300 font-bold mb-5 text-xl md:text-3xl text-center pt-5">Explore Our All Food Gallery</h3>
            <div className="text-center mt-6 text-white font-bold font-poppins">
                <Link to="/">Home</Link> | <span className="bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text">Gallery</span>
            </div>

            <div className="">
                {/* gallery */}
            <div className="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 shadow-md">
            <div className="text-center">
                <h2
                className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                Simple Image Hove</h2>
            </div>
            <div className="mt-10 max-w-sm mx-auto shadow-md shadow-stone-300">
                <div className="relative group">
                <img
                    src="https://cdn.pixabay.com/photo/2021/02/04/12/47/food-5981232_640.jpg"
                    alt="Photo by Sébastien Goldberg on Unsplash" className="w-full  h-[500px] rounded shadow-xl hover:shadow-2xl object-cover object-center" />
                <div
                    className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    <div className="flex-row text-center space-y-4">
                    <h1 className="text-gray-50 font-bold text-lg">User Name</h1>
                    <p className="text-gray-200 font-medium text-sm">FeedBack</p>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div>
    <button className="btn  text-green-500" onClick={() => document.getElementById('my_modal_1').showModal()}>Add</button>
    <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-transparent p-0">
           
            <div className="">
            <form className="max-w-md mx-auto  p-6 bg-black border rounded-lg shadow-lg text-white">
            <h3 className="font-bold text-lg">Submit Your Experience</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="mb-4">
                        <label className="block bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text font-bold mb-2 " >
                    Name:
                    </label>
                        <input className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="mb-4">
                        <label className="block bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text font-bold mb-2" >
                    Photo URL:
                    </label>
                        <input className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="photo" placeholder="Enter your email"/>
                    </div>
                    <div className="mb-4">
                        <label className="block bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text font-bold mb-2">
                    Feedback:
                    </label>
                        <textarea className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" placeholder="Enter your feedback"></textarea>
                    </div>
                <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                        </div>
                </form>
                                
                    
            </div>
        </div>
    </dialog>
</div>

                    </div>
                    
                </div>
                
                </div>
  </div>
            </div>
            </div>
        </div>
    );
};

export default Gallery;