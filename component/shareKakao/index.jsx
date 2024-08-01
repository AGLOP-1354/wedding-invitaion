'use client';
import { useEffect } from "react";
import Image from 'next/image';

import classes from './shareKakao.module.css';

const KAKAO_APP_KEY = '2de8cbafb44a861d5314216ed40597a2';

const ShareKakao = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init(KAKAO_APP_KEY);
    };
  }, []);

  const handleKakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '디자인 마스터',
        description: '카카오톡 공유하기 예제',
        imageUrl: 'https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery1.jpeg',
        link: {
          mobileWebUrl: 'https://google.com',
          webUrl: 'https://google.com',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://google.com',
            webUrl: 'https://google.com',
          },
        },
      ],
    });
  };

  return (
    <button className={classes.ShareKakao} onClick={handleKakaoShare}>
      <Image
        src='./images/kakao_simple_icon.svg'
        alt="카카오톡 공유하기 아이콘"
        width={16}
        height={16}
      />
      카카오톡 공유하기
    </button>
  )
}

export default ShareKakao;
