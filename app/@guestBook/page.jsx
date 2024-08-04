import ScrollMotion from "@/component/scrollMotion";
import getGuestBooks from '@/libs/getGuestBooks';

import GuestBooks from "./GeustBooks";

import classes from './page.module.css';



const GuestBook = async () => {
  const { result: guestBooks = [] } = await getGuestBooks();

  return (
    <section className={classes.GuestBook}>
      <ScrollMotion>
        <div className={classes.header}>
          <span className={classes.subTitle}>GUESTBOOK</span>
          방명록
        </div>
      </ScrollMotion>

      <div className={classes.container}>
        <GuestBooks guestBooks={guestBooks} />
      </div>
    </section>
  )
};

export default GuestBook;
