Finds the smallest [geofarbik extract](http://download.geofabrik.de/) which contains a given Polygon.

Usage
-----

Preparations:

    npm install # installs dependencies
    npm run preprocess # downloads geofabrik metadata and creates a file "geofabrik.geojson" with all extract bounds
    npm run browser # optional, browserifies the module ("findExtract.js")

API:

    findExtract(polygon, geofabrik)

Returns the name of the smallest (by area) geofabrik extract that still fully contains the `polygon` (supplied as a [GeoJSON](http://geojson.org/) feature). Requires the data from `geofabrik.geojson` as the second parameter (run `npm run preprocess` to generate it).
