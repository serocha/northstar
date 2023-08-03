import Header from "../components/Header";
import Footer from "../components/Footer";
import NavTray from "../components/NavTray";

function OurTeam(props) {

  const navRoutes = ['Home', 'Services', 'Trainings', 'Contact Us'];
  const footerRoutes = ['Back to Top', 'Home', 'Contact Us'];

  return(
    <div id="about">
      <Header isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
      <div>Meet Our Team</div>
      <Footer routes={footerRoutes} />
      <NavTray routes={navRoutes} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default OurTeam;