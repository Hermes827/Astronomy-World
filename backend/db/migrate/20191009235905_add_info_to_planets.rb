class AddInfoToPlanets < ActiveRecord::Migration[6.0]
  def change
    add_column :planets, :orbit, :string
    add_column :planets, :satellites, :string
    add_column :planets, :mean_diameter, :string
  end
end
