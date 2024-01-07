import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import { FooterFour } from '../components/FooterFour'
import Navbar from '../components/Navbar'
const Home = () => {
    return(
   <div>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <FooterFour/>
   </div>
    );
};
export default Home;