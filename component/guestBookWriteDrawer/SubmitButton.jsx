'use client';

import { useFormState } from 'react-dom';

import classes from './guestBookWriteDrawer.module.css';

const SubmitButton = () => {
  const { pending } = useFormState();

  return (
    <button disabled={pending} type="submit" className={classes.SubmitButton}>
      {pending ? '저장중...' : '작성하기'}
    </button>
  )
}

export default SubmitButton;
