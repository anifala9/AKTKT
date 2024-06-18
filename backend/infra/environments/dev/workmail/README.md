# WorkMail

[WorkMail](https://dev.classmethod.jp/articles/try-amzn-workmail/)

TeraformではWorkMailがサポートされているわけではないよう。
必要なところはGUI経由で構築し、のこりをTerraformで設定する

WorkMailは特定リージョンのみ対応。 us-east-1で対応

1. WorkMailでOrganizationを作成
  - hostedZone :: aktkt.net
  - alias :: aktktmail

2. Moduleを利用したが、いくつかがAlready createdになっている

3. SESでのMailFromの設定 をGUIで設定した

4. Publish DNS Record to Route53 ボタンで、 mailfromのDNS設定をやってもらった

5. セキュリティのためのレコード登録 はできているよう

