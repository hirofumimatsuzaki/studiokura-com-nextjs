import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchTopMemosFromBff } from '@/utils/classPlacePage';

const HOMEPAGE_CLASS_PLACE_SLUGS = [
  'itoshima',
  'nishijin',
  'takeo',
  'hakozaki',
  'hakozaki2',
  'hashimoto',
  'meinohama',
  'sarayama',
  'momochi',
  'kashii',
  'motooka',
  'befu',
  'onojyo',
  'nagazumi',
  'tomari',
  'kurume',
  'online',
] as const;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { topMemos } = await fetchTopMemosFromBff(req, [...HOMEPAGE_CLASS_PLACE_SLUGS]);
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
  res.status(200).json({ topMemos });
};

export default handler;
