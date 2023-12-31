# Plan

## Big Picture
- 政治家・後援会むけ汎用モダンウェブサイト・サービス

### Why
- IT技術を政治家・後援会が使い自分たちの活動を発信する拠点とする
  - 現在は政治家がIT技術を十分に使っているとはいえない
  - 政治家の信条・活動の全体像を把握できる場所がない
    - Xなどの時系列で流れるメディアでは困難
- 政治活動の透明化
    - データ公表場所
- 政治活動の説明を助けるウェブサービス
    - 例:説明資料を作成する上でのデータを作成する

#### 追加項目
汎用サイトには必要ないが、最初のサイトには持たせたい機能
- 政治家になりたい人・その方の後援会のためのノウハウ
  - 立候補から当選までのながれ
    - 立候補者活動
    - 後援会活動

##### Why
- 政治家になれるための手段を共有する
  - 政治家になるためのファーストステップの負荷を軽減したい

## サイトSchema
- 制約されないサイト
  - 他メディアでは表現できないコンテンツ・サービスを提供する
- まとめのサイト
  - リアルタイム性・特化した機能は各サービスを利用する
- 公開のサイト
  - 非公開にしたいものは別のサービスを使う

## ページ構成

- 政治家のページ
- 後援会のページ
- ウェブサービスのページ
- 政治家になるためのページ (汎用サイトには含めない予定)


### 政治家のページ
- 信条ページ
  - 制度と信条との関連ページ
    - 例: 二限代表制
- 活動ページ
  - 各SNSへのリンク・リアルタイムライン表示
  - 各メディアへの対応関連
    - 例: X上でのとある発言への説明、新聞社とのやりとり経緯

### 政治家になるためのページ
#### 目的
- 初立候補から当選までの流れをまとめたページ
  - あの時の活動をまとめることによって、2回目の活動を円滑にする
    - 2回目の活動で初参加する人のためのページにもなる
    - 別の場所での立候補にも役立つ
  - このまとめページを元に、[選挙活動ページ](#選挙活動ページ)を作成する


### 後援会のページ
- 選挙活動ページ
- 後援会からの情報ページ

#### 選挙活動ページ
[政治家になるためのページ](#政治家になるためのページ)の結果から構造を決定する

##### 例
- スケジュール
  - 街頭演説
    - Youtubeなどにアップしたもののリンク
- 活動収支

#### 後援会からの情報ページ
- 後援会の存在意義を説明するページ
- 市長(+執行部)と議会の情報まとめページ


### ウェブサービスのページ 
- 他サービスでは実現困難なことをここで行う
  - 例: コンパクトシティ実現にむけたインフラ整備計画のための試算サービス


## Appendix

### 選挙ドットコムとの違い

[選挙ドットコム](https://go2senkyo.com/)
- ポータルサイト
  - 全国区での選挙情報の発信
    - 運営からの選挙情報
    - 世論調査
  - 選挙情報データベース
    - 衆議院・参議院・地方選挙データ
  - 政治家データベース


特長の差異
方向性
- AKTKT 
  - あくまでも独自ドメイン＆独自サイト
  - 自由なWEBサイト
  - サイト開発・運営もすべて自分の責務
- 選挙ドットコム
  - ポータルサイト
  - 選挙ドットコムが提供するサービスを利用する
    - サービス利用料
    - 掲載する情報の型式が選挙ドットコム側から規定される
  - 運営はすべておまかせ

Pros & Cons


