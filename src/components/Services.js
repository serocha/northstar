import { Link } from 'react-router-dom'
import idCard from '../assets/id.png'
import chat from '../assets/chat.png'
import grow from '../assets/grow.png'
import style from '../styles/Services.module.scss'
import globalStyles from '../utils/globalStyles'

function Services() {

  return (
    <section id="services" className={style.services}>
      <div className={style.serviceTxt}>
        <h1 className={style.serviceHook}>Transforming struggles into <span style={{color:'#00693E'}}>strengths</span></h1>
        <div className={style.serviceLine}></div>
        <div className={style.serviceWrapper}> {/* consider dynamic creation */}
          <div className={style.service}>
            <div className={globalStyles.iconWrapper}>
              <img className={globalStyles.icon} src={idCard} alt="professional icon" />
            </div>
            <div className={style.iconTxt}>
              <h4>Professional</h4>
              <p>Our experienced, licensed therapists offer safe and effective psychological care from the comfort of your own home.</p>
            </div>
          </div>
          <div className={style.service}>
            <div className={globalStyles.iconWrapper}>
              <img className={globalStyles.icon} src={chat} alt="individualized icon" />
            </div>
            <div className={style.iconTxt}>
              <h4>Individualized</h4>
              <p>Our focus is to help you heal, energize, and become aware of your inner strengths with customized treatment plans.</p>
            </div>
          </div>
          <div className={style.service}>
            <div className={globalStyles.iconWrapper}>
              <img className={globalStyles.icon} src={grow} alt="mindful icon" />
            </div>
            <div className={style.iconTxt}>
              <h4>Mindful</h4>
              <p>Our goal is to help you grow, heal, and move forward. We promise to be beside you for every step of your journey.</p>
            </div>
          </div>
        </div>
        <div className={globalStyles.btnWrapper}>
          <Link className={globalStyles.centered} to='/contact'><button className={style.serviceBtn}>Contact Us</button></Link>
        </div>
      </div>
      <div className={[globalStyles.transitionWrapper, style.serviceTransitionWrapper].join(' ')}>
        <svg className={[globalStyles.transitionReverse, style.serviceTransition].join(' ')} viewBox="0 0 1440 320"><path fill="#679267" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
      </div>
    </section>
  );
}

export default Services;