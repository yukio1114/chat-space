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

## groupsテーブル
|Coumn|Type|Options|
|-----|----|-------|
|guroup_name|string|null: false|
|chat_member|string||
### Assosiation
- belongs_to :user, through: :users_groups
- has_many :messages

## messagesテーブル
|Coumn|Type|Options|
|-----|----|-------|
|body|text||
|image|text||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Assosiation
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group