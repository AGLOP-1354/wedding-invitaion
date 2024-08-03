/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { IconPhoneFilled, IconMessageCircleFilled } from '@tabler/icons-react';

import ScrollMotion from '@/component/scrollMotion';
import Drawer from '@/component/drawer';
import Divider from '@/component/divider';

import {
  GROOM_FAMILY, BRIDE_FAMILY
} from '@/constants/family';

import classess from './page.module.css';

const CallRaw = ({ position, name, phoneNumber }) => {
  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };
  const handleSMS = () => {
    window.location.href = `sms:+${phoneNumber}`;
  };

  return (
    <div className={classess.CallRow}>
      <span className={classess.position}>{position}</span>
      <span className={classess.name}>{name}</span>

      <div className={classess.calls}>
        <span className={classess.callPhone} onClick={handleCall}>
          <IconPhoneFilled color='#BEA5A5' size={20} />
        </span>
        <span className={classess.callMessage} onClick={handleSMS}>
          <IconMessageCircleFilled color='#BEA5A5' size={20} />
        </span>
      </div>
    </div>
  )
}

const CallBox = ({ familyInfos }) => {
  return (
    <div className={classess.CallBox}>
      {familyInfos?.map(({ position, name, phoneNumber }) => (
        <CallRaw
          key={`${position}_${name}`}
          position={position}
          name={name}
          phoneNumber={phoneNumber}
        />
      ))}
    </div>
  )
};


const SubWeddingImage = () => {
  const [isCallDrawerOpened, setIsCallDrawerOpened] = useState(false);
  return (
    <section className={classess.SubWeddingImage}>
      <div className={classess.imageContainer}>
        <ScrollMotion>
          <img
            className={classess.image}
            src="https://link-dropper-bucket.s3.ap-northeast-2.amazonaws.com/temp_sub_wedding_image.jpeg"
            alt="김태현, 김기현의 웨딩 사진 중 서브이미지"
          />
        </ScrollMotion>
      </div>

      <div className={classess.parentAndChildNames}>
        <ScrollMotion>
          <div className={classess.parentAndChildName}>김윤호 ∙ 안현주 <span className={classess.by}>의 장남</span> 태현</div>
        </ScrollMotion>
        <ScrollMotion>
          <div className={classess.parentAndChildName}>김진한 ∙ 김은자 <span className={classess.by}>의 장녀</span> 기현</div>
        </ScrollMotion>
      </div>

      <ScrollMotion>
        <button className={classess.callButton} onClick={() => setIsCallDrawerOpened(true)}>
          <IconPhoneFilled color='#BEA5A5' size='1rem' />
          연락하기
        </button>
      </ScrollMotion>

      <Drawer
        isOpen={isCallDrawerOpened}
        onClose={() => setIsCallDrawerOpened(false)}
        title="연락하기"
      >
        <div className={classess.CallBoxContainer}>
          <CallBox familyInfos={GROOM_FAMILY} />
          <Divider />
          <CallBox familyInfos={BRIDE_FAMILY} />
        </div>
      </Drawer>
    </section>
  )
}

export default SubWeddingImage;
