class Api::V1::PlanetsController < ApplicationController

  def index
    @planets = Planet.all
    render json: @planets
  end
end
