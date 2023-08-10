import style from '../../styles/Home/Banner.module.scss';

function Banner () {
  return (
    <section id="banner" className={style.banner}>
      <div className={style.bannerTxt}>
        <h1 className={style.bannerHook}>Therapy to support your well-being</h1>
        <p className={style.bannerMore}>We help do <strong>stuff</strong> through things, things, and more things.</p>
      </div>
      <div className={style.bannerImgWrapper}>
        <img className={style.bannerImg} src="https://www.beyondblackwhite.com/wp-content/uploads/2014/11/New-Mexico.jpg" alt="New Mexico landscape" />
        <div className={['transitionWrapper bottomWrapper', style.bannerTransitionWrapper].join(' ')}>
          <svg className='transition bottomTransition' viewBox="0 0 1440 320"><path fill="#f5fded" fillOpacity="1" transform="translate(1440, 0) scale(-1,1)" d="M0,32L80,26.7C160,21,320,11,480,42.7C640,75,800,149,960,192C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
      </div>
    </section>
  );
}

export default Banner;