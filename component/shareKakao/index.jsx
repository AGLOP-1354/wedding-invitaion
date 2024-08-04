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
        title: '김태현 & 김기현 결혼합니다.',
        description: '2024.10.12(토) 오후 17:00 고려대학교 교우회관 1층 고려스퀘어홀',
        imageUrl: 'https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/gallery1.jpeg',
        link: {
          mobileWebUrl: 'https://wedding-invitaion-inky.vercel.app/',
          webUrl: 'https://wedding-invitaion-inky.vercel.app/',
        },
      },
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
