import ShareKakao from '@/component/shareKakao';

import classes from './page.module.css';
import ShareLink from '@/component/shareLink';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.shareElementContainer}>
        <ShareKakao />
        <ShareLink />
      </div>

      <span className={classes.copyright}>Copyright 2024. WHEN. All rights reserved</span>
    </footer>
  )
};

export default Footer;
