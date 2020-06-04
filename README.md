# Chat-space DB設計
## usersテーブル
|Coumn|Type|Options|
|-----|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :groups, through: :users_groups
- has_many :messages
- has_many :users_groups

## groupsテーブル
|Coumn|Type|Options|
|-----|----|-------|
|name|string|null: false|
### Assosiation
- has_many :user, through: :users_groups
- has_many :messages
- has_many :users_groups

## messagesテーブル
|Coumn|Type|Options|
|-----|----|-------|
|body|text||
|image|text||
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|
### Assosiation
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group