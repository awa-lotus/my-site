# my-site

個人サイト(ポートフォリオ・ブログ・本棚・愛用品)。[Astro](https://astro.build/) で作った静的サイトを GitHub Pages(https://awa-lotus.github.io/my-site/)で公開しています。

## ローカルで動かす

Node.js 22.12 以上が必要です(`.nvmrc` あり)。

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # 型チェック + dist/ に出力
npm run preview  # ビルド結果を確認
```

## 記事・データの追加

`src/content/` の下に Markdown を 1 ファイル追加するだけです。frontmatter の項目は `src/content.config.ts` で定義しています。

| 種類 | 置き場所 | 表示先 |
| --- | --- | --- |
| ブログ | `src/content/blog/*.md` | `/blog/` (`draft: true` は本番に出ない) |
| プロジェクト | `src/content/projects/*.md` | `/projects/` (`featured: true` はトップにも出る) |
| 本 | `src/content/books/*.md` | `/books/` (`status`: read / reading / want) |
| 持ち物 | `src/content/items/*.md` | `/items/` (`category` ごとにまとまる) |

本と持ち物は `asin` を書くと Amazon リンクが、`links` を書くと楽天や公式ストアなどのリンクが付きます。

## アフィリエイト

`src/consts.ts` の `AFFILIATE.amazonTag` に Amazon アソシエイトのトラッキング ID を入れると、全ての Amazon リンクに自動で付きます。リンクには `rel="sponsored"` が付き、フッターに広告表記があります。

## デプロイ

`main` に push すると GitHub Actions (`.github/workflows/deploy.yml`) がビルドして GitHub Pages に公開します。初回のみリポジトリの Settings → Pages → Source を「GitHub Actions」にしてください。

サイト内リンクは `src/lib.ts` の `url()` を通して書いてください(`/my-site` が自動で付きます)。

独自ドメインを使う場合は `astro.config.mjs` の `site` をドメインにして `base` を削除し、`public/robots.txt` を書き換え、`public/CNAME` にドメインを書きます。
