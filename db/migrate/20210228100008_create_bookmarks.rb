class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id
      t.references :bookmarkable, polymorphic: true

      t.timestamps
    end
    add_index :bookmarks, :user_id
    add_index :bookmarks, [:bookmarkable_id, :bookmarkable_type]
    add_index :bookmarks, [:user_id, :bookmarkable_id, :bookmarkable_type], unique: true, name: 'unique_bookmarks'
  end
end
