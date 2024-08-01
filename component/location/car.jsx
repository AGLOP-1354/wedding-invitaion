import { IconCar } from '@tabler/icons-react';

import classes from './location.module.css';

const Car = () => {
  return (
    <div className={classes.Location}>
      <IconCar stroke={1} color='#BEA5A5' className={classes.icon} />

      <div className={classes.content}>
        <span className={classes.title}>자가용</span>

        <div className={classes.way}>
          <span className={classes.highlight}>[종암동 방향]</span><br />
          종암경찰서 → 고려대 방면 200m 직진 →
          성북서울요양병원 지나서 → 스타벅스 옆
        </div>

        <div className={classes.way}>
          <span className={classes.highlight}>[고려대 방향]</span><br />
          고려대학교 → 종암동 방향으로 200m 직진
          국민은행 앞 유턴 → 고려대방향으로 50m 직진 →
          성북서울요양병원 지나서 스타벅스 옆
        </div>
      </div>
    </div>
  )
}

export default Car;
