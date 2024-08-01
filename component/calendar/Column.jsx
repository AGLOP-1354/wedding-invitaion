import classes from './column.module.css';

const Column = ({
  text,
  color,
  backgroundColor,
}) => {
  return (
    <div
      className={classes.Column}
      style={{ backgroundColor }}>
      <span
        className={classes.day}
        style={{ color }}
      >
        {text}
      </span>
    </div>
  );
};

export default Column;
