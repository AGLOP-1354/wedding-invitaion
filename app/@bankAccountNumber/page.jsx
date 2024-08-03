import Image from 'next/image';

import ScrollMotion from "@/component/scrollMotion";
import Dropdown from '@/component/dropdown';

import {
  GROOM_FAMILY_BANK_ACCOUNT, BRIDE_FAMILY_BANK_ACCOUNT,
} from '@/constants/bankAccountNumberInfos';

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

      <div className={classes.bankAccountDropdowns}>
        <ScrollMotion>
          <Dropdown
            title="신랑측 계좌번호"
            bankAccountInfos={GROOM_FAMILY_BANK_ACCOUNT}
          />
        </ScrollMotion>

        <ScrollMotion>
          <Dropdown
            title="신부측 계좌번호"
            bankAccountInfos={BRIDE_FAMILY_BANK_ACCOUNT}
          />
        </ScrollMotion>
      </div>
    </section>
  );
};

export default BankAccountNumber;