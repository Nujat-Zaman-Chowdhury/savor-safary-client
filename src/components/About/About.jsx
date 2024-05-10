

const About = () => {
    return (
        <div className="flex flex-col md:flex-row gap-3 container mx-auto mt-12 lg:my-20 h-full md:h-[100vh]">
            <div className="w-1/2 text-center">
                <span className="md:text-2xl text-amber-200 font-medium my-2 text-center mx-auto">OUR STORY</span>
                <hr className="my-3" />
                <div>
                    <h2 className="text-white font-poppins text-xl md:text-3xl my-4">Every Flavor Tells a Story</h2>
                    <p className="text-slate-600 my-5 tex">From savory sensations to sweet delights, each dish in this curated collection has won the hearts of our customers, earning its place as a favorite. Explore our top picks, featuring an array of culinary delights crafted with care and passion.</p>
                </div>
                <div className="mt-5">
                    <h4 className="text-amber-100/60">Book Through Call</h4>
                    <h3>+80 (400) 123 4567</h3>
                </div>
            </div>


            <div className="grid w-1/2 h-full ">
            
            <div className="bg-[url('https://i.ibb.co/02Wcvtb/about.webp')] bg-cover bg-center relative rounded-md"> 

            </div>
        
            </div>
        </div>
    );
};

export default About;