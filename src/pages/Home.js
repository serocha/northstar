import NavTray from '../components/NavTray';
import style from '../styles/home.module.css';

import clipboard from '../assets/clipboard-icon.png';
import lightbulb from '../assets/lightbulb-icon.png';
import crossroads from '../assets/crossroads-icon.png';

function Home(props) {

  const navSections = ['Services', 'Trainings', 'Our Team', 'Contact Us'];

  const banner = (
    <section id="banner" className={style.banner}>
      <div className={style.txt}>
        <h1 className={style.bannerHook}>Therapy to support your well-being</h1>
        <p className={style.bannerSub}>We help do <strong>stuff</strong> through things, things, and more things.</p>
      </div>
      <div className={style.bannerImgWrapper}>
        <img className={style.bannerImg} src="https://www.beyondblackwhite.com/wp-content/uploads/2014/11/New-Mexico.jpg" alt="New Mexico landscape" />
        <div className={style.bannerTransition}>
          <svg className={style.sectionTransition} viewBox="0 0 1440 320"><path fill="#f5fded" fillOpacity="1" d="M0,32L80,26.7C160,21,320,11,480,42.7C640,75,800,149,960,192C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
      </div>
    </section>
  );

  const services = (
    <section id="services" className={style.services}>
      <div className={style.txt}>
        <h1 className={style.serviceHook}>Transforming struggles into strengths.</h1>
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
        <div className={style.serviceBtnWrapper}>
          <button className={style.serviceBtn} onClick="window.location.href='./contact.html';">Contact Us</button>
        </div>
      </div>
      <div>
        <svg className={style.sectionTransition} viewBox="0 0 1440 320"><path fill="#679267" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
      </div>
    </section>
  );

  return(
    <div id="home">
      {banner}
      {services}
      <NavTray sections={navSections} isTrayOpen={props.isTrayOpen} toggleTray={props.toggleTray} />
    </div>
  );
}

export default Home;