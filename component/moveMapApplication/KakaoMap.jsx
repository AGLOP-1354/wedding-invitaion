'use clinet';

import Image from 'next/image';
import KakaoMapSvg from '@/public/images/kakaoMapSvg.svg';

import classes from './moveMapApplication.module.css';

const KakaoMap = () => {
  const handleOpenKakaoMap = () => {
    const location = {
      lat: 37.5921715705443,
      lng: 127.035334111518,
      name: '서울시 성북구 종암로 13'
    };

    const kakaoNaviAppUrl = `kakaonavi://navigate?name=${location.name}&x=${location.lng}&y=${location.lat}&coord_type=wgs84`;
    const kakaoNaviWebUrl = `https://map.kakao.com/link/to/${location.name},${location.lat},${location.lng}`;

    window.location.href = kakaoNaviAppUrl;

    setTimeout(() => {
      window.location.href = kakaoNaviWebUrl;
    }, 500);
  };

  return (
    <button onClick={handleOpenKakaoMap} className={classes.MoveMapApplication}>
      <Image
        src={KakaoMapSvg}
        alt="카카오 내비 바로가기 아이콘"
        width={14}
        height={14}
        priority
      />
      카카오 내비
    </button>
  );
};

export default KakaoMap;