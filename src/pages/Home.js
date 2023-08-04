import Header from '../components/Header'
import NavTray from '../components/NavTray'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Training from '../components/Training'
import AboutSection from '../components/AboutSection'
import CTA from '../components/CTA'
import '../styles/global.module.css'

function Home(props) {

  const navRoutes = ['Services', 'Training', 'Our Team', 'Contact Us'];
  const footerRoutes = ['Back to Top', 'About', 'Contact Us'];

  return(
    <div id="home">
      <Header isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
      <Banner />
      <Services />
      <Training />
      <AboutSection />
      <CTA />
      <Footer routes={footerRoutes} />
      <NavTray routes={navRoutes} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default Home;