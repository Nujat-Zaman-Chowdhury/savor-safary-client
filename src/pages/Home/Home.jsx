
import Banner from "../../components/Banner/Banner";
import OpeningHour from "../../components/OpeningHour/OpeningHour";
import OurCategories from "../../components/OurCategories/OurCategories";
import TopFoodSection from "../../components/TopFoodsSection/TopFoodSection";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCategories></OurCategories>
            <TopFoodSection></TopFoodSection>
            <OpeningHour></OpeningHour>
        </div>
    );
};

export default Home;