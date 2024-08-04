'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { IconPencilPlus, IconX } from '@tabler/icons-react';

import ScrollMotion from "@/component/scrollMotion";
import GuestBookWriteDrawer from '@/component/guestBookWriteDrawer';

import classes from './page.module.css';

const GuestBookBox = ({ guestName, contents, createdAt }) => {
  return (
    <div className={classes.GuestBookBox}>
      <div className={classes.guestBookBoxHeader}>
        <span className={classes.guestName}>{guestName}</span>
        <IconX size={20} color='#BEA5A5' />
      </div>

      <span className={classes.guestBookContents}>
        {contents}
      </span>

      <span className={classes.guestBookCreatedAt}>
        {dayjs(createdAt).format('YYYY.MM.DD')}
      </span>
    </div>
  )
};

const GuestBooks= ({ guestBooks = [] }) => {
  const [isGuestBookWriteDrawerVisible, setIsGuestBookWriteDrawerVisible] = useState(false);

  return (
    <>
      {
        guestBooks?.length === 0 ? (
          <ScrollMotion>
            <div className={classes.guestBookBox}>
              <IconPencilPlus size={32} color='#D6CACA' />
              <span className={classes.guestBookBoxTitle}>축하 글을 남겨주세요</span>
            </div>
          </ScrollMotion>
        ) : (
          <div className={classes.guestBooks}>
            {
              guestBooks.map(({ id, guestName, contents, createdAt }) => (
                <ScrollMotion key={id}>
                  <GuestBookBox
                    guestName={guestName}
                    contents={contents}
                    createdAt={createdAt}
                  />
                </ScrollMotion>
              ))
            }
          </div>
        )
      }

      <ScrollMotion>
        <button className={classes.writeButton} onClick={() => setIsGuestBookWriteDrawerVisible(true)}>작성하기</button>
      </ScrollMotion>

      <GuestBookWriteDrawer
        key={`GuestBookWriteDrawer-${isGuestBookWriteDrawerVisible}`}
        isOpen={isGuestBookWriteDrawerVisible}
        onClose={() => setIsGuestBookWriteDrawerVisible(false)}
      />
    </>
  )
}

export default GuestBooks;
