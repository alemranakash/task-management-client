import Navbar from "../../Components/Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import UserTypesSection from "./UserTypesSection";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <UserTypesSection></UserTypesSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;