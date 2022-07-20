// map variable
var map;

//function to instantiate the Leaflet map
function createMap(){
  //create the map
  map = L.map('map').setView([45, -101], 4);

  // basemap tiles: positron blue from GeoAPIfy
  var tiles = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
     attribution: '',
     maxZoom: 10,
   }).addTo(map);

//call getData function
getData(map);
};

//function to retrieve the data and place it on the map
function getData(map){

  // repair network data
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
            -85.836423,
            41.589086
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
            -95.266212,
            38.958184
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
            -88.144083,
            40.075453
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
            -78.918387,
            40.329353
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
            -110.828987,
            32.19709
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
            -97.339044,
            37.687692
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
            -122.331537,
            47.673455
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
            -118.148936,
            34.153289
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
            -94.731462,
            39.106542
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
            -86.009905,
            41.911597
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
            -75.168428,
            39.990821
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
            -93.266563,
            44.96313
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
            -122.431272,
            37.778008
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
            -106.579128,
            35.128683
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
            -73.9708,
            40.68295
          ]
        }
      },
    {
      "type": "Feature",
      "properties": {
        "Community": "Hyde Park Mennonite Fellowship",
        "Website": "https://www.hydeparkmennonitefellowship.com/",
        "City": "Boise",
        "ConcComma": ", ",
        "State": "ID",
        "Location": "Boise, Idaho",
        "CommitmentStatus": "Joined",
        "IndigenousLands": "Boise Valley Shoshone, Northern Paiute and Bannock Tribes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.22749,
          43.60859
        ]
      }
    }
    ]
  };

  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };

  var congLayer = L.geoJSON(cong, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: onEachFeature
  }).addTo(map);

};


function onEachFeature(feature, layer) {
  // create html string variable
  var popupContent = "";
  // variables to shorten html string content
  var congregation = feature.properties.Community;
  var website = feature.properties.Website;
  var nations = feature.properties.IndigenousLands;


    if (feature.properties) {
      //format html popup content
      popupContent += "<h3><a href='" + website + "'>" + congregation + "</a></h3> <p> Indigenous Neighbors: " + nations + "</p>" ;
    };
    layer.bindPopup(popupContent);
};

document.addEventListener('DOMContentLoaded',createMap)
