import getDefaultUrl from '@/utils/getDefaultUrl';

const getGuestBooks = async () => {
  const defaultUrl = getDefaultUrl();

  const response = await fetch(`${defaultUrl}/api/guest-book`, {
    method: 'GET',
    cache: 'no-cache',
    next: {
      tags: ['allGuestBooks'],
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();

  return result;
};

export default getGuestBooks;
