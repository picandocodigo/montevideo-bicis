# -*- coding: utf-8 -*-
require 'csv'
class DeadPeople
  attr_reader :total, :bikes, :falls, :accidents

  def initialize(year)
    @total, @bikes, @falls = 0, 0, 0
    @accidents = []
    get_bike_details(year)
  end

  private

  def get_bike_details(year)
    case year
    when 2012
      CSV.foreach('data/2012.csv', col_sep: ';') do |row|
        @accidents << row
        @total += 1
        @bikes += 1 if row[3] =~ /BICICLETA/
        @falls += 1 if row[3] =~ /BICICLETA/ && row[7] =~ /CAIDA/
      end
    when 2013
      CSV.foreach('data/2013.csv', col_sep: ';') do |row|
        @accidents << row
        @total += 1
        @bikes += 1 if row[4] =~ /BICICLETA/
        @falls += 1 if row[4] =~ /BICICLETA/ && row[3] =~ /CAIDA/
      end
    when 2014
      CSV.foreach('data/2014.csv', col_sep: ';') do |row|
        @accidents << row
        @total += 1
        @bikes += 1 if row[5] =~ /BICICLETA/
        @falls += 1 if row[5] =~ /BICICLETA/ && row[4] =~ /CAIDA/
      end
    when 2015
      CSV.foreach('data/2015.csv', col_sep: ';') do |row|
        @accidents << row
        @total += 1
        @bikes += 1 if row[5] =~ /BICICLETA/
        @falls += 1 if row[5] =~ /BICICLETA/ && row[4] =~ /CAIDA/
      end
    end

  end

end
