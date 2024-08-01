import Image from 'next/image';

import ScrollMotion from "@/component/scrollMotion";

import classes from './page.module.css';

const BankAccountNumber = () => {
  return (
    <section className={classes.BankAccountNumber}>
      <ScrollMotion>
        <div className={classes.image}>
          <Image
            src="./images/crossFlowerSvg.svg"
            alt="마음 전하실 곳 이미지"
            fill
          />
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <div className={classes.title}>마음 전하실 곳</div>
      </ScrollMotion>

      TODO: 드롭다운 구현
      <div>신랑측 계좌번호</div>
      <div>신부측 계좌번호</div>
    </section>
  );
};

export default BankAccountNumber;