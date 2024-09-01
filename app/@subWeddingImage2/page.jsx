import Image from 'next/image';
import VerticalDivider from "@/component/divider/VerticalDivider";

import classes from './page.module.css';
import ScrollMotion from '@/component/scrollMotion';

const SubWeddingImage2 = () => {
  return (
    <section className={classes.SubWeddingImage2}>
      <ScrollMotion>
        <VerticalDivider height={80} />
      </ScrollMotion>

      <ScrollMotion>
        <div className={classes.image}>
          <Image
            src="/images/9_R1.jpg"
            alt="서브 이미지 2"
            fill
          />
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <div className={classes.description}>
          응원하고 격려해주신 모든 분들께 감사드리며<br />
          행복하게 잘 살겠습니다.
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <VerticalDivider height={80} />
      </ScrollMotion>
    </section>
  );
};

export default SubWeddingImage2;
