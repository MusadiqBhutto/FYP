import DesignAbout from "../components/Design/DesignAbout";
import HeroSection from "../components/Design/HeroSection";
import MissionSection from "../components/Design/MissionSection";
import Slider from "../components/Design/Slider";
import Footer from "../components/Footer";



const Designservice = () => {
  return (
    <div className="p-4 mb-2">

      <Slider/>
      <DesignAbout />
      <HeroSection />
      <MissionSection />
      <Footer />


      
    </div>
  );
};

export default Designservice;