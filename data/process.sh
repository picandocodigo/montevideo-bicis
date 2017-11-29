#!/bin/sh
iconv -f ISO_8859-1 -t UTF-8 Personas_fallecidas_en_2012.csv > 2012.csv
iconv -f ISO_8859-1 -t UTF-8 Fallecidos_2013.csv > 2013.csv
iconv -f ISO_8859-1 -t UTF-8 Fallecidos_2014.csv > 2014.csv
iconv -f ISO_8859-1 -t UTF-8 Fallecidos_2015.csv > 2015.csv
iconv -f ISO_8859-1 -t UTF-8 Fallecidos_2016.txt | sed 's/\t/";"/g' | sed 's/\"//g' > 2016.csv
