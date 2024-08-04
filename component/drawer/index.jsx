'use client';

import { motion } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

import classes from './drawer.module.css';

const drawerVariants = {
  open: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  closed: {
    y: '200%',
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const overlayVariants = {
  open: {
    display: 'block',
    opacity: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    display: 'none',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
}) => {

  return (
    <>
      <motion.div
        className={classes.overlay}
        variants={overlayVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.div
        className={classes.Drawer}
        variants={drawerVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <header className={classes.header}>
          <span className={classes.title}>{title}</span>
          <IconX color="#BEA5A5" size={20} onClick={onClose} />
        </header>

        <article className={classes.article}>
          {children}
        </article>
      </motion.div>
    </>
  )
}

export default Drawer;
