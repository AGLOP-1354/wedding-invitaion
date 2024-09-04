import ScrollMotion from '@/component/scrollMotion';
// import ShowAllGuestBooks from '@/component/showAllGeustBooks';

import getGuestBooks from '@/libs/getGuestBooks';

import GuestBooks from './GeustBooks';

import classes from './page.module.css';

const GuestBook = async () => {
  const { result: guestBooks = [] } = await getGuestBooks();

  const parsedGuestBook = guestBooks.length === 0 ? [] : guestBooks.slice(0, 4);

  return (
    <section className={classes.GuestBook}>
      <ScrollMotion>
        <div className={classes.header}>
          <span className={classes.subTitle}>GUESTBOOK</span>
          방명록
        </div>
      </ScrollMotion>

      {/* <div className={classes.subHeader}>
        <ScrollMotion>
          <ShowAllGuestBooks guestBooks={guestBooks} />
        </ScrollMotion>
      </div> */}

      <div className={classes.container}>
        <GuestBooks guestBooks={parsedGuestBook} showWriteButton />
      </div>
    </section>
  );
};

export default GuestBook;
