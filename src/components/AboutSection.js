import { Link } from 'react-router-dom'
import style from '../styles/AboutSection.module.scss'
import globalStyles from '../utils/globalStyles';
import profile from '../assets/profile.png'

function AboutSection(props) {

  return (
    <section id="about" className={style.about}>
      <div className={globalStyles.transitionWrapper}>
        <svg className={globalStyles.transition} style={{marginTop:'-1px'}} viewBox="0 0 1440 320"><path fill="#679267" fillOpacity="1" d="M0,224L1440,128L1440,0L0,0Z"></path></svg>
      </div>
      <div className={globalStyles.txt}>
        <h1 className={style.aboutHook}>Find Your Fit</h1>
        <p className={style.aboutMore}>Our therapists offer a range of specialized approaches, techniques, and styles.</p>
        <div className={style.aboutBtnWrapper}>
          <div style={{minWidth:'96px',minHeight:'96px',transform:'translateY(-12px)'}}>
            <svg fill="#000000" viewBox="0 0 24 24"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path id="primary" d="M21.71,14.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,14h-3.1A12.14,12.14,0,0,1,4,5.68a1,1,0,0,0-1.9.64A14.14,14.14,0,0,0,15.49,16h3.1l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,14.29Z" fill='#4d724d'></path></g></svg>
          </div>
          <Link to='/about'>
            <div className={style.aboutBtn}>
              <div className={globalStyles.iconWrapper}>
                <img className={globalStyles.icon} src={profile} alt="About Us link" />
              </div>
            </div>
          </Link>
          <div style={{minWidth:'96px',minHeight:'96px',transform:'translateY(12px)'}}>
            <svg fill="#000000" viewBox="0 0 24 24"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M22,17.68A14.14,14.14,0,0,0,8.51,8H5.41l1.3-1.29A1,1,0,0,0,5.29,5.29l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,10h3.1a12.14,12.14,0,0,1,11.54,8.32A1,1,0,0,0,21,19a1.25,1.25,0,0,0,.32-.05A1,1,0,0,0,22,17.68Z" fill='#4d724d'></path></g></svg>
          </div>
        </div>
        <p className={style.aboutMore} style={{textAlign:'center'}}>Click to see who resonates most with you.</p>
      </div>
      <div className={globalStyles.transitionWrapper}>
        <svg className={globalStyles.transition} viewBox="0 0 1440 320"><path fill="#4d724d" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,128C640,139,800,149,960,128C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
    </section>
  );
}

export default AboutSection;