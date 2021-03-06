class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :problem_id
      t.string :title, null: false
      t.string :body, null: false
      t.string :post_type, null: false

      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :problem_id
  end
end
