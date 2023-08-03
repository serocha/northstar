import { Link } from 'react-router-dom'
import Header from '../components/Header'
import NavTray from '../components/NavTray'
import Footer from '../components/Footer'
import style from '../styles/home.module.css'
import clipboard from '../assets/clipboard-icon.png'
import lightbulb from '../assets/lightbulb-icon.png'
import crossroads from '../assets/crossroads-icon.png'
import skies from '../assets/skies.jpg'

function Home(props) {

  const navRoutes = ['Services', 'Trainings', 'Our Team', 'Contact Us'];
  const footerRoutes = ['Back to Top', 'About', 'Contact Us'];

  const banner = (
    <section id="banner" className={style.banner}>
      <div className={style.txt}>
        <h1 className={style.bannerHook}>Therapy to support your well-being</h1>
        <p className={style.bannerSub}>We help do <strong>stuff</strong> through things, things, and more things.</p>
      </div>
      <div className={style.bannerImgWrapper}>
        <img className={style.bannerImg} src="https://www.beyondblackwhite.com/wp-content/uploads/2014/11/New-Mexico.jpg" alt="New Mexico landscape" />
        <div className={[style.transitionWrapper, style.bannerTransitionWrapper].join(' ')}>
          <svg className={style.transition} viewBox="0 0 1440 320"><path fill="#f5fded" fillOpacity="1" d="M0,32L80,26.7C160,21,320,11,480,42.7C640,75,800,149,960,192C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
      </div>
    </section>
  );

  const services = (
    <section id="services" className={style.services}>
      <div className={style.txt}>
        <h1 className={style.serviceHook}>Transforming struggles into <span style={{color:'#00693E'}}>strengths</span>.</h1>
        <div className={style.serviceLine}></div>
        <div className={style.serviceWrapper}>
          <div className={style.serviceIcon}>
            <img src={clipboard} alt="experience icon" />
          </div>
          <h4>Professional</h4>
          <p>Our experienced, licensed therapists offer safe and effective psychological care from the comfort of your own home.</p>
          <div className={style.serviceIcon}>
            <img src={lightbulb} alt="professional icon" />
          </div>
          <h4>Individualized</h4>
          <p>Our focus is to help you heal, energize, and become aware of your inner strengths with customized treatment plans.</p>
          <div className={style.serviceIcon}>
            <img src={crossroads} alt="individual icon" />
          </div>
          <h4>Mindful</h4>
          <p>Our goal is to help you grow, heal, and move forward. We promise to be beside you for every step of your journey.</p>
        </div>
        <div className={style.btnWrapper}>
          <Link className='centered' to='/contact'><button className={style.serviceBtn}>Contact Us</button></Link>
        </div>
      </div>
      <div className={style.transitionWrapper}>
        <svg className={style.transition} viewBox="0 0 1440 320"><path fill="#679267" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
      </div>
    </section>
  );

  const trainings = (
    <section id="trainings" className={style.trainings}>
      <div className={style.txt}>
        <h1>Already a professional?</h1>
        <h1 className="trainingHook">Get customized training for your needs.</h1>
      </div>
      <div className="trainingLine"></div>
    </section>
  );

  const about = (
    <section id="about">
    <div className={style.transitionWrapper}>
      <svg className={style.transition} style={{marginTop: '-1px'}} viewBox="0 0 1440 320"><path fill="#679267" fillOpacity="1" d="M0,224L1440,128L1440,0L0,0Z"></path></svg>
    </div>
    <div className={style.txt}>
      <h1 style={{color: 'rgb(59, 59, 59)',marginBottom:'2em'}}>About Us</h1>
    </div>
    <div className={style.transitionWrapper}>
      <svg className={style.transition} viewBox="0 0 1440 320"><path fill="#4d724d" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,128C640,139,800,149,960,128C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  </section>
  );

  const cta = (
    <section id="cta" className={style.cta}>
      <div className={style.txt}>
        <h2 style={{color:'white'}}>Let's talk!</h2>
        <p style={{fontSize:'18px'}}>Schedule a consultation or send us any questions you may have.</p>
        <div className={style.btnWrapper}>
          <Link className='centered' to='/contact'><button className={style.ctaBtn}>We'd love to hear from you</button></Link>
        </div>
      </div>
      <div className={style.ctaImgWrapper}>
        <svg className={style.ctaSvg} viewBox="0 0 1440 320"><path fill="#4d724d" fillOpacity="1" d="M0,288L80,256C160,224,320,160,480,122.7C640,85,800,75,960,85.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <img className={style.ctaImg} style={{boxShadow: '0 4px 4px -4px rgb(25, 25, 25)'}} src={skies} alt='New Mexico skies' />
      </div>
    </section>
  );

  return(
    <div id="home">
      <Header isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
      {banner}
      {services}
      {trainings}
      {about}
      {cta}
      <Footer routes={footerRoutes} />
      <NavTray routes={navRoutes} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default Home;