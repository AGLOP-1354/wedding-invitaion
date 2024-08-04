'use server';

import dayjs from "dayjs";
import { revalidateTag } from "next/cache";

import getDefaultUrl from '@/utils/getDefaultUrl';

const writeGuestBook = async (formData) => {
  const defaultUrl = getDefaultUrl();

  const guestBook = {
    guestName: formData.get('guestName'),
    password: formData.get('password'),
    contents: formData.get('contents'),
    createdAt: dayjs().format('YYYY.MM.DD'),
  };

  const response = await fetch(`${defaultUrl}/api/guest-book`, {
    method: 'POST',
    body: JSON.stringify(guestBook),
  });

revalidateTag('allGuestBooks');

  const result = await response.json();
  return result;
};

export default writeGuestBook;
