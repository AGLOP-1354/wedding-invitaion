'use client';

// import { useFormState } from 'react-dom';

import classes from './guestBookWriteDrawer.module.css';

const SubmitButton = ({ loading }) => {
  // const { pending } = useFormState();

  return (
    <button disabled={loading} type="submit" className={classes.SubmitButton}>
      {loading ? '저장중...' : '작성하기'}
    </button>
  );
};

export default SubmitButton;
