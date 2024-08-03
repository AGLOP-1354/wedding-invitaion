import ShareKakao from '@/component/shareKakao';

import classes from './page.module.css';
import ShareLink from '@/component/shareLink';
import ScrollMotion from '@/component/scrollMotion';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <ScrollMotion>
        <div className={classes.shareElementContainer}>
          <ShareKakao />
          <ShareLink />
        </div>
      </ScrollMotion>

      <span className={classes.copyright}>Copyright 2024. WHEN. All rights reserved</span>
    </footer>
  )
};

export default Footer;
