import classes from './verticalDivider.module.css';

const VerticalDivider = ({ height }) => {
  return (
    <div style={{ ...(!!height ? { height } : {}) }} className={classes.VerticalDivider} />
  );
};

export default VerticalDivider;
