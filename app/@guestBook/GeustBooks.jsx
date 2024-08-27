'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { IconPencilPlus, IconX } from '@tabler/icons-react';

import ScrollMotion from "@/component/scrollMotion";
import GuestBookWriteDrawer from '@/component/guestBookWriteDrawer';
import deleteGuestBookById from '@/libs/deleteGeustBookById';

import classes from './page.module.css';

const GuestBookBox = ({ _id, guestName, contents, createdAt, password }) => {
  const createdAtToDate = typeof createdAt === 'string' ? new Date(createdAt) : createdAt;

  const deleteGuestBook = () => {
    const enteredPassword = prompt('비밀번호를 입력해주세요.');
    if (!enteredPassword || String(password) !== String(enteredPassword)) {
      alert('잘못된 비밀번호입니다.');
      return;
    }

    deleteGuestBookById(_id);
  };

  return (
    <div className={classes.GuestBookBox}>
      <div className={classes.guestBookBoxHeader}>
        <span className={classes.guestName}>{guestName}</span>
        <IconX size={20} color='#BEA5A5' onClick={deleteGuestBook} />
      </div>

      <span className={classes.guestBookContents}>
        {contents}
      </span>

      <span className={classes.guestBookCreatedAt}>
        {dayjs(createdAtToDate).format('YYYY.MM.DD')}
      </span>
    </div>
  )
};

const GuestBooks= ({ guestBooks = [], showWriteButton = false }) => {
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
              guestBooks.map(({ _id, guestName, contents, createdAt, password }) => (
                <ScrollMotion key={_id}>
                  <GuestBookBox
                    _id={_id}
                    guestName={guestName}
                    contents={contents}
                    createdAt={createdAt}
                    password={password}
                  />
                </ScrollMotion>
              ))
            }
          </div>
        )
      }

      {
        showWriteButton && (
          <>
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
    </>
  )
}

export default GuestBooks;
