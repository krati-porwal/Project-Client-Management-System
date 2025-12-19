import ClientSection from "../components/ClientSection";
import ContactFormSection from "../components/ContactFormSection";
import ProjectSection from "../components/ProjectSection";
import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <ProjectSection/>
        <ClientSection/>
        <ContactFormSection/>
        <NewsletterSection/>
        </>
    );
};

export default HomePage;