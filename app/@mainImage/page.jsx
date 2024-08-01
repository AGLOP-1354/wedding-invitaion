import Image from 'next/image';

import classes from './page.module.css';

// TODO: 이미지 비율에 맞게 설정
const MainImage = () => {
    return (
        <div className={classes.mainImageContaier}>
            <Image
                src="/images/temp_wedding_main_image.jpeg"
                alt="김태현, 김기현의 웨딩 사진 중 메인이미지"
                fill
                priority
                quality={100}
            />
        </div>
    )
};

export default MainImage;
