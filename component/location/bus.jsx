import { IconBus } from '@tabler/icons-react';

import classes from './location.module.css';

const Bus = () => {
  return (
    <div className={classes.Location}>
      <IconBus stroke={1} color='#BEA5A5' className={classes.icon} />

      <div className={classes.content}>
        <span className={classes.title}>버스</span>

        <div className={classes.way}>
          <span className={classes.highlight}>고려대학교 앞</span><br />
          간선 : 101, 144, 173, 273<br />
          지선 : 111, 1017, 1111, 1222, 2222, 7211
        </div>

        <div className={classes.way}>
          <span className={classes.highlight}>숭례초등학교</span><br />
          간선 : 101, 110A, 121, 130, 141, 144, 148, 173<br />
          지선 : 111, 1017, 1111, 1213, 7211
        </div>
      </div>
    </div>
  )
}

export default Bus;
