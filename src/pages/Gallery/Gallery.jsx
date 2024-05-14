import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";


const Gallery = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [galleries,setGalleries] = useState([]);
    const [loading,setLoading]= useState(true);
    const [page,setPage] = useState(1);

    const handleOpenModel = ()=>{
        if(user){
            document.getElementById('my_modal_1').showModal();
        }
        else navigate('/login')
    }

    const handleSubmit =async e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const feedback = form.feedback.value;
        // console.log(name,photo,feedback)
        const galleryData = {
            name,
            photo,
            feedback
        }
        try{
            
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/galleries?_limit=9&_page=${page}`,galleryData)
            
            if(data.insertedId){
                toast.success('Added Successfully')
                form.reset();
            }
            }
            
            catch(err){
                toast.err(err.message)
            }
    }

    const handleClose = (e)=>{
        e.preventDefault();
        document.getElementById('my_modal_1').close();
    }

    const handleInfiniteScroll = async()=>{
        console.log("scrollHeight" + document.documentElement.scrollHeight);
        console.log("innerHeight",+ window.innerHeight)
        console.log("scrollTop",+document.documentElement.scrollTop)
        try{
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
                setPage((prev)=>prev+1)
            }
            setLoading(true)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/galleries?_limit=9&_page=${page}`)
            if (page === 1) {
                setGalleries(data.slice(0,9));
            } else {
                setGalleries(prevGalleries => [...prevGalleries, ...data]);
            }
            // setGalleries(data);
            // setGalleries((prev)=>[...prev, ...data])
            setLoading(false)
        }
        getData();
    },[page])
    useEffect(()=>{
        window.addEventListener("scroll",handleInfiniteScroll)
        return()=>window.removeEventListener("scroll",handleInfiniteScroll);
    },[])
    return (
        <div className="">
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SavorSafary | Gallery</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>
            <h3 className="text-green-300 font-bold mb-5 text-xl md:text-3xl text-center pt-5">Explore Our All Food Gallery</h3>
            <div className="text-center mt-6 text-white font-bold font-poppins">
                <Link to="/">Home</Link> | <span className="bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text">Gallery</span>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            
            {/* add gallery */}
            <div className="flex justify-center my-4">
            <button className="btn text-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-green-500" onClick={handleOpenModel}>Add photo in our gallery</button>
            </div>
           
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-transparent p-0">
                
                    <div className="">
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto  p-6 bg-black/90 border rounded-lg shadow-lg text-white">
                    <h3 className="font-bold text-lg">Submit Your Experience</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="mb-4">
                                <label className="block bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text font-bold mb-2 " >
                            User Name:
                            </label>
                                <input name="name" className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"  defaultValue={user?.displayName} readOnly/>
                            </div>
                            <div className="mb-4">
                                <label className="block bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text font-bold mb-2" >
                            Photo URL:
                            </label>
                                <input name="photo" className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="photo" placeholder="Add photo"/>
                            </div>
                            <div className="mb-4">
                                <label className="block bg-gradient-to-r from-[#223822] to-[#98FB98] text-transparent bg-clip-text font-bold mb-2">
                                Feedback:
                            </label>
                                <textarea name="feedback" className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" placeholder="Enter your feedback"></textarea>
                            </div>
                                <div className="flex justify-end">
                                <input type="submit" value="Add" className="btn bg-green-400 text-white"/>
                                </div>
                                <button className="btn bg-white text-green-400 ml-2" onClick={handleClose}>Close</button>
                        </form>
                                        
                            
                    </div>
                </div>
            </dialog>
            

            {/* gallery */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-3">
                
            {
                galleries.map(gallery=>

                    <div key={gallery._id} className='flex items-center justify-center bg-gradient-to-br'>
                    <div
                        className="my-5 overflow-hidden  aspect-video cursor-pointer rounded-xl relative group h-[380px] "
                    >
                        <div
                            className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                        >
                            <div>
                                <div
                                    className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                                >
                                    <div className="font-bold">{gallery.name}</div>

                                    <div className="text-sm text-bold">
                                        {gallery.feedback}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            alt=""
                            className="object-cover object-center w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                            src={gallery.photo}/>
                    </div>
            </div>
                    
                )
            }
            </div>


           {loading && <div className="text-center my-4">Loading...</div>} 
        </div>
    );
};

export default Gallery;