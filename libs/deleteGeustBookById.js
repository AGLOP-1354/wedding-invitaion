'use server';

import { revalidateTag } from "next/cache";

import getDefaultUrl from '@/utils/getDefaultUrl';

const deleteGuestBookById = async (_id) => {
  const defaultUrl = getDefaultUrl();

  const response = await fetch(`${defaultUrl}/api/guest-book`, {
    method: 'DELETE',
    body: JSON.stringify({ _id }),
  });

  revalidateTag('allGuestBooks');

  const result = await response.json();
  return result;
}

export default deleteGuestBookById;
