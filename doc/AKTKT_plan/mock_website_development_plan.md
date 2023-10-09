# モダンモックWebサイト構築プラン

## 目的

- モダンなMockサイトを構築する

## 技術的側面

- TypeScript & NextJS で構築する
  - Freeのテーマを使い、それを改変する
    - 極力早いMockサイト構築を目指す
- WordPressで作成したページも表示できるようにする
  - 非技術者でもコンテンツ追加ができるようにする

## サイト構成

- SPA
- ヘッダーにタブ
  - タブ選択でレベルが1段低いルートを表示する
  - それよりレベルの低いルートへ飛ぶ経路は無くて良い


## Freeテンプレート

[cruip/open-react-template](https://github.com/cruip/open-react-template)

- Lisence: GPL
- build on NextJS & TypeScript
- 基本構成はそのままつかえるはず

## Schema

- 固定内容でよい
  - 例外として、Twitter表示のみ行いたい
- WordPressで作成したページを表示する

## スケジュール

- 10/M 
  - WordPressをヘッドレスCMSにしてNext.jsで表示する
  - [NextJS Learning](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website)

  - NextJS Deploy

- 10/E 
  - リポジトリにFree Template導入
  - Free Template改変
    - ページ中で不要なものを排除
  - 一部ページをNext.JSで作成
  - 一部ページをWordPressで作成
  - 混在したページを実現する

- 11/1st Week
  - デプロイ
    - 初版テストサイト





