class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.references :voteable, polymorphic: true

      t.timestamps
    end
    add_index :votes, :user_id
    add_index :votes, [:voteable_id, :voteable_type]
    add_index :votes, [:user_id, :voteable_id, :voteable_type], unique: true, name: 'unique_votes'
  end
end
