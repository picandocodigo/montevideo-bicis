# -*- coding: utf-8 -*-
require 'csv'
class DeadPeople
  attr_reader :total, :bikes, :falls

  def initialize
    @total, @bikes, @falls = 0, 0, 0
    get_bike_details
  end

  private

  def get_bike_details
    CSV.foreach("data/fallecidos2012.csv") do |row|
      @total += 1
      @bikes += 1 if row[0] =~ /BICICLETA/
      @falls += 1 if row[0] =~ /BICICLETA/ && row[0] =~ /CAIDA/
    end
  end

end
