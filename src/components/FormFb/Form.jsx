// import React, { useState, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import axios from "axios";
// import SearchLocationInput from "./SearchPlaces";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const initialCenter = {
//   lat: 25.3837948,
//   lng: 78.3329289,
// };

// const targetZoom = 19;
// const initialZoom = 5;

// const Form = () => {
//   const [searchBarMarker, setSearchBarMarker] = useState(null);
//   const [map, setMap] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [userLocation, setUserLocation] = useState(null);
//   const [activeMarker, setActiveMarker] = useState(null);

//   const { isLoaded, loadError } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//     libraries: ["places"],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/addresses");
//         setMarkers(response.data);
//       } catch (error) {
//         console.error("Error fetching data from API:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const smoothZoom = (map, max, cnt) => {
//     if (cnt >= max) {
//       return;
//     } else {
//       const zoomListener = window.google.maps.event.addListener(
//         map,
//         "zoom_changed",
//         () => {
//           window.google.maps.event.removeListener(zoomListener);
//           smoothZoom(map, max, cnt + 1);
//         }
//       );

//       setTimeout(() => {
//         map.setZoom(cnt);
//       }, 80);
//     }
//   };

//   const handlePlaceSelect = (latLng) => {
//     if (map) {
//       smoothZoom(map, targetZoom, map.getZoom());
//       setUserLocation(latLng);
//     }
//   };

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };

//             smoothZoom(map, targetZoom, map.getZoom());
//             setUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//       }
//     }
//   };

//   return (
//     <div>
//       <SearchLocationInput
//         setSelectedLocation={setUserLocation}
//         handlePlaceSelect={handlePlaceSelect}
//       />
//       <button onClick={handleLocateMe}>My Location</button>
//       {isLoaded && (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={initialCenter}
//           zoom={initialZoom}
//           onLoad={onLoad}
//           onClick={() => setActiveMarker(null)}
//         >
//           {userLocation && (
//             <Marker
//               position={userLocation}
//               title="Your Location"
//               icon={{
//                 path: window.google.maps.SymbolPath.CIRCLE,
//                 scale: 9,
//                 strokeColor: "#FFFFFF",
//                 fillColor: "#0093FA",
//                 fillOpacity: 1,
//                 strokeWeight: 2,
//                 animation: window.google.maps.Animation.BOUNCE,
//               }}
//             />
//           )}
//           {/* {searchBarMarker && (
//             <Marker
//               position={searchBarMarker.getPosition()}
//               icon={{
//                 url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                 scaledSize: new window.google.maps.Size(50, 50),
//               }}
//             />
//           )} */}
//           {markers.map(({ id, position }) => (
//             <Marker
//               key={id}
//               position={position}
//               onClick={() => setActiveMarker(id)}
//             />
//           ))}
//         </GoogleMap>
//       )}
//     </div>
//   );
// };

// export default Form;














// // Form.jsx

// import React, { useState, useEffect } from "react";
// import { GoogleMap, InfoWindowF, useJsApiLoader, Marker, MarkerF } from "@react-google-maps/api";
// import axios from "axios";
// import SearchLocationInput from "./SearchPlaces";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const initialCenter = {
//   lat: 25.3837948,
//   lng: 78.3329289,
// };

// const targetZoom = 19;
// const initialZoom = 5;

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });
//   const [searchBarMarker, setSearchBarMarker] = useState(null);
//   const [map, setMap] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [userLocation, setUserLocation] = useState(null);
//   const [activeMarker, setActiveMarker] = useState(null);
  
//   const handleActiveMarker = (marker) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };
//   const handlePlaceSelect = (latLng) => {
//     if (map) {
//       smoothZoom(map, targetZoom, map.getZoom());
//       setUserLocation(latLng);
//     }
//   };

//   const [showLocationModal, setShowLocationModal] = useState(false);
//   const [showSavedLocations, setShowSavedLocations] = useState(false);
//   const [showVenues, setShowVenues] = useState(false);
//   const handleToggleVenues = () => {
//     setShowVenues((prevShowVenues) => !prevShowVenues);
//   };
//   const handleSetSearchBarMarker = (latLng) => {
//     setSearchBarMarker(
//       new window.google.maps.Marker({
//         position: latLng,
//         icon: {
//           url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//           scaledSize: new window.google.maps.Size(50, 50), // Adjust size as needed
//         },
//       })
//     );
//   };
//   useEffect(() => {
//     if (map && userLocation) {
//       map.panTo(userLocation);
//     }
//   }, [map, userLocation]);

