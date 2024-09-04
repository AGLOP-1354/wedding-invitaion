'use client';
import Image from 'next/image';
import NaverMapIcon from '@/public/images/naverMapIcon.webp';

import classes from './moveMapApplication.module.css';

const NaverApp = () => {
  const handleOpenNaverMap = () => {
    const location = {
      lat: 37.5919972,
      lng: 127.035654,
    };

    const naverMapAppUrl = `nmap://place?lat=${location.lat}&lng=${location.lng}&name=서울시 성북구 종암로 13`;
    const naverMapWebUrl = `https://map.naver.com/v5/search/서울시 성북구 종암로 13`;

    window.location.href = naverMapAppUrl;

    setTimeout(() => {
      window.location.href = naverMapWebUrl;
    }, 500);
  };

  return (
    <button className={classes.MoveMapApplication} onClick={handleOpenNaverMap}>
      <Image
        src={NaverMapIcon}
        alt="네이버 지도 아이콘"
        width={14}
        height={14}
        priority
      />
      네이버 지도
    </button>
  );
};

export default NaverApp;
