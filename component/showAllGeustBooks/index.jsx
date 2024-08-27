'use client';

import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';

import GuestBooks from '@/app/@guestBook/GeustBooks';
import Drawer from '@/component/drawer';

import classes from './showAllGuestBooks.module.css';

const ShowAllGuestBooks = ({ guestBooks }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section>
      <button
        className={classes.moreButton}
        onClick={() => setIsDrawerOpen(true)}
      >
        모두 보기

        <IconChevronRight size={16} color='#BEA5A5' />
      </button>

      {
        isDrawerOpen && (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            title="방명록 모두 보기"
          >
            <div className={classes.container}>
              <GuestBooks guestBooks={guestBooks} />
            </div>
          </Drawer>
        )
      }
    </section>
  );
}

export default ShowAllGuestBooks;
