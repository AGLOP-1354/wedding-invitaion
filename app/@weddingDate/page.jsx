import Calendar from "@/component/calendar";
import Divider from "@/component/divider";
import ScrollMotion from "@/component/scrollMotion";

import getRemainingDays from '@/utils/getRemaningDay';

import classes from './page.module.css';

const WeddingDate = () => {
  const remaningDays = getRemainingDays('2024-10-12');
  return (
    <section className={classes.WeddingDate}>
      <ScrollMotion>
        <div className={classes.header}>
          <span className={classes.title}>2024.10.12</span><br />
          <span className={classes.subTitle}>토요일 오후 5시</span>
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <Divider />
      </ScrollMotion>

      <ScrollMotion>
        <Calendar />
      </ScrollMotion>

      <ScrollMotion>
        <Divider />
      </ScrollMotion>

      <ScrollMotion>
        <div className={classes.reminingDaysText}>결혼식까지 <span className={classes.reminingDays}>{remaningDays}일</span> 남았습니다.</div>
      </ScrollMotion>
    </section>
  );
};

export default WeddingDate;
