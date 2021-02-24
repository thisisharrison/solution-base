class CreatePostTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :post_topics do |t|
      t.integer :post_id, null: false
      t.integer :topic_id, null: false

      t.timestamps
    end
    add_index :post_topics, :post_id
    add_index :post_topics, :topic_id
    add_index :post_topics, [:post_id, :topic_id], unique: true
  end
end
