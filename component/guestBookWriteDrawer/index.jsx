'use client';

import { useState } from 'react';
import writeGuestBook from '@/libs/writeGuestBook';
import { toast } from 'react-hot-toast';

import SubmitButton from './SubmitButton';
import Drawer from '../drawer';
import ClipLoader from 'react-spinners/ClipLoader';

import classes from './guestBookWriteDrawer.module.css';

const GuestBookWriteDrawer = ({ isOpen, onClose }) => {
  const [erros, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    const hasGuestName = !!formData.get('guestName');
    const hasPassword = !!formData.get('password');
    const hasContents = !!formData.get('contents');
    if (!hasGuestName || !hasPassword || !hasContents) {
      setErrors({
        ...(hasGuestName ? {} : { guestName: '이름을 입력해주세요.' }),
        ...(hasPassword ? {} : { password: '비밀번호를 입력해주세요.' }),
        ...(hasContents ? {} : { contents: '방명록을 입력해주세요.' }),
      });
      return;
    }

    setErrors({});
    await writeGuestBook(formData);

    const guestName = formData.get('guestName');

    toast.success(`🙇🏻‍♂️ ${guestName}님 감사합니다 🙇🏻‍♀️`, {
      duration: 3000,
      icon: null,
    });

    const popperElement = document.querySelector('#popper-trigger-element');
    if (popperElement) popperElement.click();
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="방명록 작성하기">
      <div id="test" style={{ position: 'relative' }}>
        {loading && (
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1004,
            }}
          >
            <ClipLoader color="#bea5a5" />
          </div>
        )}
        <form
          className={classes.form}
          action={onSubmit}
          style={loading ? { opacity: 0.2, zIndex: -1 } : {}}
        >
          <div className={classes.formItmes}>
            <p className={classes.formItem}>
              <label className={classes.label} htmlFor="guestName">
                이름
              </label>
              <input
                className={classes.textInput}
                type="text"
                id="guestName"
                name="guestName"
                placeholder="이름을 입력해주세요"
              />
              {erros.guestName && (
                <span className={classes.error}>{erros.guestName}</span>
              )}
            </p>

            <p className={classes.formItem}>
              <label className={classes.label} htmlFor="password">
                비밀번호
              </label>
              <input
                className={classes.textInput}
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
              />
              {erros.password && (
                <span className={classes.error}>{erros.password}</span>
              )}
            </p>

            <p className={classes.formItem}>
              <label className={classes.label} htmlFor="contents">
                방명록
              </label>
              <textarea
                className={classes.textareaInput}
                id="contents"
                name="contents"
                rows="10"
                maxLength={100}
                placeholder="100자 이내로 작성해주세요"
              />
              {erros.contents && (
                <span className={classes.error}>{erros.contents}</span>
              )}
            </p>
          </div>

          <SubmitButton loading={loading} setLoading={setLoading} />
        </form>
      </div>
    </Drawer>
  );
};

export default GuestBookWriteDrawer;
