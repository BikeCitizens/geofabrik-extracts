#!/bin/bash

wget http://download.geofabrik.de/allkmlfiles.tgz
mkdir data
tar xzf allkmlfiles.tgz -C data

node convert.js > geofabrik.geojson

rm -r data
rm allkmlfiles.tgz