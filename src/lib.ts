import { AFFILIATE } from './consts';

// サイト内リンクに base(/my-site)を付ける
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export function amazonUrl(asin: string): string {
  const url = new URL(`https://www.amazon.co.jp/dp/${asin}`);
  if (AFFILIATE.amazonTag) url.searchParams.set('tag', AFFILIATE.amazonTag);
  return url.toString();
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
