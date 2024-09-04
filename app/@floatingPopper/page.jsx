'use client';
import React, { useCallback, useRef, useState } from 'react';

import Confetti from 'react-canvas-confetti';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';

import classes from './page.module.css';

const FloatingPopper = () => {
  const confettiInstanceRef = useRef(null);
  const [animate, setAnimate] = useState(true);

  const handleInit = ({ confetti }) => {
    confettiInstanceRef.current = confetti;
  };

  const fireConfetti = () => {
    if (confettiInstanceRef.current) {
      confettiInstanceRef.current(Realistic);
      setAnimate(false);
    }
  };

  return (
    <div className={classes.FloatingPopper}>
      <Confetti
        onInit={handleInit}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 50,
          left: 0,
          pointerEvents: 'none',
        }}
      />

      <div
        id="popper-trigger-element"
        className={classes.PopperTriggerButton}
        onClick={fireConfetti}
      >
        <div className={classes.emoji}>🥳</div>
        <div
          className={animate ? classes.overlayWithAnimation : classes.overlay}
        />
      </div>
    </div>
  );
};

export default FloatingPopper;
