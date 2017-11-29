# Process deaths
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
    data = metadata[year]
    CSV.foreach("data/#{year}.csv", col_sep: ';') do |row|
      @accidents << row
      @total += 1
      @bikes += 1 if row[data[:bike_col]] =~ /BICICLETA/
      @falls += 1 if row[data[:bike_col]] =~ /BICICLETA/ &&
                     row[data[:fall_col]] =~ /CAIDA/
    end
  end

  # Each year has a different column for vehicle type and accident type:
  def metadata
    {
      2012 => {bike_col: 3, fall_col: 7},
      2013 => {bike_col: 4, fall_col: 3},
      2014 => {bike_col: 5, fall_col: 4},
      2015 => {bike_col: 5, fall_col: 4},
      2016 => {bike_col: 5, fall_col: 4}
    }
  end
end
