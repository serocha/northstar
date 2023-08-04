import Header from '../components/Header'
import Footer from '../components/Footer'
import NavTray from '../components/NavTray'
import style from '../styles/our-team.module.css'
import globalStyles from '../utils/globalStyles'
import leasa from '../assets/L.jpg'
import melissa from '../assets/M.jpg'

function OurTeam(props) {

  const navRoutes = ['Home', 'Services', 'Training', 'Contact Us'];
  const footerRoutes = ['Back to Top', 'Home', 'Contact Us'];

  return(
    <div id="about">
      <Header isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
      <div className={[globalStyles.txt, style.background].join(' ')}>
        <h1 style={{color:'rgb(59, 59, 59)',textAlign:'center'}}>Our Team</h1>
        <div className={style.profile}>
          <div>
            <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
              <img className={[style.portrait, style.portraitLeft].join(' ')} src={leasa} alt="Leasa Medina" />
              <h3>Leasa Medina, LCSW</h3>
              <h4 className={style.subTitle}>Owner</h4>
            </div>
            <p>Leasa received her Bachelors of Arts in Psychology from The University of New Mexico and her Masters in Clinical Social Work from New Mexico Highlands University.</p>
            <p>She has 15 years of experience in the behavioral health field, six years as a Clinical Social Worker and eight years as a supervisor.</p>
            <div className={globalStyles.btnWrapper}>
              <button className={[globalStyles.centered, style.profileBtn].join(' ')}>Contact Leasa</button>
            </div>
          </div>
        </div>
        <div style={{margin:'0 auto 4em',width:'100%',border:'1px solid darkgray'}} />
        <div className={style.profile}>
          <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
            <img className={[style.portrait, style.portraitRight].join(' ')} src={melissa} alt="Melissa Love" />
            <h3>Melissa Love, LPCC</h3>
            <h4 className={style.subTitle}>Therapist</h4>
          </div>
          <p>Melissa received her Bachelors of Art in Sculpture from the University of Arkansas and her Masters in Art Therapy and Counseling from Southwestern College in Santa Fe, NM.</p>
          <p>She has exceptional experience working with pre-teens, teens, and young adults facing numerous behavioral health challenges.</p>
          <div className={globalStyles.btnWrapper}>
            <button className={[globalStyles.centered, style.profileBtn].join(' ')}>Contact Melissa</button>
          </div>
        </div>
      </div>
      <Footer routes={footerRoutes} />
      <NavTray routes={navRoutes} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default OurTeam;