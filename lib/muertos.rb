# -*- coding: utf-8 -*-
require 'csv'

total, bicis, caidas = 0, 0, 0

CSV.foreach("data/fallecidos2012.csv") do |row|
  total += 1
  if row[0] =~ /BICICLETA/
    puts row
    bicis += 1
    if row[0] =~ /CAIDA/
      caidas += 1
    end
  end
end

puts "Total fallecimientos: #{total}"
puts "total fallecimientos bici: #{bicis}"
puts "Total caídas:  #{caidas}"
