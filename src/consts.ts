export const SITE = {
  title: 'L-Works',
  description: '開発のポートフォリオ、ブログ、読んだ本と愛用品の記録。',
  author: 'awa',
  lang: 'ja',
};

// アフィリエイト設定。審査に通ったら ID を入れる。空のままなら素のリンクになる。
export const AFFILIATE = {
  // Amazon アソシエイトのトラッキング ID(例: 'awalotus-22')
  amazonTag: '',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects/', label: 'Works' },
  { href: '/blog/', label: 'Blog' },
  { href: '/books/', label: 'Books' },
  { href: '/items/', label: 'Items' },
  { href: '/about/', label: 'About' },
];
