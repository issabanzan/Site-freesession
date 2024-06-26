import Layout from "../Layout";
import HeroSection from "./components/HeroSection";
import Barre from "./components/Barre";
import Fonctionnalite from "./components/Fonctionnalite";
import Rejoins from "./components/Rejoins";
import Fonctionnalite2 from "./components/Fonctionnalite2";
import Fonctionnalite6 from "./components/Fonctionnalite6";
import Fonctionnalite7 from "./components/Fonctionnalite7";


const PresentationV2 = () => {
    return ( 
        <Layout>
            <HeroSection />
            <Barre />
            <Fonctionnalite />
            <Rejoins />
            <Fonctionnalite2 />
            <Fonctionnalite6 />
            <Fonctionnalite7 />        
        </Layout>
    )
};


export default PresentationV2;