import ScrollMotion from '@/component/scrollMotion';

import classes from './page.module.css';

const WeddingLocation = () => {
  return (
    <section className={classes.WeddingLocation}>
      <ScrollMotion>
        <div className={classes.title}>김태현<span className={classes.titleDivider}>|</span>김기현</div>
      </ScrollMotion>

      <ScrollMotion>
        <span className={classes.description}>2024년 10월 12일 토요일 오후 5시<br />고려대학교 교우회관 1층 고려스퀘어홀</span>
      </ScrollMotion>
    </section>
  );
};

export default WeddingLocation;