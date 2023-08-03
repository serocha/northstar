import Header from "../components/Header";
import Footer from "../components/Footer";
import NavTray from "../components/NavTray";

function ContactUs(props) {
  
  const navRoutes = ['Home', 'Services', 'Trainings', 'Our Team'];
  const footerRoutes = ['Back to Top', 'Home', 'About'];

  return(
    <div id="contact">
      <Header isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
      <div>Contact Us</div>
      <Footer routes={footerRoutes} />
      <NavTray routes={navRoutes} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default ContactUs;