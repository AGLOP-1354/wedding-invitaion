import { headers } from 'next/headers';

const getDefaultUrl = () => {
  const host =
    process?.env.NODE_ENV === 'production'
      ? headers().get('host')
      : 'localhost:5001';
  const protocol = process?.env.NODE_ENV === 'production' ? 'https' : 'http';

  return `${protocol}://${host}`;
};

export default getDefaultUrl;
