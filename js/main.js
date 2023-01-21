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
        "Community ": "Eighth Street Mennonite",
        "URL": "https://8thstmennonite.org/",
        "Location": "Goshen, IN",
        "Address": "602 S. 8th St.",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Julia Gingrich (pastor), Eileen Saner, Don Paetkau, Barry Johnson, Janeen Bertsche Johnson, Ron Byler ",
        "Email Contact": "<eksaner@gmail.com>, <jgingrich@8thstmennonite.org>,\n<dpaetkau@saintmarys.edu>,\n<bljbhead@msn.com>,\n<jbjohnson@ambs.edu>,\n<jronbyler@gmail.com>",
        "IndigenousLandsRecognized": "Potawatomi and Miami People",
        "IndigenousLands1": "Potowatomi",
        "IndigenousLands2": "Miami",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.827988,
          41.576347
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Peace Mennonite",
        "URL": "https://peacemennonite.org/",
        "Location": "Lawrence, KS",
        "Address": "615 Lincoln",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Joni Fornelli, Karen Brown, Becky Janzen, Carola Ratzlaff",
        "Email Contact": "<peacemennopastor@gmail.com>,\n<knhobs@gmail.com>,\n<carolalaff@gmail.com>,\n<ksb10@juno.com>,\n<seajayjee@gmail.com>,\n<cgaleharader@gmail.com>,\n<david.mathis@live.com>,\n<stillwaters@sunflower.com>,\n<wienblum@sunflower.com>,\n<lavenderhouse1600@gmail.com>,\n<klratzlaff@gmail.com>\n<bjay52@me.com>",
        "IndigenousLandsRecognized": "Kanza Land",
        "IndigenousLands1": "Kanza",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
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
        "Community ": "First Mennonite Church",
        "URL": "https://fmc-cu.org/",
        "Location": "Urbana, IL",
        "Address": "902 West Springfield Avenue",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Michael Crosby (pastor), Marcia Nelson (board chair), Sharon Monday, Carrie Nelson ",
        "Email Contact": "<michael.crosby@fmc-cu.org>, <sunboat@soltec.net>, <sharonmonday@gmail.com>",
        "IndigenousLandsRecognized": "Lands of the Kickapoo, Piankeshaw, Peoria, and Potawatomi Nations",
        "IndigenousLands1": "Kickapoo",
        "IndigenousLands2": "Piankeshaw",
        "IndigenousLands3": "Peoria",
        "IndigenousLands4": "Potawatomi",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.195524,
          40.099844
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Allegheny Mennonite Conference - Pennsylvania, West Virginia, Maryland, Delaware, Virginia",
        "URL": "https://www.alleghenymennoniteconference.org/",
        "Location": "Johnstown, PA",
        "Address": "319 Washington St. Suite 234",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "David Mishler (conference minister), Jayne Byler, Hadley Jenner, Kimberly Schmidt",
        "Email Contact": "<davem@alleghenymennoniteconference.org>, <stahlmennonite@gmail.com>, <jaynebyler@gmail.com>, <hhjenner@gmail.com>, <kim.schmidt50@gmail.com>, <davem@alleghenymennoniteconference.org>",
        "IndigenousLandsRecognized": "Lenapehoking - Lenape Nation",
        "IndigenousLands1": "Lenape",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
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
        "Community ": "Shalom Mennonite Fellowship",
        "URL": "https://shalommennonite.org/",
        "Location": "Tucson, AZ",
        "Address": "6044 E 30th Street",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Carol Rose (pastor), Carrie Nelson, Ken Schildt, Ellie Schertz",
        "Email Contact": "carol@shalommennonite.org, cnelson7765@gmail.com",
        "IndigenousLandsRecognized": "Tohono O'odham land, also lived on for a very long time by the Pascua Yaqui and Apache",
        "IndigenousLands1": "Tohono O'odham",
        "IndigenousLands2": "Pascua Yaqui",
        "IndigenousLands3": "Apache",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.862906,
          32.198359
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Mennonite Church of the Servant",
        "URL": "http://www.mcswichita.net/",
        "Location": "Wichita, KS",
        "Address": "2401 Woodland",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "John Stoesz",
        "Email Contact": "johnstoesz1@gmail.com",
        "IndigenousLandsRecognized": " Lands of Wichita/Osage/Kanza",
        "IndigenousLands1": "Wichita",
        "IndigenousLands2": "Osage",
        "IndigenousLands3": "Kanza",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
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
        "Community ": "Seattle Mennonite Church",
        "URL": "https://seattlemennonite.org/",
        "Location": "Seattle, WA",
        "Address": "3120 NE 125th St",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Sabrina Porter Lindquist, Megan Ramer (pastor), John Braun",
        "Email Contact": "s.porter.lindquist@gmail.com, megan@seattlemennonite.org, jabraun.counterpoint@gmail.com",
        "IndigenousLandsRecognized": "The Duwamish Tribe",
        "IndigenousLands1": "Duwamish",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.294086,
          47.719579
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Pasadena Mennonite Church",
        "URL": "http://pasadenamennonite.org/",
        "Location": "Pasadena, CA",
        "Address": "1041 North Altadena Drive",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Tim and Mariann Reardon (pastors)",
        "Email Contact": "tim@pasadenamennonite.org, mreardon@pasadenamennonite.org",
        "IndigenousLandsRecognized": "Unceded land of the Hahamogna tribe of the Tongva people",
        "IndigenousLands1": "Hahamogna",
        "IndigenousLands2": "Tongva",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.099286,
          34.163824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Eliza B. Conley House of Resilience: A Mennonite Catholic Worker in Wyandotte County",
        "URL": "https://peaceworkskc.org/ecology/kc-ks-activists-form-mennonite-catholic-worker-house-of-resilience",
        "Location": "Kansas City, MO",
        "Address": "4509 Walnut",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Kimberly Hunter and Terry Rouse",
        "Email Contact": "ElizaBConleyHouse@gmail.com",
        "IndigenousLandsRecognized": "Kanza, NiUKoenSka, Lenni Lenape, Shawano, Wendat",
        "IndigenousLands1": "Kanza",
        "IndigenousLands2": "NiUKoenSka",
        "IndigenousLands3": "Lenni Lenape",
        "IndigenousLands4": "Shawano",
        "IndigenousLands5": "Wendat",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.905793,
          39.416633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Camp Friedenswald",
        "URL": "https://friedenswald.org/",
        "Location": "Cassopolis, MI",
        "Address": "15406 Watercress Way",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Amy Huser, Jenna Liechty Martin",
        "Email Contact": "amy@friedenswald.org, jenna@friedenswald.org",
        "IndigenousLandsRecognized": "Potawatomi People; Pokagon Band Potawatomi Nation",
        "IndigenousLands1": "Potawatomi",
        "IndigenousLands2": "Pokagon Band Potawatomi",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
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
        "Community ": "Germantown Mennonite Church",
        "URL": "https://www.germantownmennonite.org/",
        "Location": "Philadelphia, PA",
        "Address": "21 West Washington Lane",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Beth and Ruth Sutter, Jay Bergen (pastor), Sue Bartholomew, Anna Hoover",
        "Email Contact": "rsutter@distantwind.com, jay@germantownmennonite.org, suemew@aol.com, garis@pennbpc.org, mandhe1@gmail.com, \nJhorstmartz@aol.com, aghoover609@gmail.com",
        "IndigenousLandsRecognized": "Lenapehoking - Lenape Nation",
        "IndigenousLands1": "Lenape",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.184195,
          40.039989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Faith Mennonite",
        "URL": "https://faithmennonite.org/",
        "Location": "Minneapolis, MN",
        "Address": "2720 E 22nd St",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Kristi Zabriskie",
        "Email Contact": "kristizab@yahoo.com",
        "IndigenousLandsRecognized": "Dakota Peoples",
        "IndigenousLands1": "Dakota",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.274018,
          44.960895
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "First Mennonite Church",
        "URL": "https://menno.org/",
        "Location": "San Francisco, CA",
        "Address": "290 Dolores St",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Michael Bauman, Joanna Shenk, Sarah Herrera",
        "Email Contact": "fmcsf@aol.com, michaelarf99@yahoo.com, annspeyer@yahoo.com, joanna@menno.org, sarahherrera2287@gmail.com",
        "IndigenousLandsRecognized": "Ohlone Peoples of the Bay Area: Ramaytush,\nTamien, Chochenyo, Karkin, Muwekma, and Bay Miwok",
        "IndigenousLands1": "Ohlone",
        "IndigenousLands2": "Ramaytush",
        "IndigenousLands3": "Tamien",
        "IndigenousLands4": "Chochenyo",
        "IndigenousLands5": "Karkin",
        "IndigenousLands6": "Muwekma",
        "IndigenousLands7": "Bay Miwok",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.426696,
          37.764854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Albuquerque Mennonite Church",
        "URL": "http://www.abqmennonite.org/",
        "Location": "Albuquerque, NM",
        "Address": "1300 Girard Blvd. NE",
        "Commitment": "Joined Network",
        "JoinDate": "",
        "Contact(s)": "Ken Gingerich, Dan Goering, Jeannie Elmhorst, Donna Detweiler, Craig Landes",
        "Email Contact": "kengingerichdesign@gmail.com, dgoering222@hotmail.com, jelmhorst1@gmail.com, clandes@wordsbeyondcontent.com",
        "IndigenousLandsRecognized": "Sandia Pueblo (one of the Tiwa-speaking groups in New Mexico)",
        "IndigenousLands1": "Sandia",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.612732,
          35.096831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Manhattan Mennonite Fellowship",
        "URL": "https://manhattanmennonite.org/",
        "Location": "New York, NY",
        "Address": "15 Rutherford Pl",
        "Commitment": "Joined Network",
        "JoinDate": "April 2022",
        "Contact(s)": "Jason Storbakken (pastor), Elizabeth Yepez",
        "Email Contact": "storbakken@gmail.com, ecyepez@yahoo.com, alina.nakos@gmail.com",
        "IndigenousLandsRecognized": "Lenapehoking, the ancestral and unceded territory of the Lenape people. Specifically, we are located on Munsi land, a Manhattan tribe of the Lenape people. ",
        "IndigenousLands1": "Munsi",
        "IndigenousLands2": "Manhattan",
        "IndigenousLands3": "Lenape",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.985189,
          40.733834
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Hyde Park Mennonite Church",
        "URL": "https://www.hydeparkmennonitefellowship.com/",
        "Location": "Boise, Idaho",
        "Address": "1520 North 12th Street",
        "Commitment": "Joined Network",
        "JoinDate": "July 2022",
        "Contact(s)": "Roger Piper-Ruth, Christie Dahlin (Pastor)",
        "Email Contact": "rpiperruth@gmail.com, christie.hpmf@gmail.com;",
        "IndigenousLandsRecognized": "Boise Valley Shoshone, Northern Paiute and Bannock Tribes",
        "IndigenousLands1": "Boise Valley Shoshone",
        "IndigenousLands2": "Northern Paiute",
        "IndigenousLands3": "Bannock",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.22749,
          43.60859
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Raleigh Mennonite Church",
        "URL": "https://www.raleighmennonite.org/",
        "Location": "Raleigh, NC",
        "Address": "121 Hillsborough St.",
        "Commitment": "Joined Network",
        "JoinDate": "September 2022",
        "Contact(s)": "Melissa Florer-Bixler (pastor)",
        "Email Contact": "melissa@raleighmennonite.org",
        "IndigenousLandsRecognized": "We are located between several Native communities: the Tuscarora, Sioun, and Catawba",
        "IndigenousLands1": "Tuscarora",
        "IndigenousLands2": "Sioun",
        "IndigenousLands3": "Catawba",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.641273,
          35.780068
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Silverwood Mennonite Church",
        "URL": "https://www.silverwoodmc.org/",
        "Location": "Goshen, IN",
        "Address": "1745 W Lincoln Ave",
        "Commitment": "Joined Network",
        "JoinDate": "August 2022",
        "Contact(s)": "Clayton Gladish",
        "Email Contact": "clayton@silverwoodmc.org",
        "IndigenousLandsRecognized": "Potawatomi People (Bodewadmik), Miami People (Myaamia)",
        "IndigenousLands1": "Bodewadmik",
        "IndigenousLands2": "Myaamia",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.858418,
          41.586498
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Assembly Mennonite Church",
        "URL": "https://www.assemblymennonite.org/",
        "Location": "Goshen, IN",
        "Address": "727 New York Street",
        "Commitment": "Joined Network",
        "JoinDate": "November 2022",
        "Contact(s)": "Norm Kauffman, Leon Bauman, Anne Birky, John Nafziger, Lois Nafziger, Sharon Kauffmann",
        "Email Contact": "nlkauffmann@gmail.com, annebirky@gmail.com,\nbaumanl57@gmail.com,\njdnafziger@gmail.com,\nlhnafziger@gmail.com,\nsmkauffmann42@gmail.com",
        "IndigenousLandsRecognized": "Potawatomi People (Bodewadmik), Miami People (Myaamia)",
        "IndigenousLands1": "Bodewadmik",
        "IndigenousLands2": "Myaamia",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.822709,
          41.570823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Boulder Mennonite Church",
        "URL": "https://bouldermennonite.org/",
        "Location": "Boulder, CO",
        "Address": "3910 Table Mesa Drive",
        "Commitment": "Joined Network",
        "JoinDate": "January 2023",
        "Contact(s)": "Randy Spaulding (Pastor), Ivanna Johnson (Administrator), Toni Diaz Bachus (Church Chair), Carole Suderman (Deacon), Joan Tice (Deacon),  Cathleen Osborne Gowey, (Indigenous member), Brenda Fox (Prayerstream Director), Lyn Krause, Bruce Fast (Church Treasurer, Outward Ministries Committee), Mary McKay (Outward Ministries Committee), \nBruce Wheeler (Outward Ministries Committee, main representative for Repair Network)",
        "Email Contact": "",
        "IndigenousLandsRecognized": "Ute, Cheyenne, Arapaho, and Oceti Sakowin",
        "IndigenousLands1": "Ute",
        "IndigenousLands2": "Cheyenne",
        "IndigenousLands3": "Arapaho",
        "IndigenousLands4": "Oceti Sakowin",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.248036,
          39.985528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Portland Mennonite",
        "URL": "https://www.portlandmennonite.org/",
        "Location": "Portland, OR",
        "Address": "1312 SE 35th AVE",
        "Commitment": "In process",
        "JoinDate": "",
        "Contact(s)": "Kris Voss-Rothmeier, Sylvia Shirk",
        "Email Contact": "kvossrothmeier@gmail.com, sylviashirk@yahoo.com,\nneighbourhood.gal@gmail.com,\ncjcbrown@fastmail.com,\nrod@portlandmennonite.org,\ncedaropinions@gmail.com",
        "IndigenousLandsRecognized": "Multnomah, Wasco, Cowlitz, Kathlamet, Clackamas, Bands of Chinook, Tualitan, Kalapuya, Molalla",
        "IndigenousLands1": "Multnomah",
        "IndigenousLands2": "Wasco",
        "IndigenousLands3": "Cowlitz",
        "IndigenousLands4": "Kathlamet",
        "IndigenousLands5": "Clackamas",
        "IndigenousLands6": "Chinook",
        "IndigenousLands7": "Tualitan",
        "IndigenousLands8": "Kalapuya",
        "IndigenousLands9": "Mollala",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.627913,
          45.513058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Waterford Mennonite",
        "URL": "https://waterfordchurch.org/",
        "Location": "Goshen, IN",
        "Address": "65975 State Road 15",
        "Commitment": "In process",
        "JoinDate": "",
        "Contact(s)": "Luke Gascho, Jane and Jerrell Ross Richer, Linda Hollinger-Janzen",
        "Email Contact": "lukeag@goshen.edu, LyndaHJ@mmnworld.net, Janerossricher@gmail.com, jerrellrr@goshen.edu",
        "IndigenousLandsRecognized": "Potawatomi People (Bodéwadmik), Miami People (Myaamia)",
        "IndigenousLands1": "Bodewadmik",
        "IndigenousLands2": "Myaamia",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
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
        "Community ": "Mountain Lake Repair Community",
        "URL": "",
        "Location": "Mountain Lake, MN",
        "Address": "",
        "Commitment": "In process",
        "JoinDate": "",
        "Contact(s)": "Wes Kroeker, John Stoesz",
        "Email Contact": "kroekerwes@gmail.com, johnstoesz1@gmail.com, davnoi@netscape.net,\nr.ewert@frontier.com, lbklassen2@gmail.com, mkjjl@langlandnet.com,\ndavis.harder@outlook.com,\nvanderwerf.gary@gmail.com,\ndjbucklin@frontiernet.net, gdkrause@frontiernet.net, djbucklin@frontiernet.com,\nmillieloewen@outlook.com, harder.kathy@gmail.com",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.927176,
          43.940758
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Salford Mennonite Church",
        "URL": "https://www.salfordmc.org/",
        "Location": "Harleysville, PA",
        "Address": "480 Groffs Mill Rd.",
        "Commitment": "In process - planning on joining late summer/ fall 2022",
        "JoinDate": "",
        "Contact(s)": "Jennifer Svetlik (Co-coordinator of Justice Initiatives)",
        "Email Contact": "jennifer.svetlik@gmail.com",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.392416,
          40.279195
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "EMU Land Acknowledgment Team",
        "URL": "https://emu.edu/land-acknowledgement/",
        "Location": "Harrisonburg, VA",
        "Address": "1200 Park Road",
        "Commitment": "In process",
        "JoinDate": "",
        "Contact(s)": "Andrew Suderman, Timothy Seidel",
        "Email Contact": "andrew.suderman@emu.edu, timothy.seidel@emu.edu",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.880332,
          38.471104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Boulder Mennonite Church",
        "URL": "https://bouldermennonite.org/",
        "Location": "Boulder, CO",
        "Address": "3910 Table Mesa Dr",
        "Commitment": "In process",
        "JoinDate": "",
        "Contact(s)": "Cheri Krause, Randy Spaulding",
        "Email Contact": "cheri.krause@gmail.com, randy@bouldermennonite.org",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.248036,
          39.985528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Willow Avenue Mennonite Church",
        "URL": "https://willowmennonite.org/",
        "Location": "Clovis, CA",
        "Address": "2529 Willow Ave",
        "Commitment": "In process",
        "JoinDate": "",
        "Contact(s)": "Arthur Stewart (co-pastor), Al Dueck, Stan Friesen",
        "Email Contact": " <arthur@willowmennonite.org>, <adueck@fuller.edu>",
        "IndigenousLandsRecognized": "Yokuts and Mono Peoples",
        "IndigenousLands1": "Yokuts",
        "IndigenousLands2": "Mono",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.729272,
          36.833195
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Taftsville Chapel Mennonite Fellowship",
        "URL": "https://taftsvillechapel.org/",
        "Location": "Woodstock, TN",
        "Address": "121 Happy Valley Rd",
        "Commitment": "Exploring",
        "JoinDate": "",
        "Contact(s)": "Heather Wolfe, Steve McCloskey (pastor)",
        "Email Contact": "Heather.wolfe@hotmail.com",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.343764,
          35.820245
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Community Mennonite Church of Lancaster",
        "URL": "https://communitymennonite.org/",
        "Location": "Lancaster, PA",
        "Address": "328 West Orange Street",
        "Commitment": "Exploring",
        "JoinDate": "",
        "Contact(s)": "Marty Kelley, Chair of Dismantling Racism Committee; Susan Gascho-Cooke (Pastor)",
        "Email Contact": "martykelley4plus@gmail.com, susan@communitymennonite.org",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.311748,
          40.038764
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "First Mennonite",
        "URL": "https://www.mennolink.org/cong/first/",
        "Location": "Mountain Lake, MN",
        "Address": "305 7th St N",
        "Commitment": "Exploring",
        "JoinDate": "",
        "Contact(s)": "Dave Bucklin",
        "Email Contact": "djbucklin@frontiernet.net, (?) kroekerwes@gmail.com, johnstoesz1@gmail.com",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.934735,
          43.938453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Emmanuel Mennonite Church",
        "URL": "https://gainesvillemennonites.org/",
        "Location": "Gainesville, FL",
        "Address": "1236 NW 18th Ave",
        "Commitment": "Exploring",
        "JoinDate": "",
        "Contact(s)": "Richard MacMaster",
        "Email Contact": "rmacmast@ufl.edu",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.338415,
          29.668633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Rochester Mennonite Fellowship",
        "URL": "https://rochestermennonite.org/",
        "Location": "Rochester, MN",
        "Address": "111 Hillside Avenue",
        "Commitment": "Exploring",
        "JoinDate": "",
        "Contact(s)": "Galen Penner",
        "Email Contact": "galenpenner4@gmail.com ",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.471803,
          44.023496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Community House Church, DC",
        "URL": "https://communityhousechurch.org/",
        "Location": "Washington DC",
        "Address": "",
        "Commitment": "Exploring",
        "JoinDate": "",
        "Contact(s)": "Kendra Moesle",
        "Email Contact": "kendra.nissley@gmail.com, maryhw@gmail.com, claassenroger@gmail.com",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.014683,
          38.912097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Columbus Mennonite Church",
        "URL": "https://www.columbusmennonite.org/",
        "Location": "Columbus, OH",
        "Address": "35 Oakland Park Avenue",
        "Commitment": "Exploring",
        "JoinDate": "",
        "Contact(s)": "Adam Glass, Joel Miller (Pastor)",
        "Email Contact": "joel@columbusmennonite.org",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.01519,
          40.03297
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Fellowship of Hope Mennonite Church",
        "URL": "http://fellowshipofhope.org/",
        "Location": "Elkhart, IN",
        "Address": "1618 South Sixth Street",
        "Commitment": "Early Stages",
        "JoinDate": "",
        "Contact(s)": "Suella Gerber, Andrew Hudson, Mary Schertz, Keith Kingsley",
        "Email Contact": "arhudson@ambs.edu, mschertz@ambs.edu, fohchurch@gmail.com, quitoana@gmail.com ",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.967494,
          41.682182
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Community ": "Benton Mennonite Church",
        "URL": "https://bentonchurch.org/",
        "Location": "Goshen, IN",
        "Address": "15350 County Road 44",
        "Commitment": "Early Stages",
        "JoinDate": "",
        "Contact(s)": "Rich Meyer",
        "Email Contact": "richhmeyer@gmail.com",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": "",
        "IndigenousLands10": ""
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
        "Community ": "Bethel College Mennonite Church",
        "URL": "https://bethelcollegemennonitechurch.org/",
        "Location": "North Newton, KS",
        "Address": "2600 College Ave",
        "Commitment": "Early Stages",
        "JoinDate": "",
        "Contact(s)": "Raylene Penner",
        "Email Contact": "rhpenner@sbcglobal.net",
        "IndigenousLandsRecognized": "",
        "IndigenousLands1": "",
        "IndigenousLands2": "",
        "IndigenousLands3": "",
        "IndigenousLands4": "",
        "IndigenousLands5": "",
        "IndigenousLands6": "",
        "IndigenousLands7": "",
        "IndigenousLands8": "",
        "IndigenousLands9": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.341687,
          38.072899
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
  var nations = feature.properties.IndigenousLandsRecognized;


    if (feature.properties) {
      //format html popup content
      popupContent += "<h3><a href='" + website + "'>" + congregation + "</a></h3> <p> Indigenous Neighbors: " + nations + "</p>" ;
    };
    layer.bindPopup(popupContent);
};

document.addEventListener('DOMContentLoaded',createMap)
