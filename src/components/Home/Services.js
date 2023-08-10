import { Link } from 'react-router-dom';
import idCard from '../../assets/id.png';
import chat from '../../assets/chat.png';
import grow from '../../assets/grow.png';
import style from '../../styles/Home/Services.module.scss';

function Services() {

  const servicePoints = [
    {
      icon: idCard,
      alt: "professional icon",
      title: "Professional",
      content: "Our experienced, licensed therapists offer safe and effective psychological care from the comfort of your own home."
    },
    {
      icon: chat,
      alt: "individualized icon",
      title: "Individualized",
      content: "Our focus is to help you heal, energize, and become aware of your inner strengths with customized treatment plans."
    },
    {
      icon: grow,
      alt: "mindful icon",
      title: "Mindful",
      content: "Our goal is to help you grow, gain momentum, and move forward. We promise to be beside you for every step of your journey."
    }
  ];

  const rendered = servicePoints.map(point => {
    return (
    <div key={point.title} className={style.service}>
      <div className='iconWrapper'>
        <img className='icon' src={point.icon} alt={point.alt} />
      </div>
      <div className={style.iconTxt}>
        <h4>{point.title}</h4>
        <p>{point.content}</p>
      </div>
    </div>
    )
  });

  return (
    <section id="services" className={style.services}>
      <div className={style.serviceTxt}>
        <h1 className={style.serviceHook}>Transforming struggles into <span style={{color:'#00693E'}}>strengths</span></h1>
        <div className={style.serviceLine}></div>
        <div className={style.serviceWrapper}>
          {rendered}
        </div>
        <div className='btnWrapper'>
          <Link className='centered' style={{marginTop: '4em'}} to='/contact'>
            <button className={style.serviceBtn}>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className='transitionWrapper bottomWrapper' style={{marginTop: '-4em'}}>
        <svg className='transition' viewBox="0 0 1440 320"><path fill="#679267" fillOpacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
      </div>
    </section>
  );
}

export default Services;