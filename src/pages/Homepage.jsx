
import Nav from "../components/Header-component/nav";
import Accordion from "../components/HomeComponent/accordion";
import Card from "../components/HomeComponent/card";
import Discover from "../components/HomeComponent/discover";
import Hero from "../components/HomeComponent/hero";
import StreamForm from "../components/HomeComponent/streamForm";


const HomePage = () => {
  return (
    <> 
    <Nav/>
    <Hero/>
    <Card/>
    <Discover/>
    <Accordion/>
    <StreamForm/>    
    </>
  )
};
export default HomePage;
