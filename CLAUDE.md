# LWorks(個人サイト)

Astro 7 + TypeScript の静的サイト。GitHub Pages の `/my-site` 配下で公開している。

- 見た目を変える前に [DESIGN.md](DESIGN.md) を読み、最後のチェックリストを通す。トークンは `src/styles/global.css` の `:root`。
- サイト名は `LWorks`(ハイフンなし)。キャッチコピー、GitHub への誘導、アカウント名はページに出さない。
- サイト内リンクは必ず `src/lib.ts` の `url()` を通す。
- CSS 圧縮の落とし穴: `animation-timeline` は `:root .x {}` の別ルールに書く。`backdrop-filter` には `var()` を使わず値を直接書く。
- 変更後は `npm run build`(型チェック込み)がエラー 0 で通ることを確かめる。
- トークンや部品を変えたら、Claude Design のデザインシステム(DESIGN.md 冒頭のリンク)も合わせて更新する。