//   const onLoad = (map) => {
//     setMap(map);
//   };
//   useEffect(() => {
//     // Fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/addresses");
//         setMarkers(response.data);
//         console.log("api", response.data); // Assuming the API returns an array of markers
//       } catch (error) {
//         console.error("Error fetching data from API:", error);
//       }
//     };

//     fetchData(); // Call the fetch function when the component mounts
//   }, []); // Empty dependency array to run the effect only once when the component mounts

//   const smoothZoom = (map, max, cnt) => {
//     if (cnt >= max) {
//       return;
//     } else {
//       const zoomListener = window.google.maps.event.addListener(map, "zoom_changed", () => {
//         window.google.maps.event.removeListener(zoomListener);
//         smoothZoom(map, max, cnt + 1);
//       });

//       setTimeout(() => {
//         map.setZoom(cnt);
//       }, 80);
//     }
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };

//             smoothZoom(map, targetZoom, map.getZoom());
//             setUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//             setShowLocationModal(true);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//         setShowLocationModal(true);
//       }
//     }
//   };

//   const handleAllowLocation = () => {
//     setShowLocationModal(false);
//     window.location.href = "chrome://settings/content/location";
//   };

// //   const handleShowSavedLocations = () => {
// //     setShowSavedLocations(true);
// //   };

//   return (
//     <div>
//       <SearchLocationInput setSelectedLocation={setUserLocation} handlePlaceSelect={handlePlaceSelect}/>
//       <button onClick={handleLocateMe}>My Location</button>
//       <button onClick={handleToggleVenues}>
//         {showVenues ? "Hide Venues" : "Show Venues"}
//       </button>
//       {showLocationModal && (
//         <div className="location-modal">
//           <p>This site requires access to your location. Please enable location services.</p>
//           <button onClick={handleAllowLocation}>Allow Location</button>
//         </div>
//       )}
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={initialCenter}
//           zoom={initialZoom}
//           onLoad={onLoad}
//           onClick={() => setActiveMarker(null)}
//         >
//           {userLocation && (
//             <Marker
//               position={userLocation}
//               title="Your Location"
//               icon={{
//                 path: window.google.maps.SymbolPath.CIRCLE,
//                 scale: 9,
//                 strokeColor: "#FFFFFF",
//                 fillColor: "#0093FA",
//                 fillOpacity: 1,
//                 strokeWeight: 2,
//                 animation: window.google.maps.Animation.BOUNCE,
//               }}
//             />
//           )}
//           {searchBarMarker && (
//             <Marker
//               position={searchBarMarker.getPosition()}
//               icon={{
//                 url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                 scaledSize: new window.google.maps.Size(50, 50), // Adjust size as needed
//               }}
//             />
//           )}
//           {showVenues &&
//             markers.map(({ id, name, position }) => (
//               <MarkerF
//                 key={id}
//                 position={position}
//                 onClick={() => handleActiveMarker(id)}
//                 icon={{
//                     url:"https://media1.giphy.com/media/ocZ1R8VAFkzR6CAgMS/giphy.gif?cid=ecf05e47ug0b3bwwhnrv2k2ucgmeon6g645zp5q6gncl6yt0&ep=v1_gifs_related&rid=giphy.gif&ct=s",
//                     scaledSize: { width: 50, height: 50 },
//                     anchor: { x: 25, y: 25 },
//                     labelOrigin: { x: 25, y: 30 },
//                     label: {
//                       color: "white",
//                       fontWeight: "bold",
//                       text: "1",
//                   }}}
//               >
//                 {activeMarker === id ? (
//                   <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
//                     <div>
//                       <p>{name}</p>
//                     </div>
//                   </InfoWindowF>
//                 ) : null}
//               </MarkerF>
//             ))}
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;












import React, { useState, useEffect } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { GoogleMap, InfoWindowF, useJsApiLoader, Marker ,  MarkerF,} from "@react-google-maps/api";
import axios from 'axios'

const containerStyle = {
  width: "1020px",
  height: "600px",
};

