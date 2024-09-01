'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import Image from 'next/image';

import ScrollMotion from "@/component/scrollMotion";
import ImageSlide from '@/component/imageSlide';

import classes from './page.module.css';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
          <div className={classes.gridItem} onClick={() => setSelectedImageIndex(0)}>
            <Image
              src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/0_main_R1.jpg"
              alt="갤러리 이미지 1"
              fill
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
              quality={100}
            />
          </div>
        </ScrollMotion>

        {
          new Array(29).fill(undefined).map((_, index) => (
            <ScrollMotion  key={index + 1}>
              <div className={classes.gridItem} onClick={() => setSelectedImageIndex(index + 1)}>
                <Image
                  src={`https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/${index+1}_R1.jpg`}
                  alt={`갤러리 이미지 ${index + 2}`}
                  fill
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center center',
                  }}
                  quality={100}
                />
              </div>
            </ScrollMotion>
          ))
        }
      </div>

      {
        typeof selectedImageIndex === 'number' && (
          <ImageSlide
            selectedImageIndex={selectedImageIndex}
            isOpen={typeof selectedImageIndex === 'number'}
            onClose={() => setSelectedImageIndex(null)}
            setSelectedImageIndex={setSelectedImageIndex}
          />
        )
      }
    </section>
  );
};

export default Gallery;
