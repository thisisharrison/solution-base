class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :name
      t.string :description

      t.timestamps
    end
    add_index :topics, :name, unique: true
  end
end
