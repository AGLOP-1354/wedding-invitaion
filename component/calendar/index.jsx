import dayjs from "dayjs";

import { getCalendarColumns } from '@/utils/getCalendarInfos';
import Header from './Header.jsx';
import Column from './Column.jsx';

import classes from './calendar.module.css';

const Calendar = () => {
  const weddingDate = dayjs('2024.10.12');
  const calendarColumns = getCalendarColumns(weddingDate);

  return (
    <span className={classes.Calendar}>
      <Header />

      <div className={classes.dates}>
        {calendarColumns.map((date, index) => {
          if (!date) {
            return (
              <Column
                key={`empty_${index}`}
                text=""
              />
            )
          }
          const dateText = String(dayjs(date).get('date'));
          const isWeddingDate = dayjs(date).isSame(weddingDate, 'date');
          const color = isWeddingDate ? '#fff' : ( date.day() === 0 ? '#D53636' : '#312C2D' )

          return (
            <Column
              key={date}
              text={dateText}
              color={color}
              backgroundColor={isWeddingDate ? '#CAB4B4': 'transparent'}
            />
          )
        })}
      </div>
    </span>
  )
};

export default Calendar;