const initialCenter = {
  lat: 25.3837948,
  lng: 78.3329289,
};

const targetZoom = 19;
const initialZoom = 5;

const Form = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
 
  const [showLocationModal, setShowLocationModal] = useState(false);
  // const [showSavedLocations, setShowSavedLocations] = useState(false);
  const [showVenues, setShowVenues] = useState(false);
  const handleToggleVenues = () => {
    setShowVenues((prevShowVenues) => !prevShowVenues);
  };
  useEffect(() => {
    if (map && userLocation) {
      map.panTo(userLocation);
    }
  }, [map, userLocation]);

  const onLoad = (map) => {
    setMap(map);
  };
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/addresses");
        setMarkers(response.data); 
        console.log("api",response.data)// Assuming the API returns an array of markers
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const smoothZoom = (map, max, cnt) => {
    if (cnt >= max) {
      return;
    } else {
      const zoomListener = window.google.maps.event.addListener(map, 'zoom_changed', () => {
        window.google.maps.event.removeListener(zoomListener);
        smoothZoom(map, max, cnt + 1);
      });

      setTimeout(() => {
        map.setZoom(cnt);
      }, 80);
    }
  };

  const handleLocateMe = () => {
    if (map) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const newUserLocation = { lat: latitude, lng: longitude };

            smoothZoom(map, targetZoom, map.getZoom());
            setUserLocation(newUserLocation);
          },
          (error) => {
            console.error("Error getting user location:", error);
            setShowLocationModal(true);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser");
        setShowLocationModal(true);
      }
    }
  };

  const handleAllowLocation = () => {
    setShowLocationModal(false);
    window.location.href = "chrome://settings/content/location";
  };

  // const handleShowSavedLocations = () => {
  //   setShowSavedLocations(true);
  // };

  return (
    <div>
      <button onClick={handleLocateMe}>My Location <LocationOnOutlinedIcon/></button>
      <button onClick={handleToggleVenues} className="w-100">
      {showVenues ? (
    <>
      Hide Venues <VisibilityOffOutlinedIcon />
    </>
  ) : (
    <>
      Show Venues <VisibilityOutlinedIcon />
    </>
  )} 
      </button> 
      
      {showLocationModal && (
        <div className="location-modal">
          <p>
            This site requires access to your location. Please enable location services.
          </p>
          <button onClick={handleAllowLocation}>Allow Location</button>
        </div>
      )}
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initialCenter}
          zoom={initialZoom}
          onLoad={onLoad}
          onClick={() => setActiveMarker(null)}
        >
          {userLocation && (
            <Marker
              position={userLocation}
              title="Your Location"
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 9,
                strokeColor: "#FFFFFF",
                fillColor: "#0093FA",
                fillOpacity: 1,
                strokeWeight: 2,
                animation: window.google.maps.Animation.BOUNCE,
              }}
            />
          )}
         {showVenues &&
        markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon={{
                    url:"https://media1.giphy.com/media/ocZ1R8VAFkzR6CAgMS/giphy.gif?cid=ecf05e47ug0b3bwwhnrv2k2ucgmeon6g645zp5q6gncl6yt0&ep=v1_gifs_related&rid=giphy.gif&ct=s",
                    scaledSize: { width: 50, height: 50 },
                    anchor: { x: 25, y: 25 },
                    labelOrigin: { x: 25, y: 30 },
                    label: {
                      color: "white",
                      fontWeight: "bold",
                      text: "1",
                  }}}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
      ) : (
        <div>Loading map...</div>
      )}
    </div>
  );
};

export default Form;












// import React, { useState, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const initialCenter = {
//   lat: 25.3837948,
//   lng: 78.3329289,
// };

// const targetZoom = 19;
// const initialZoom = 5;

// const customMarkerIconUrl = "../../assets/location-removebg-preview.png";

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const [showLocationModal, setShowLocationModal] = useState(false);

//   useEffect(() => {
//     if (map && userLocation) {
//       map.panTo(userLocation);
//     }
//   }, [map, userLocation]);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const smoothZoom = (map, max, cnt) => {
//     if (cnt >= max) {
//       return;
//     } else {
//       const zoomListener = window.google.maps.event.addListener(map, 'zoom_changed', () => {
//         window.google.maps.event.removeListener(zoomListener);
//         smoothZoom(map, max, cnt + 1);
//       });

