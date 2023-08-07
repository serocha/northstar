import style from '../styles/Training.module.scss'
import globalStyles from '../utils/globalStyles';

function Training() {

  return (
    <section id="training" className={style.training}>
      <div className={globalStyles.txt}>
        <h1 className={style.trainingHook}>Already a professional?</h1>
        <h1 className={style.trainingMore}>Get customized training for your needs.</h1>
      </div>
      <div className={style.trainingLine}></div>
      <div className={style.trainingItems}>
        <div className={style.trainingItem}>
          <p className={style.trainingTxt}>Here's a blurb</p>
          <div className={globalStyles.iconWrapper}></div>
        </div>
        <div className={style.trainingItem}>
          <div className={globalStyles.iconWrapper}></div>
          <p className={style.trainingTxt}>Here's a blurb</p>
        </div>
        <div className={style.trainingItem}>
          <p className={style.trainingTxt}>Here's a blurb</p>
          <div className={globalStyles.iconWrapper}></div>
        </div>
      </div>
    </section>
  );
}

export default Training;