var erase = require('turf-erase'),
    inside = require('turf-inside'),
    point = require('turf-point');

// find smallest area extract that fully includes the given polygon
module.exports = function findExtract(given, extractsGeoJson) {
    var matches = extractsGeoJson.features.filter(function(extract) {
    	if (!inside(point(given.geometry.coordinates[0][0]), extract))
    		return false;
        // clone `given` object, see: https://github.com/Turfjs/turf-erase/issues/5
        var erased = erase(JSON.parse(JSON.stringify(given)), extract);
        if (erased === undefined)
            return true;
        return false;
    });
    if (matches.length === 0) {
        return undefined;
    }
    var result = matches.reduce(function(prev, current) {
        return current.properties.area<prev.properties.area ? current : prev;
    });
    return result.properties.geofabrikName;
}