import { useEffect } from 'react'

import Header from '../components/Header'
import NavTray from '../components/NavTray'
import Footer from '../components/Footer'
import Banner from '../components/Home/Banner'
import Services from '../components/Home/Services'
import Training from '../components/Home/Training'
import AboutSection from '../components/Home/AboutSection'
import CTA from '../components/Home/CTA'

function Home(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <div id="home">
      <Header
        navRoutes={props.navRoutes}
        isTrayOpen={props.isTrayOpen}
        toggleTray={props.toggleTray} />
      <Banner />
      <Services />
      <Training />
      <AboutSection />
      <CTA />
      <Footer footerRoutes={props.footerRoutes} />
      <NavTray 
        navRoutes={props.navRoutes}
        isTrayOpen={props.isTrayOpen}
        toggleTray={props.toggleTray} />
    </div>
  );
}

export default Home;