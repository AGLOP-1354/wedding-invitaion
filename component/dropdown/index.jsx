'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconChevronDown, IconChevronUp, IconCopy,
} from '@tabler/icons-react';

import classes from './dropdown.module.css';
import Divider from '../divider';

const dropdownVariants = {
  open: {
    display: 'flex',
    opacity: 1,
    height: "auto",
    transition: {
      type: 'tween',
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  closed: {
    display: 'none',
    opacity: 0,
    height: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

const BankAccountRaw = ({ position, name, bank, bankNumber, isLastItem }) => {
  const handleCopyBankAccountNumber = async () => {
    await navigator.clipboard.writeText(`${bank} ${bankNumber}`)
  };

  return (
    <>
      <div className={classes.BankAccountRaw}>
        <div className={classes.bankAccountInfo}>
          <span>{bank} | {bankNumber}</span>
          <span>{position} | {name}</span>
        </div>

        <div className={classes.copyButton} onClick={handleCopyBankAccountNumber}>
          <IconCopy size={16} color='#D6CACA' />
          복사
        </div>
      </div>
      {!isLastItem && <Divider />}
    </>
  )
};

const Dropdown = ({ title, bankAccountInfos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container}>
      <div
        onClick={toggleDropdown}
        className={`${classes.toggleButton} ${isOpen ? classes.open : ''}`}
      >
        {title}

        {isOpen ?
          <IconChevronUp size={16} color='#D6CACA' />
          : <IconChevronDown size={16} color='#D6CACA' />}
      </div>
      <motion.div
        className={classes.content}
        variants={dropdownVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        {bankAccountInfos?.map(({ position, name, bank, bankNumber }, index) => (
          <BankAccountRaw
            key={`${position}_${name}_${bankNumber}`}
            position={position}
            name={name}
            bank={bank}
            bankNumber={bankNumber}
            isLastItem={bankAccountInfos.length === index + 1}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Dropdown;
