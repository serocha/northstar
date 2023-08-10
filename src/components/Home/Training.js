import style from '../../styles/Home/Training.module.scss';

function Training() {

  const point = {
    icon: '',
    alt: "some icon",
    title: "Training Point",
    content: "A blurb of text about this point. Here's even more text about this point."
  };

  const trainingPoints = [];
  for (let i=0; i < 5; i++) {
    trainingPoints.push(point);
  }

  const rendered = trainingPoints.map((point, index) => {
    return (
      <div key={point.title + Math.random() * 10} className={style.item}> {/* TODO: Temporary key */}
        {index % 2 !== 0 ? <div className='iconWrapper'></div> : ''}
        <div className={style.itemTxtWrapper}>
          <h1 className={style.point}>{point.title}</h1>
          <p className={style.desc}>{point.content}</p>
        </div>
        {index % 2 === 0 ? <div className='iconWrapper'></div> : ''}
      </div>
    )
  });

  return (
    <section id="training" className={style.training}>
      <div className='txt'>
        <h1 className={style.trainingHook}>Already a professional?</h1>
        <h1 className={style.trainingMore}>Get customized training for your needs.</h1>
      </div>
      <div className={style.trainingLine}></div>
      <div className={style.items}>
        {rendered}
      </div>
    </section>
  );
}

export default Training;