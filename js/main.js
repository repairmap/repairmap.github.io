// map variable
var map;

//function to instantiate the Leaflet map
function createMap(){
  //create the map
  map = L.map('map').setView([47.1164, -101.2996], 4);


  // basemap tiles: positron blue from GeoAPIfy
  var positron_blue = L.tileLayer('https://maps.geoapify.com/v1/tile/positron-blue/{z}/{x}/{y}.png?apiKey=938b15273e0a487aa0df78a19b7fa9f9', {
     attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
     maxZoom: 20,
     id: 'osm-bright'
   }).addTo(map);


   // add points to congLayer
   var cong = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Community": "Eighth Street Mennonite",
        "Website": "https://8thstmennonite.org/",
        "City": "Goshen",
        "ConcComma": ", ",
        "State": "IN",
        "Location": "Goshen, IN",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Potawatomi and Miami People"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85836423,
          41589086
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Peace Mennonite",
        "Website": "https://peacemennonite.org/",
        "City": "Lawrence",
        "ConcComma": ", ",
        "State": "KS",
        "Location": "Lawrence, KS",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Kanza Land"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95266212,
          38958184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "First Mennonite Church",
        "Website": "https://fmc-cu.org/",
        "City": "Champaign Urbana",
        "ConcComma": ", ",
        "State": "IL",
        "Location": "Champaign Urbana, IL",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Lands of the Kickapoo, Piankeshaw, Peoria, and Potawatomi Nations"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88144083,
          40075453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Allegheny Mennonite Conference Association",
        "Website": "https://www.alleghenymennoniteconference.org/",
        "City": "Johnstown",
        "ConcComma": ", ",
        "State": "PA",
        "Location": "Johnstown, PA",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Lenapehoking - Lenape Nation"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78918387,
          40329353
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Shalom Mennonite Fellowship",
        "Website": "https://shalommc.org/",
        "City": "Tucson",
        "ConcComma": ", ",
        "State": "AZ",
        "Location": "Tucson, AZ",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Tohono O'odham land, also lived on for a very long time by the Pascua Yaqui and Apache"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110828987,
          3219709
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Mennonite Church of the Servant",
        "Website": "http://www.mcswichita.net/",
        "City": "Wichita",
        "ConcComma": ", ",
        "State": "KS",
        "Location": "Wichita, KS",
        "CommitmentStatus": "Joined",
        "IndigenousLands": " Lands of Wichita/Osage/Kanza"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97339044,
          37687692
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Seattle Mennonite Church",
        "Website": "https://seattlemennonite.org/",
        "City": "Seattle",
        "ConcComma": ", ",
        "State": "WA",
        "Location": "Seattle, WA",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "The Duwamish Tribe"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122331537,
          47673455
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Pasadena Mennonite Church",
        "Website": "http://pasadenamennonite.org/",
        "City": "Pasadena",
        "ConcComma": ", ",
        "State": "CA",
        "Location": "Pasadena, CA",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Unceded land of the Hahamogna tribe of the Tongva people"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118148936,
          34153289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Eliza B. Conley House of Resilience: A Mennonite Catholic Worker in Wyandotte County",
        "Website": "https://peaceworkskc.org/ecology/kc-ks-activists-form-mennonite-catholic-worker-house-of-resilience",
        "City": "Kansas City",
        "ConcComma": ", ",
        "State": "KS",
        "Location": "Kansas City, KS",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Kanza, NiUKoenSka, Lenni Lenape, Shawano, Wendat"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94731462,
          39106542
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Camp Friedenswald",
        "Website": "https://friedenswald.org/",
        "City": "Cassopolis",
        "ConcComma": ", ",
        "State": "MI",
        "Location": "Cassopolis, MI",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Potawatomi People; Pokagon Band Potawatomi Nation"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86009905,
          41911597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Germantown Mennonite Church",
        "Website": "https://www.germantownmennonite.org/",
        "City": "Philadelphia",
        "ConcComma": ", ",
        "State": "PA",
        "Location": "Philadelphia, PA",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Lenapehoking - Lenape Nation"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75168428,
          39990821
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Faith Mennonite",
        "Website": "https://faithmennonite.org/",
        "City": "Minneapolis",
        "ConcComma": ", ",
        "State": "MN",
        "Location": "Minneapolis, MN",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Dakota Peoples"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93266563,
          4496313
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "First Mennonite Church",
        "Website": "https://menno.org/",
        "City": " San Francisco",
        "ConcComma": ", ",
        "State": "CA",
        "Location": " San Francisco, CA",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Ohlone Peoples of the Bay Area: Ramaytush,\nTamien, Chochenyo, Karkin, Muwekma, and Bay Miwok"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122431272,
          37778008
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Albuquerque Mennonite Church",
        "Website": "http://www.abqmennonite.org/",
        "City": "Albuquerque",
        "ConcComma": ", ",
        "State": "NM",
        "Location": "Albuquerque, NM",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Sandia Pueblo (one of the Tiwa-speaking groups in New Mexico)"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106579128,
          35128683
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community": "Manhattan Mennonite Fellowship",
        "Website": "https://manhattanmennonite.org/",
        "City": "New York City",
        "ConcComma": ", ",
        "State": "NY",
        "Location": "New York City, NY",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Lenapehoking, the ancestral and unceded territory of the Lenape people. Specifically, we are located on Munsi land, a Manhattan tribe of the Lenape people. "
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -739708,
          4068295
        ]
      }
    }
  ]
};

//create marker options
var congMarkerOptions = {
           radius: 20,
           fillColor: "#ff7810",
           color: "#000",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.5
       };

// add congregation layer to map
L.geoJSON(cong, {
  pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, congMarkerOptions);
    }
}).addTo(map);
console.log(cong);






};

//console.log(cong);
//console.log(geojsonMarkerOptions);


document.addEventListener('DOMContentLoaded',createMap)
