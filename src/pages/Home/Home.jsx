
import { HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import OpeningHour from "../../components/OpeningHour/OpeningHour";
import OurCategories from "../../components/OurCategories/OurCategories";
import TopFoodSection from "../../components/TopFoodsSection/TopFoodSection";
import { Helmet } from "react-helmet";



const Home = () => {
    return (
        <div>
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SavorSafary | Home</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>
            <Banner></Banner>
            <OurCategories></OurCategories>
            <TopFoodSection></TopFoodSection>
            <OpeningHour></OpeningHour>
        </div>
    );
};

export default Home;