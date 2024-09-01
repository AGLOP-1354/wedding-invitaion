/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import ScrollMotion from "@/component/scrollMotion";

import classes from './page.module.css';

const Gallery = () => {
  return (
    <section className={classes.Gallery}>
      <ScrollMotion>
        <div className={classes.header}>
          <span className={classes.subTitle}>GALLERY</span>
          <div className={classes.title}>갤러리</div>
        </div>
      </ScrollMotion>

      <div className={classes.galleryContainer}>
        <ScrollMotion>
          <div className={classes.gridItem}>
            <Image
              src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/0_main_R1.jpg"
              alt="갤러리 이미지 1"
              fill
              priority
              quality={100}
            />
          </div>
        </ScrollMotion>

        {
          new Array(29).fill(undefined).map((_, index) => (
            <ScrollMotion  key={index + 1}>
              <div className={classes.gridItem}>
                <Image
                  src={`https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/${index+1}_R1.jpg`}
                  alt={`갤러리 이미지 ${index + 1}`}
                  fill
                  priority
                  quality={100}
                />
              </div>
            </ScrollMotion>
          ))
        }
      </div>
    </section>
  );
};

export default Gallery;
