'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import classes from './imageSlide.module.css';

const TRANSVERSE_IMAGE_INDEXES = [17, 20];

const overlayVariants = {
  open: {
    display: 'block',
    opacity: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    display: 'none',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const ImageSlide = ({
  isOpen,
  selectedImageIndex = 0,
  setSelectedImageIndex,
  onClose,
}) => {
  const selectedImageSrc =
    selectedImageIndex === 0
      ? 'https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/0_main_R1.jpg'
      : `https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/${selectedImageIndex}_R1.jpg`;

  const imageClassName = TRANSVERSE_IMAGE_INDEXES.includes(selectedImageIndex)
    ? classes.transverseImage
    : '';

  const onClickPrevButton = () => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(29);
      return;
    }

    setSelectedImageIndex(selectedImageIndex - 1);
  };

  const onClickNextButton = () => {
    if (selectedImageIndex === 29) {
      setSelectedImageIndex(0);
      return;
    }

    setSelectedImageIndex(selectedImageIndex + 1);
  };

  return (
    <>
      <motion.div
        className={classes.overlay}
        variants={overlayVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        onClick={onClose}
      />
      <article className={classes.ImageSlide}>
        <div
          className={`${classes.imageSlideContainer} ${imageClassName}`}
          style={{ position: 'relative' }}
        >
          <IconChevronLeft
            size={32}
            color="#fff"
            className={classes.arrowIcon}
            onClick={onClickPrevButton}
          />
          <Image
            src={selectedImageSrc}
            alt={`갤러리 슬라이드 이미지 ${selectedImageIndex + 1}`}
            fill
            quality={100}
          />

          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            style={{
              position: 'absolute',
              top: '-44px',
              right: 0,
              width: '40px',
              stroke: 'white',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <IconChevronRight
            size={32}
            color="#fff"
            className={classes.arrowIcon}
            onClick={onClickNextButton}
          />
        </div>
        <div className={classes.imageTurn}>{selectedImageIndex + 1} of 30</div>
      </article>
    </>
  );
};

export default ImageSlide;
