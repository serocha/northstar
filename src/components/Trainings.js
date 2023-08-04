import style from '../styles/trainings.module.css'

function Trainings() {

  return (
    <section id="trainings" className={style.trainings}>
      <div className={style.txt}>
        <h1 className={style.trainingHook}>Already a professional?</h1>
        <h1 className={style.trainingMore}>Get customized training for your needs.</h1>
      </div>
      <div className={style.trainingLine}></div>
      <div className={style.trainingItems}>
        <div className={style.trainingItem}>
          <p className={style.trainingTxt}>Here's a blurb</p>
          <div className={style.trainingIcon}></div>
        </div>
        <div className={style.trainingItem}>
          <div className={style.trainingIcon}></div>
          <p className={style.trainingTxt}>Here's a blurb</p>
        </div>
        <div className={style.trainingItem}>
          <p className={style.trainingTxt}>Here's a blurb</p>
          <div className={style.trainingIcon}></div>
        </div>
      </div>
    </section>
  );
}

export default Trainings;