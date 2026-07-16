# Ryuik-on 公式サイト

静的HTML/CSS/JavaScriptで構成した、GitHub Pages対応サイトです。

## ローカル確認

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開きます。

## GitHub Pagesで公開

1. このフォルダの中身をGitHubリポジトリのルートへ置く
2. `main` ブランチへpush
3. GitHubの `Settings > Pages` を開く
4. Sourceを `GitHub Actions` にする
5. Actions完了後、公開URLが発行される

## 公開前に差し替える項目

- `assets/hero-logo.png`：透過PNGまたはSVG推奨
- Next Liveの時間：現在は `TIME TBA`
- Movie：`script.js` 内の仮モーダルを実動画へ接続
- Instagram：現在は公式アカウントへのリンク
- About：より自然な部員写真があれば差し替え
- 写真クレジット：撮影者名が確定したらGalleryへ反映

## 確定済み情報

- ROOM：2026年11月22日（日）
- OPEN 16:00 / START 17:00
- 那覇市ぶんかテンブス館 テンブスホール
- Instagram：@ryuikeion
