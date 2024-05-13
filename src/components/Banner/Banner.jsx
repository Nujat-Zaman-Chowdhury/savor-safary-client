
import './Banner.css'; 
import slider1 from "../../assets/hero-slider-1.jpg"
import slider2 from "../../assets/hero-slider-2.jpg"
import slider3 from "../../assets/hero-slider-3.jpg"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Banner = () => {
    const moveSlider = (direction) => {
        let slider = document.querySelector('.slider');
        let sliderList = slider.querySelector('.list');
        let thumbnail = document.querySelector('.thumbnail');

        let sliderItems = sliderList.querySelectorAll('.item');
        let thumbnailItems = document.querySelectorAll('.thumbnail .item');

        if (direction === 'next') {
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            slider.classList.add('next');
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
            slider.classList.add('prev');
        }

        slider.addEventListener('animationend', function() {
            if (direction === 'next') {
                slider.classList.remove('next');
            } else {
                slider.classList.remove('prev');
            }
        }, {once: true});
    };

    return (
        <div className='w-full'>
            <div className="slider">
                <div className="list">
                    <div className="item">
                        <img src={slider1} alt=""/>
                        <div className="content w-full">
                            <div className="title font-poppins md:leading-relaxed md:text-4xl">At <span className='bg-gradient-to-r from-[#228f22] to-[#9ee79e] text-transparent bg-clip-text md:text-4xl font-bold'>SavorSafari</span>, we invite you to embark on a culinary journey unlike any other</div>
                            
                            <div className="md:w-[500px] font-outfit leading-normal my-6 opacity-90 md:text-xl">
                            Our restaurant is not just a place to dine; it's a destination where flavor meets exploration. Step into our world, where every dish is crafted to take you on a sensory safari
                            </div>
                            <Link to="/all-foods">
                                <button className='btn btn-outline border-green-600 bg-transparent text-white hover:text-green-500 hover:bg-transparent hover:border hover:border-white'>Explore MORE</button>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider2} alt=""/>
                        <div className="content w-full">
                            <div className="title font-poppins md:leading-relaxed md:text-4xl">Discover Delightful Gastronomic Escapes at <span className='bg-gradient-to-r from-[#228f22] to-[#9ee79e] text-transparent bg-clip-text md:text-4xl font-bold'>SavorSafari</span></div>
                            
                            <div className="md:w-[500px] font-outfit leading-normal my-6 opacity-90 md:text-xl">
                            With each bite, you'll traverse landscapes of taste, texture, and aroma, guided by our expert chefs who are passionate about delivering excellence. 
                            </div>
                            <Link to="/all-foods">
                                <button className='btn btn-outline border-green-600 bg-transparent text-white hover:text-green-500 hover:bg-transparent hover:border hover:border-white'>Explore MORE</button>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider3} alt=""/>
                        <div className="content w-full">
                            <div className="title font-poppins md:leading-relaxed md:text-4xl">At <span className='bg-gradient-to-r from-[#228f22] to-[#9ee79e] text-transparent bg-clip-text md:text-4xl font-bold'>SavorSafari,</span>A Gastronomic Oasis of Delight</div>
                            
                            <div className="md:w-[500px] font-outfit leading-normal my-6 opacity-90 md:text-xl">
                            Our restaurant is a celebration of culinary artistry, where every dish tells a story of passion and dedication.Join us at SavorSafari and let your palate be swept away on a flavorful safari of delights.
                            </div>
                            <Link to="/all-foods">
                                <button className='btn btn-outline border-green-600 bg-transparent text-white hover:text-green-500 hover:bg-transparent hover:border hover:border-white'>Explore MORE</button>
                            </Link>
                        </div>
                    </div>
                    <div className="nextPrevArrows relative mb-10">
                        <button className="prev" onClick={() => moveSlider('prev')}> <IoIosArrowBack /> </button>
                        <button className="next" onClick={() => moveSlider('next')}> <IoIosArrowForward /> </button>
                    </div>
                    
                </div>
            </div>
{/* 
            <div className="thumbnail">
                <div className="item">
                    <img src={slider1} alt=""/>
                </div>
                <div className="item">
                    <img src={slider2} alt=""/>
                </div>
                <div className="item">
                    <img src={slider3} alt=""/>
                </div>
                
            </div> */}

            
        </div>
    );
};

export default Banner;
