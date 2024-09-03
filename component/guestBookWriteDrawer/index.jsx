'use client';

import { useState } from 'react';
import writeGuestBook from '@/libs/writeGuestBook';

import SubmitButton from './SubmitButton';
import Drawer from '../drawer';

import classes from './guestBookWriteDrawer.module.css';

const GuestBookWriteDrawer = ({ isOpen, onClose }) => {
  const [erros, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
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

    setLoading(false);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="방명록 작성하기">
      <form className={classes.form} action={onSubmit}>
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

        <SubmitButton loading={loading} />
      </form>
    </Drawer>
  );
};

export default GuestBookWriteDrawer;
