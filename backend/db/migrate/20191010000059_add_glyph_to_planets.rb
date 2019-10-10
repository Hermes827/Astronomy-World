class AddGlyphToPlanets < ActiveRecord::Migration[6.0]
  def change
    add_column :planets, :glyph, :string
  end
end
