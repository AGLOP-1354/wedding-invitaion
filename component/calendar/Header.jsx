import { getDayText } from '@/utils/getCalendarInfos.js';
import Column from './Column.jsx';

import classes from './header.module.css';

const Header = () => {
  return (
    <div className={classes.Header}>
      {[0, 1, 2, 3, 4, 5, 6].map(day => {
        const dayText = getDayText(day);
        const color = day === 0 ? '#D53636' : '#312C2D';

        return (
          <Column
            key={`dat-${day}`}
            text={dayText}
            color={color}
          />
        );
      })}
    </div>
  )
};

export default Header;
