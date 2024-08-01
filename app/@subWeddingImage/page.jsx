/* eslint-disable @next/next/no-img-element */
import { IconPhoneFilled } from '@tabler/icons-react';

import ScrollMotion from '@/component/scrollMotion';

import classess from './page.module.css';

const SubWeddingImage = () => {
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
        <button className={classess.callButton}>
          <IconPhoneFilled color='#BEA5A5' size='1rem' />
          연락하기
        </button>
      </ScrollMotion>
    </section>
  )
}

export default SubWeddingImage;
