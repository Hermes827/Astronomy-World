class AddPicToPlanets < ActiveRecord::Migration[6.0]
  def change
    add_column :planets, :image, :string
  end
end
