class AddIdToPlanets < ActiveRecord::Migration[6.0]
  def change
    add_column :planets, :planet_id, :integer
  end
end
