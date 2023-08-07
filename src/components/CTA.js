import { Link } from 'react-router-dom'
import style from '../styles/CTA.module.scss'
import skies from '../assets/skies.jpg'
import globalStyles from '../utils/globalStyles';

function CTA() {

  return (
    <section id="cta" className={style.cta}>
      <div className={globalStyles.txt} style={{color: 'white'}}>
        <h2>We'd love to hear from you.</h2>
        <p style={{fontSize:'18px'}}>Schedule a consultation today, or find out more about our services.</p>
        <div className={globalStyles.btnWrapper}>
          <Link className={globalStyles.centered} to='/contact'><button className={style.ctaBtn}>Let's Talk!</button></Link>
        </div>
      </div>
      <div className={style.ctaImgWrapper}>
        <svg className={style.ctaSvg} viewBox="0 0 1440 320"><path fill="#4d724d" fillOpacity="1" d="M0,288L80,256C160,224,320,160,480,122.7C640,85,800,75,960,85.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <img className={style.ctaImg} style={{boxShadow: '0 4px 4px -4px rgb(25, 25, 25)'}} src={skies} alt='New Mexico skies' />
      </div>
    </section>
  );
}

export default CTA;