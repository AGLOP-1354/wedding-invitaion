import { Gowun_Batang } from 'next/font/google'
import classes from './layout.module.css';

import 'reset-css';
import "./globals.css";

const gowunBatang = Gowun_Batang({
  weight: ['400', '700'],
  subsets: ["latin"],
 });

export const metadata = {
  title: "김태현 & 김기현 결혼합니다.",
  description: "2024.10.12(토) 17:00 고려대학교 교우회관 1층 고려스퀘어홀",
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
}) {
  return (
    <html lang="en">
      <body className={gowunBatang.className}>
        <article className={classes.layout}>
          {header}
          {mainImage}
          {weddingLocation}
        </article>

        <article className={classes.layout}>
          {bookQuote}
        </article>

        <article className={classes.layout}>
          {invitationLetter}
        </article>

        <article className={classes.layout}>
          {subWeddingImage}
        </article>

        <article className={classes.otherBackgroundLayout}>
          {weddingDate}
        </article>

        <article className={classes.layout}>
          {gallery}
        </article>

        <article className={classes.layout}>
          {locationDetail}
        </article>

        <article className={classes.layout}>
          {bankAccountNumber}
        </article>

        <article className={classes.layout}>
          {guestBook}
        </article>

        <article className={classes.layout}>
          {subWeddingImage2}
        </article>

        {footer}
      </body>
    </html>
  );
}
