'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Confetti from 'react-canvas-confetti';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';

import classes from './page.module.css';
import toast from 'react-hot-toast';

const FloatingPopper = () => {
  const confettiInstanceRef = useRef(null);
  const [animate, setAnimate] = useState(true);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;

    // 간단한 모바일 환경 감지 (iOS, Android)
    const mobileCheck =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    setIsMobile(mobileCheck);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    toast(
      'PC환경은 최적화가 안되어 있습니다😭 모바일 환경에서 봐주시면 감사드리겠습니다🙏',
      {
        icon: '⚠️',
        duration: 10000,
      }
    );
  }, [isMobile]);

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
