'use client';

import { useFormStatus } from 'react-dom';

import classes from './guestBookWriteDrawer.module.css';
import { useEffect } from 'react';

const SubmitButton = ({ loading, setLoading }) => {
  const { pending } = useFormStatus();

  useEffect(() => {
    setLoading(pending);
  }, [pending, setLoading]);

  return (
    <button disabled={pending} type="submit" className={classes.SubmitButton}>
      {loading ? '저장중...' : '작성하기'}
    </button>
  );
};

export default SubmitButton;