//       setTimeout(() => {
//         map.setZoom(cnt);
//       }, 80);
//     }
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };

//             smoothZoom(map, targetZoom, map.getZoom());
//             setUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//             setShowLocationModal(true);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//         setShowLocationModal(true);
//       }
//     }
//   };

//   const handleAllowLocation = () => {
//     setShowLocationModal(false);
//     // You can redirect the user to their browser settings to enable location services
//     window.location.href = "chrome://settings/content/location";
//   };

//   return (
//     <div>
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {showLocationModal && (
//         <div className="location-modal">
//           <p>
//             This site requires access to your location. Please enable location services.
//           </p>
//           <button onClick={handleAllowLocation}>Allow Location</button>
//         </div>
//       )}
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={initialCenter}
//           zoom={initialZoom}
//           onLoad={onLoad}
//         >
//           {userLocation && (
//             <Marker
//               position={userLocation}
//               title="Your Location"
//               icon={{
//                 path: window.google.maps.SymbolPath.CIRCLE,
//                 scale: 9,
//                 strokeColor: "#FFFFFF",
//                 fillColor: "#0093FA",
//                 fillOpacity: 1,
//                 strokeWeight: 2,
//                 animation: window.google.maps.Animation.BOUNCE,
//               }}
//             />
//           )}
//           {savedAddresses.map((address, index) => (
//             <Marker
//               key={index}
//               position={{ lat: address.lat, lng: address.lng }}
//               title={address.name}
//               icon={{
//                 path: window.google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
//                 scale: 1,
//                 strokeColor: "#FF0000",
//                 fillColor: "#FF0000",
//                 fillOpacity: 1,
//                 animation: window.google.maps.Animation.DROP,
//               }}
//             />
//           ))}
//           <Marker
//             position={{ lat: 0, lng: 0 }}
//             icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
//           />
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;





// import React, { useState, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "920px",
//   height: "600px",
// };

// const initialCenter = {
//   lat: 25.3837948,
//   lng: 78.3329289,
// };

// const targetZoom = 19;
// const initialZoom = 5;

// const customMarkerIconUrl = "../../assets/location-removebg-preview.png";

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const [showLocationModal, setShowLocationModal] = useState(false);

//   useEffect(() => {
//     if (map && userLocation) {
//       map.panTo(userLocation);
//     }
//   }, [map, userLocation]);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const smoothZoom = (map, max, cnt) => {
//     if (cnt >= max) {
//       return;
//     } else {
//       const zoomListener = window.google.maps.event.addListener(map, 'zoom_changed', () => {
//         window.google.maps.event.removeListener(zoomListener);
//         smoothZoom(map, max, cnt + 1);
//       });

//       setTimeout(() => {
//         map.setZoom(cnt);
//       }, 80);
//     }
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };

//             smoothZoom(map, targetZoom, map.getZoom());
//             setUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//             setShowLocationModal(true);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//         setShowLocationModal(true);
//       }
//     }
//   };

//   const handleAllowLocation = () => {
//     setShowLocationModal(false);
//     // You can redirect the user to their browser settings to enable location services
//     window.location.href = "chrome://settings/content/location";
//   };

//   return (
//     <div>
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {showLocationModal && (
//         <div className="location-modal">
//           <p>
//             This site requires access to your location. Please enable location services.
//           </p>
//           <button onClick={handleAllowLocation}>Allow Location</button>
//         </div>
//       )}
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={initialCenter}
//           zoom={initialZoom}
//           onLoad={onLoad}
//         >
//           {userLocation && (
//             <Marker
//               position={userLocation}
//               title="Your Location"
//               icon={{
//                 path: window.google.maps.SymbolPath.CIRCLE,
//                 scale: 9,
//                 strokeColor: "#FFFFFF",
//                 fillColor: "#0093FA",
//                 fillOpacity: 1,
//                 strokeWeight: 2,
//                 animation: window.google.maps.Animation.BOUNCE,
//               }}
//             />
//           )}
//           {savedAddresses.map((address, index) => (
//             <Marker
//               key={index}
//               position={{ lat: address.lat, lng: address.lng }}
//               title={address.name}
//               icon={{
//                 path: window.google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
//                 scale: 1,
//                 strokeColor: "#FF0000",
//                 fillColor: "#FF0000",
//                 fillOpacity: 1,
//                 animation: window.google.maps.Animation.DROP,
//               }}
//             />
//           ))}
//           <Marker
//             position={{ lat: 0, lng: 0 }}
//             icon={{ url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
//           />
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;










// import React, { useState, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import axios from "axios";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const initialCenter = {
//   lat: 25.3837948,
//   lng: 78.3329289,
// };

// const targetZoom = 17;
// const initialZoom = 5;

// const customMarkerIconUrl = "../../assets/location-removebg-preview.png";

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [savedAddresses, setSavedAddresses] = useState([]);

//   useEffect(() => {
//     if (map && userLocation) {
//       map.panTo(userLocation);
//     }
//   }, [map, userLocation]);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const smoothZoom = (map, max, cnt) => {
//     if (cnt >= max) {
//       return;
//     } else {
//       const zoomListener = window.google.maps.event.addListener(map, 'zoom_changed', () => {
//         window.google.maps.event.removeListener(zoomListener);
//         smoothZoom(map, max, cnt + 1);
//       });

//       setTimeout(() => {
//         map.setZoom(cnt);
//       }, 80);
//     }
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };

//             smoothZoom(map, targetZoom, map.getZoom());
//             setUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//       }
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={initialCenter}
//           zoom={initialZoom}
//           onLoad={onLoad}
//         >
//           {userLocation && (
//             <Marker
//               position={userLocation}
//               title="Your Location"
//               icon={{
//                 path: window.google.maps.SymbolPath.CIRCLE,
//                 scale: 9,
//                 strokeColor: "#FFFFFF",
//                 fillColor: "#0093FA",
//                 fillOpacity: 1,
//                 strokeWeight: 2,
//                 animation: window.google.maps.Animation.BOUNCE, // Add BOUNCE animation
//               }}
//             />
//           )}
//           {savedAddresses.map((address, index) => (
//             <Marker
//               key={index}
//               position={{ lat: address.lat, lng: address.lng }}
//               title={address.name}
//               icon={{
//                 path: window.google.maps.SymbolPath.BACKWARD_OPEN_ARROW, // Use SymbolPath constant
//                 scale: 1,
//                 strokeColor: "#FF0000",
//                 fillColor: "#FF0000",
//                 fillOpacity: 1,
//                 animation: window.google.maps.Animation.DROP,              }}
//             />
//           ))}
//           <Marker
//             position={{ lat: 0, lng: 0 }}
//             icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
//           />
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;
















// import React, { useState, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const initialCenter = {
//   lat: 25.3837948,
//   lng: 78.3329289,
// };

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [stores, setStores] = useState([
//     { id: 1, name: "Store 1", location: { lat: 25.3837948, lng: 78.3329289 } },
//     // Add more store locations as needed
//   ]);

//   useEffect(() => {
//     if (map) {
//       const newMarker = new window.google.maps.Marker({
//         map,
//         position: initialCenter,
//         icon: {
//           path: window.google.maps.SymbolPath.CIRCLE,
//           scale: 0, // Set scale to 0 to hide the default marker
//         },
//       });

//       setMarker(newMarker);

//       const smoothZoom = (map, max, cnt) => {
//         if (cnt >= max) {
//           map.setCenter(newMarker.getPosition());
//           return;
//         } else {
//           const zoomListener = window.google.maps.event.addListener(map, 'zoom_changed', () => {
//             window.google.maps.event.removeListener(zoomListener);
//             smoothZoom(map, max, cnt + 1);
//           });

//           setTimeout(() => {
//             map.setZoom(cnt);
//           }, 80);
//         }
//       };

//       window.google.maps.event.addListener(newMarker, 'dblclick', () => {
//         map.setCenter(newMarker.getPosition());
//         smoothZoom(map, 15, map.getZoom());
//       });
//     }
//   }, [map]);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };

//             map.setCenter(newUserLocation);
//             smoothZoom(map, 15, map.getZoom());
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//       }
//     }
//   };

//   const addStoreMarkers = () => {
//     if (map) {
//       stores.forEach((store) => {
//         new window.google.maps.Marker({
//           map,
//           position: store.location,
//           title: store.name,
//         });
//       });
//     }
//   };

//   useEffect(() => {
//     if (map) {
//       addStoreMarkers();
//     }
//   }, [map, stores]);

//   return (
//     <div>
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={initialCenter}
//           zoom={5}
//           onLoad={onLoad}
//         >
//           {/* No need to display the default marker */}
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;




























// Form.jsx
// import React, { useState, useRef } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import AddressManager from "./AddressManager";
// import axios from "axios";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const center = {
//   lat: 31.9189879,
//   lng: 76.4645532,
// };

// const targetZoom = 17.5;
// const initialZoom = 15;

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const markerRef = useRef(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };
//             google.maps.event.trigger(map, "resize");
//             animateToUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//       }
//     }
//   };

//   const animateToUserLocation = (newUserLocation) => {
//     if (map) {
//       const numFrames = 60;
//       const zoomStep = (targetZoom - initialZoom) / numFrames;

//       const animateFrame = (frameCount) => {
//         const newZoom = initialZoom + frameCount * zoomStep;
//         map.setZoom(newZoom);
//         map.panTo(newUserLocation);

//         if (frameCount < numFrames) {
//           requestAnimationFrame(() => animateFrame(frameCount + 1));
//         } else {
//           setUserLocation(newUserLocation);
//         }
//       };

//       animateFrame(1);
//     }
//   };

//   const handleSaveAddress = (newAddress) => {
//     setSavedAddresses((prevAddresses) => [
//       ...prevAddresses,
//       { name: newAddress, lat: userLocation.lat, lng: userLocation.lng },
//     ]);
//   };

  
// const handleMapClick = async (event) => {
//   const clickedLocation = {
//     lat: event.latLng.lat(),
//     lng: event.latLng.lng(),
//   };

//   if (markerRef.current) {
//     // Update the position directly using the position prop
//     setSavedAddresses((prevAddresses) => [
//       ...prevAddresses,
//       { name: "Custom Location", lat: clickedLocation.lat, lng: clickedLocation.lng },
//     ]);

//     try {
//       // Fetch locations from your API
//       const response = await axios.get("http://localhost:3000/addresses");

//       // Add fetched API locations to the savedAddresses state
//       setSavedAddresses((prevAddresses) => [
//         ...prevAddresses,
//         ...response.data,
//       ]);
//     } catch (error) {
//       console.error("Error fetching API data:", error);
//     }
//   }
// };
  

// const handleSaveCustomLocation = async () => {
//   const customLocation = savedAddresses[savedAddresses.length - 1];

//   if (customLocation) {  // Check if customLocation is defined
//     try {
//       const response = await axios.post("http://localhost:3000/addresses", {
//         name: customLocation.name,
//         lat: customLocation.lat,
//         lng: customLocation.lng,
//       });

//       console.log("Address saved successfully:", response.data);
//     } catch (error) {
//       console.error("Error saving address:", error);
//     }
//   } else {
//     console.warn("No custom location to save.");  // Log a warning if customLocation is undefined
//   }
// };

  

//   return (
//     <div>
//       <AddressManager onSaveAddress={handleSaveAddress} />
//       <button onClick={handleLocateMe}>Locate Me</button>
//       <button onClick={handleSaveCustomLocation}>Save Location Address</button>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={initialZoom}
//           onLoad={onLoad}
//           onClick={handleMapClick}
//         >
//           {userLocation && (
//             <Marker position={userLocation} title="Your Location" />
//           )}
//           {savedAddresses.map((address, index) => (
//             <Marker
//               key={index}
//               position={{ lat: address.lat, lng: address.lng }}
//               title={address.name}
//             />
//           ))}
//           <Marker
//             ref={markerRef}
//             position={{ lat: 0, lng: 0 }}
//             icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
//           />
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;




// Form.jsx
// import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import AddressManager from "./AddressManager";
// import axios from "axios";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const center = {
//   lat: 31.9189879,
//   lng: 76.4645532,
// };

// const targetZoom = 17.5;
// const initialZoom = 15;

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [savedAddresses, setSavedAddresses] = useState([]);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };
//             google.maps.event.trigger(map, "resize");
//             animateToUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//       }
//     }
//   };

//   const animateToUserLocation = (newUserLocation) => {
//     if (map) {
//       const numFrames = 60;
//       const zoomStep = (targetZoom - initialZoom) / numFrames;

//       const animateFrame = (frameCount) => {
//         const newZoom = initialZoom + frameCount * zoomStep;
//         map.setZoom(newZoom);
//         map.panTo(newUserLocation);

//         if (frameCount < numFrames) {
//           requestAnimationFrame(() => animateFrame(frameCount + 1));
//         } else {
//           setUserLocation(newUserLocation);
//         }
//       };

//       animateFrame(1);
//     }
//   };

//   const handleSaveAddress = async (newAddress) => {
//     try {
//       const response = await axios.post("http://localhost:3001/addresses", {
//         name: newAddress,
//         lat: userLocation.lat,
//         lng: userLocation.lng,
//       });

//       console.log("Address saved:", response.data);
//       setSavedAddresses((prevAddresses) => [
//         ...prevAddresses,
//         response.data, // Assuming the server returns the saved address
//       ]);
//     } catch (error) {
//       console.error("Error saving address:", error);
//     }
//   };

//   return (
//     <div>
//       <AddressManager onSaveAddress={handleSaveAddress} />
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={initialZoom}
//           onLoad={onLoad}
//         >
//           {userLocation && (
//             <Marker position={userLocation} title="Your Location" />
//           )}
//           {savedAddresses.map((address, index) => (
//             <Marker
//               key={index}
//               position={{ lat: address.lat, lng: address.lng }}
//               title={address.name}
//             />
//           ))}
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;




// // Form.jsx
// import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import AddressManager from "./AddressManager";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const center = {
//   lat: 31.9189879,
//   lng: 76.4645532,
// };

// const targetZoom = 17.5;
// const initialZoom = 15;

// const Form = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [savedAddresses, setSavedAddresses] = useState([]);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };
//             google.maps.event.trigger(map, "resize");
//             animateToUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//       }
//     }
//   };

//   const animateToUserLocation = (newUserLocation) => {
//     if (map) {
//       const numFrames = 60;
//       const zoomStep = (targetZoom - initialZoom) / numFrames;

//       const animateFrame = (frameCount) => {
//         const newZoom = initialZoom + frameCount * zoomStep;
//         map.setZoom(newZoom);
//         map.panTo(newUserLocation);

//         if (frameCount < numFrames) {
//           requestAnimationFrame(() => animateFrame(frameCount + 1));
//         } else {
//           setUserLocation(newUserLocation);
//         }
//       };

//       animateFrame(1);
//     }
//   };

//   const handleSaveAddress = async   (newAddress) => {
//     setSavedAddresses((prevAddresses) => [
//       ...prevAddresses,
//       { name: newAddress, lat: userLocation.lat, lng: userLocation.lng },
//     ]);
//   };

//   return (
//     <div>
//       <AddressManager onSaveAddress={handleSaveAddress} />
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={initialZoom}
//           onLoad={onLoad}
//         >
//           {userLocation && (
//             <Marker position={userLocation} title="Your Location" />
//           )}
//           {savedAddresses.map((address, index) => (
//             <Marker
//               key={index}
//               position={{ lat: address.lat, lng: address.lng }}
//               title={address.name}
//             />
//           ))}
//         </GoogleMap>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// export default Form;
















// import React, { useState, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const center = {
//   lat: 31.9189879,
//   lng: 76.4645532,
// };

// const MapWithMarkers = ({ savedAddresses }) => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "YOUR_API_KEY",
//   });

//   const [map, setMap] = useState(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   useEffect(() => {
//     // Function to add markers for saved addresses
//     const addMarkersForSavedAddresses = () => {
//       if (map && savedAddresses) {
//         savedAddresses.forEach((address) => {
//           // Use Geocoding service or your backend to get latitude and longitude for the address
//           const markerPosition = { lat: address.lat, lng: address.lng };

//           new window.google.maps.Marker({
//             position: markerPosition,
//             map: map,
//             title: address.name,
//             icon: "URL_TO_YOUR_ICON",
//           });
//         });
//       }
//     };

//     // Add markers when the map and saved addresses are available
//     if (isLoaded && map && savedAddresses) {
//       addMarkersForSavedAddresses();
//     }
//   }, [isLoaded, map, savedAddresses]);

//   return (
//     <div>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={15}
//           onLoad={onLoad}
//         />
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </div>
//   );
// };

// const AddressSelector = ({ onSave }) => {
//   const [selectedAddress, setSelectedAddress] = useState("");

//   const handleSelect = () => {
//     // Assume you have a backend service to geocode the selected address and get its latitude and longitude
//     const selectedLatLng = { lat: /* latitude */, lng: /* longitude */ };

//     // Save the address and its coordinates
//     onSave({
//       name: selectedAddress,
//       lat: selectedLatLng.lat,
//       lng: selectedLatLng.lng,
//     });

//     // Clear the selection after saving
//     setSelectedAddress("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={selectedAddress}
//         onChange={(e) => setSelectedAddress(e.target.value)}
//         placeholder="Enter address"
//       />
//       <button onClick={handleSelect}>Save Address</button>
//     </div>
//   );
// };

// const App = () => {
//   const [savedAddresses, setSavedAddresses] = useState([]);

//   const handleSaveAddress = (newAddress) => {
//     setSavedAddresses((prevAddresses) => [...prevAddresses, newAddress]);
//   };

//   return (
//     <div>
//       <AddressSelector onSave={handleSaveAddress} />
//       <MapWithMarkers savedAddresses={savedAddresses} />
//     </div>
//   );
// };

// export default App;











// import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "1020px",
//   height: "600px",
// };

// const center = {
//   lat: 31.9189879,
//   lng: 76.4645532,
// };

// const targetZoom = 17.5;
// const initialZoom = 15;

// const MapContainer = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY",
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const handleLocateMe = () => {
//     if (map) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             const newUserLocation = { lat: latitude, lng: longitude };
//             // Preload the map tiles
//             google.maps.event.trigger(map, "resize");
//             animateToUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser");
//       }
//     }
//   };

//   const animateToUserLocation = (newUserLocation) => {
//     if (map) {
//       const numFrames = 60;
//       const zoomStep = (targetZoom - initialZoom) / numFrames;

//       const animateFrame = (frameCount) => {
//         const newZoom = initialZoom + frameCount * zoomStep;
//         map.setZoom(newZoom);
//         map.panTo(newUserLocation);
      
//         if (frameCount < numFrames) {
//           requestAnimationFrame(() => animateFrame(frameCount + 1));
//         } else {
//           setUserLocation(newUserLocation);
//         }
//       };

//       animateFrame(1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={initialZoom}
//           onLoad={onLoad}
//         >
//           {userLocation && (
//             <Marker position={userLocation} title="Your Location" />
//           )}
//         </GoogleMap>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// export default MapContainer;



// *******LOCATE ME BUTTON ON MAP********
// import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '720px',
//   height: '400px'
// };

// const center = {
//   lat: 30.7362228,
//   lng: 76.7126688
// };

// const MapContainer = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY"
//   });

//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);

//   const onLoad = map => {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   };

//   const handleLocateMe = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ lat: latitude, lng: longitude });
//           map.panTo({ lat: latitude, lng: longitude });
//         },
//         (error) => {
//           console.error("Error getting user location:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser");
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLocateMe}>Locate Me</button>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={14}
//           onLoad={onLoad}
//         >
//           {userLocation && (
//             <Marker position={userLocation} title="Your Location" />
//           )}
//         </GoogleMap>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// export default MapContainer;






















// *******SIMPLE MAP********
// import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// const containerStyle = {
//   width: '720px',
//   height: '400px'
// };

// const center = {
//   lat: 30.7069015,
//   lng: 76.6851314
// };
// const MapContainer = ()=>{
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY"
//   })

// const [map, setMap] = useState(null)

// const onLoad = map => {
//   const bounds = new window.google.maps.LatLngBounds(center);
//   map.fitBounds(bounds);
//   setMap(map);
// };

 

  
//   return(
//   <div>
//     {isLoaded ? <GoogleMap
//     mapContainerStyle={containerStyle}
//     center={center}
//     zoom={20}
//     onLoad={onLoad}
//   >
//   </GoogleMap>
//   :<></>
//     }

//   </div>
//   )
  
// }

// export default MapContainer;