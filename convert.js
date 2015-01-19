var togeojson = require('togeojson'),
    merge = require('geojson-merge'),
    flatten = require('geojson-flatten'),
    area = require('geojson-area'),
    fs = require('fs'),
    jsdom = require('jsdom').jsdom,
    find = require('findit');

var find = find('./data');

var geojsons = [];

find.on('file', function (file, stat) {
    // convert all kml files to geojson
    var kml = jsdom(fs.readFileSync(file, 'utf8'));
    var gj = flatten(togeojson.kml(kml));
    gj.features.forEach(function(gjf) {
        gjf.properties.geofabrikName = file.substr(0,file.length-4).substr(5);
        gjf.properties.area = area.geometry(gjf.geometry);
    });
    geojsons.push(gj);
});

find.on('end', function () {
    var geojson = merge(geojsons);
    process.stdout.write(JSON.stringify(geojson,null,0));
});