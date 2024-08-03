'use client';

import { IconLink } from '@tabler/icons-react';

import classes from './shareLink.module.css';

const ShareLink = () => {
  const handleCopyLink = async () => {
    const currentUrl = window.location.href;

    await navigator.clipboard.writeText(currentUrl);
  };

  return (
    <button className={classes.ShareLink} onClick={handleCopyLink}>
      <IconLink size={16} color='#D6CACA' />
      링크주소 복사하기
    </button>
  )
}

export default ShareLink;