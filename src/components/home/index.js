import LayoutSection from "../shared/layout";
import HeroSection from "./hero";

const Home = () => {
    return (
        <LayoutSection 
        header={false}
        >
            <HeroSection  />
        </LayoutSection>
    )
}


export default Home