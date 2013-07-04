# -*- coding: utf-8 -*-
require 'csv'
class DeadPeople
  attr_reader :total, :bikes, :falls, :accidents

  def initialize
    @total, @bikes, @falls = 0, 0, 0
    @accidents = []
    get_bike_details
  end

  private

  def get_bike_details
    CSV.foreach("data/fallecidos2012.csv", col_sep: ";") do |row|
      @accidents << row
      @total += 1
      @bikes += 1 if row[3] =~ /BICICLETA/
      @falls += 1 if row[3] =~ /BICICLETA/ && row[7] =~ /CAIDA/
    end
  end

end
