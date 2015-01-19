var test = require('tape'),
    findExtract = require('./'),
    fs = require('fs');

var geofabrik = JSON.parse(fs.readFileSync('geofabrik.geojson', 'utf8'));

test('findExtract', function(t){
    t.equals(findExtract(testdata.features[1], geofabrik), 'europe/austria');
    t.equals(findExtract(testdata.features[0], geofabrik), 'europe/alps');
    t.end();
});

var testdata = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Bodensee"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              9.25048828125,
              47.57281986733871
            ],
            [
              8.84674072265625,
              47.667237034505156
            ],
            [
              9.03076171875,
              47.85924575819688
            ],
            [
              9.525146484375,
              47.657987988142274
            ],
            [
              9.865722656249998,
              47.635783590864854
            ],
            [
              9.876708984375,
              47.428087261714275
            ],
            [
              9.580078125,
              47.37603463349758
            ],
            [
              9.25048828125,
              47.57281986733871
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Graz"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              15.3369140625,
              46.99524110694596
            ],
            [
              15.3369140625,
              47.15236927446393
            ],
            [
              15.534667968749998,
              47.15236927446393
            ],
            [
              15.534667968749998,
              46.99524110694596
            ],
            [
              15.3369140625,
              46.99524110694596
            ]
          ]
        ]
      }
    }
  ]
}