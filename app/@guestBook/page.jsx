import { IconPencilPlus } from '@tabler/icons-react';
import ScrollMotion from "@/component/scrollMotion";

import classes from './page.module.css';

const GuestBook = () => {
  return (
    <section className={classes.GuestBook}>
      <ScrollMotion>
        <div className={classes.header}>
          <span className={classes.subTitle}>GUESTBOOK</span>
          방명록
        </div>
      </ScrollMotion>

      <div className={classes.container}>
        <ScrollMotion>
          <div className={classes.guestBookBox}>
            <IconPencilPlus size={32} color='#D6CACA' />
            <span className={classes.guestBookBoxTitle}>축하 글을 남겨주세요</span>
          </div>
        </ScrollMotion>

        <ScrollMotion>
          <button className={classes.writeButton}>작성하기</button>
        </ScrollMotion>
      </div>
    </section>
  )
};

export default GuestBook;
