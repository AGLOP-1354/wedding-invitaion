import { IconTrain } from '@tabler/icons-react';

import classes from './location.module.css';

const Subway = () => {
  return (
    <div className={classes.Location}>
      <IconTrain stroke={1} color='#BEA5A5' className={classes.icon} />

      <div className={classes.content}>
        <span className={classes.title}>지하철</span>

        <div className={classes.way}>
          [6호선] <span className={classes.highlight}>고려대역(종암역)</span> 2번출구 도보 3분
        </div>
      </div>
    </div>
  )
}

export default Subway;
