import ClientSection from "../components/ClientSection";
import ContactFormSection from "../components/ContactFormSection";
import ProjectSection from "../components/ProjectSection";
import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ClientSection/>
        <ContactFormSection/>
        <NewsletterSection/>
        <FooterSection/>
        </>
    );
};

export default HomePage;