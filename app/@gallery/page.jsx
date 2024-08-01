/* eslint-disable @next/next/no-img-element */
import { IconArrowDown } from '@tabler/icons-react';
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
        <div className={`${classes.gridItem} ${classes.img1}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery1.jpeg" alt="갤러리 이미지 1" />
          </ScrollMotion>
        </div>

        <div className={`${classes.gridItem} ${classes.img2}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery5.jpeg" alt="갤러리 이미지 2" />
          </ScrollMotion>
        </div>

        <div className={`${classes.gridItem} ${classes.img3}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery3.jpeg" alt="갤러리 이미지 3" />
          </ScrollMotion>
        </div>

        <div className={`${classes.gridItem} ${classes.img4}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery6.jpeg" alt="갤러리 이미지 1" />
          </ScrollMotion>
        </div>

        <div className={`${classes.gridItem} ${classes.img5}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery8.jpeg" alt="갤러리 이미지 1" />
          </ScrollMotion>
        </div>

        <div className={`${classes.gridItem} ${classes.img6}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery2.jpeg" alt="갤러리 이미지 1" />
          </ScrollMotion>
        </div>

        <div className={`${classes.gridItem} ${classes.img7}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery3.jpeg" alt="갤러리 이미지 1" />
          </ScrollMotion>
        </div>

        <div className={`${classes.gridItem} ${classes.img8}`}>
          <ScrollMotion>
            <img src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery4.jpeg" alt="갤러리 이미지 1" />
          </ScrollMotion>
        </div>
      </div>

      <ScrollMotion>
        <button className={classes.moreGallery}>
          <IconArrowDown color='#BEA5A5' size='1rem' />
          사진 더 보기
        </button>
      </ScrollMotion>
    </section>
  );
};

export default Gallery;
