import classes from './page.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>10.12 <spa className={classes.titleDivider}>|</spa> 17:00</div>
      <span className={classes.subTitle}>SATURDAY</span>
    </header>
  )
}

export default Header;
