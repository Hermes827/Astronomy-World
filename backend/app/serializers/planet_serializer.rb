class PlanetSerializer < ActiveModel::Serializer
  attributes :name, :image, :glyph, :mean_diameter, :satellites, :orbit
end
