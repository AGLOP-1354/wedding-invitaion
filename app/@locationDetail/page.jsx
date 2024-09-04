'use client';

import { useEffect } from 'react';
import ScrollMotion from '@/component/scrollMotion';

import Subway from '@/component/location/subway';
import Bus from '@/component/location/bus';
import Car from '@/component/location/car';
import NaverApp from '@/component/moveMapApplication/NaverApp';
import KakaoMap from '@/component/moveMapApplication/KakaoMap';
import Divider from '@/component/divider';
import VerticalDivider from '@/component/divider/VerticalDivider';

import classes from './page.module.css';

const NAVER_CLIENT_ID = 'qucce351wh';

const LocationDetail = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.5919972, 127.035654),
        zoom: 17,
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5919972, 127.035654),
        map: map,
      });
    };
  }, []);

  return (
    <section className={classes.LocationDetail}>
      <ScrollMotion>
        <div className={classes.header}>
          <span className={classes.subTitle}>LOCATION</span>
          <div className={classes.title}>오시는 길</div>
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <div className={classes.mapContainer}>
          <div id="map" className={classes.map} />
          <div className={classes.mapAppContainer}>
            <NaverApp />
            <VerticalDivider height={20} />
            <KakaoMap />
          </div>
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <div className={classes.header}>
          <span className={classes.locationDetail}>
            고려대학교 교우회관 1층 고려스퀘어홀
          </span>
          <span className={classes.location}>서울시 성북구 종암로 13</span>
        </div>
      </ScrollMotion>

      <ScrollMotion>
        <Subway />
      </ScrollMotion>

      <ScrollMotion>
        <Divider />
      </ScrollMotion>

      <ScrollMotion>
        <Bus />
      </ScrollMotion>

      <ScrollMotion>
        <Divider />
      </ScrollMotion>

      <ScrollMotion>
        <Car />
      </ScrollMotion>
    </section>
  );
};

export default LocationDetail;
