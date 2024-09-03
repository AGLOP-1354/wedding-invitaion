import { Gowun_Batang } from 'next/font/google';
import classes from './layout.module.css';

import 'reset-css';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

const gowunBatang = Gowun_Batang({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: '김태현 & 김기현 결혼합니다.',
  description: '2024.10.12(토) 17:00 고려대학교 교우회관 1층 고려스퀘어홀',
  openGraph: {
    siteName: '김태현 & 김기현 모바일청첩장',
    title: '김태현 & 김기현 결혼합니다.',
    description: '2024.10.12(토) 17:00 고려대학교 교우회관 1층 고려스퀘어홀',
    images: '/opengraph-image.jpg',
    url: 'https://taehyun-kihyun.love/',
    type: 'website',
  },
};

export default function RootLayout({
  // layout 1
  header,
  mainImage,
  weddingLocation,

  // layout 2
  bookQuote,

  // layout 3
  invitationLetter,

  // layout 4
  subWeddingImage,

  // layout 5
  weddingDate,

  // layout 6
  gallery,

  // layout 7
  locationDetail,

  // layout 8
  bankAccountNumber,

  // layout 9
  guestBook,

  // layout 10
  subWeddingImage2,

  // layout 11
  footer,

  //etc
  floatingPopper,
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta property="og:title" content="김태현 & 김기현 결혼합니다" />
        <meta property="og:site_name" content="김태현 & 김기현 모바일 청첩장" />
        <meta property="og:url" content="https://taehyun-kihyun.love/" />
        <meta
          property="og:description"
          content="2024.10.12(토) 17:00 고려대학교 교우회관 1층 고려스퀘어홀"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/opengraph-image.jpg" />
      </Head>

      <body className={gowunBatang.className}>
        <Toaster position="top-center" />
        <div className={classes.layout}>{floatingPopper}</div>

        <article className={classes.layout}>
          {header}
          {mainImage}
          {weddingLocation}
        </article>

        <article className={classes.layout}>{bookQuote}</article>

        <article className={classes.layout}>{invitationLetter}</article>

        <article className={classes.layout}>{subWeddingImage}</article>

        <article className={classes.otherBackgroundLayout}>
          {weddingDate}
        </article>

        <article className={classes.layout}>{gallery}</article>

        <article className={classes.layout}>{locationDetail}</article>

        <article className={classes.layout}>{bankAccountNumber}</article>

        <article className={classes.layout}>{guestBook}</article>

        <article className={classes.layout}>{subWeddingImage2}</article>

        {footer}
      </body>
    </html>
  );
}
