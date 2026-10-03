export const SITE = {
  title: 'awa-lotus',
  description: '開発のポートフォリオ、ブログ、読んだ本と愛用品の記録。',
  author: 'awa',
  lang: 'ja',
  github: 'https://github.com/awa-lotus',
  // X などのアカウントがあれば追加する(空文字なら非表示)
  x: '',
};

// アフィリエイト設定。審査に通ったら ID を入れる。空のままなら素のリンクになる。
export const AFFILIATE = {
  // Amazon アソシエイトのトラッキング ID(例: 'awalotus-22')
  amazonTag: '',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
  { href: '/books/', label: 'Books' },
  { href: '/items/', label: 'Items' },
  { href: '/about/', label: 'About' },
];
