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

  // const warning = <div>
  //   <div>PC환경은 최적화가 안되어 있습니다😭</div>
  //   <div>P모바일 환경에서 봐주시면 감사드리겠습니다🙏</div>
  // </div>
  useEffect(() => {
    if (isMobile) return;

    toast(
      <div style={{ fontWeight: 700 }}>
        PC 환경은 최적화가 안되어 있습니다😭
        <br />
        모바일 환경에서 봐주시면 감사드리겠습니다🙏
      </div>,
      {
        duration: 5000,
        style: {
          padding: '40px',
          backgroundColor: '#f7f3f2',
          marginTop: '300px',
        },
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
    <>
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

      <div
        className={
          animate ? classes.GuideFloating : classes.GuideFloatingUnvisible
        }
      >
        👈 눌러보세요!
      </div>
    </>
  );
};

export default FloatingPopper;
