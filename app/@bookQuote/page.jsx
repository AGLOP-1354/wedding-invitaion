import Image from 'next/image';

import ScrollMotion from '@/component/scrollMotion';
import FlowerSvg from '@/public/images/flowerSvg.svg';
import classes from './page.module.css';

const BookQuote = () => {
  return (
    <section className={classes.BookQuote}>
      <ScrollMotion>
        <div className={classes.imageContainer}>
          <Image
            src={FlowerSvg}
            alt="책의 글귀 센션의 꽃 이미지"
            fill
            priority
          />
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <div className={classes.quote}>
          두 사람이 꽃과 나무처럼 걸어와서<br />
          서로의 모든 것이 되기 위해<br />
          오랜 기다림 끝에 혼례식을 치르는 날<br />
          세상은 더욱 아름다워라
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <span className={classes.quoteSource}>이해인, &lt;사랑의 사람들이여&gt;</span>
      </ScrollMotion>
    </section>
  );
};

export default BookQuote;
