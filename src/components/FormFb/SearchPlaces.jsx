// import React, { useEffect, useRef, useState } from "react";

// const SearchLocationInput = ({ setSelectedLocation, handlePlaceSelect }) => {
//   const [query, setQuery] = useState("");
//   const autoCompleteRef = useRef(null);

//   useEffect(() => {
//     const loadScript = (url, callback) => {
//       const script = document.createElement("script");
//       script.type = "text/javascript";

//       script.onload = callback;

//       script.src = url;
//       document.getElementsByTagName("head")[0].appendChild(script);
//     };

//     const handleScriptLoad = () => {
//       const autoComplete = new window.google.maps.places.Autocomplete(
//         autoCompleteRef.current,
//         {
//           componentRestrictions: { country: "IN" },
//         }
//       );

//       autoComplete.addListener("place_changed", () => {
//         const addressObject = autoComplete.getPlace();

//         const query = addressObject.formatted_address;
//         setQuery(query);

//         const latLng = {
//           lat: addressObject?.geometry?.location?.lat(),
//           lng: addressObject?.geometry?.location?.lng(),
//         };

//         setSelectedLocation(latLng);
//         handlePlaceSelect(latLng);
//       });
//     };

//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY&libraries=places`,
//       handleScriptLoad
//     );
//   }, [setSelectedLocation, handlePlaceSelect]);

//   return (
//     <div className="search-location-input">
//       <label>Type in your Address or postcode</label>
//       <input
//         ref={autoCompleteRef}
//         className="form-control"
//         onChange={(event) => setQuery(event.target.value)}
//         placeholder="Search Places ..."
//         value={query}
//       />
//     </div>
//   );
// };

// export default SearchLocationInput;





















// // SearchLocationInput.jsx

import React, { useEffect, useRef, useState } from "react";

const SearchLocationInput = ({ setSelectedLocation, handlePlaceSelect  }) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    const loadScript = (url, callback) => {
      let script = document.createElement("script");
      script.type = "text/javascript";

      if (script.readyState) {
        script.onreadystatechange = function () {
          if (
            script.readyState === "loaded" ||
            script.readyState === "complete"
          ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = () => callback();
      }

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    };

    const handleScriptLoad = () => {
        const autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef.current,
            {
              componentRestrictions: { country: "IN" },
            }
          );
    
          autoComplete.addListener("place_changed", () => {
            const addressObject = autoComplete.getPlace();
    
            const query = addressObject.formatted_address;
            setQuery(query);
    
            const latLng = {
              lat: addressObject?.geometry?.location?.lat(),
              lng: addressObject?.geometry?.location?.lng(),
            };
    
            setSelectedLocation(latLng);
            handlePlaceSelect(latLng);
          });
        };
    
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY&libraries=places`,
          () => handleScriptLoad(setQuery, autoCompleteRef)
        );
      }, [setSelectedLocation, handlePlaceSelect]);

  return (
    <div className="search-location-input">
      <label>Type in your Address or postcode</label>
      <input
        ref={autoCompleteRef}
        className="form-control"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Places ..."
        value={query}
      />
    </div>
  );
};

export default SearchLocationInput;





















// import React, { useEffect, useRef, useState } from "react";

// let autoComplete;

// const loadScript = (url, callback) => {
//   let script = document.createElement("script");
//   script.type = "text/javascript";

//   if (script.readyState) {
//     script.onreadystatechange = function () {
//       if (script.readyState === "loaded" || script.readyState === "complete") {
//         script.onreadystatechange = null;
//         callback();
//       }
//     };
//   } else {
//     script.onload = () => callback();
//   }

//   script.src = url;
//   document.getElementsByTagName("head")[0].appendChild(script);
// };

// const SearchLocationInput = ({ setSelectedLocation }) => {
//   const [query, setQuery] = useState("");
//   const autoCompleteRef = useRef(null);

//   const handleScriptLoad = (updateQuery, autoCompleteRef) => {
//     autoComplete = new window.google.maps.places.Autocomplete(
//       autoCompleteRef.current,
//       {
//         // types: ["(cities)"],
//         componentRestrictions: { country: "IN" },
//       }
//     );

//     autoComplete.addListener("place_changed", () => {
//       handlePlaceSelect(updateQuery);
//     });
//   };

//   const handlePlaceSelect = async (updateQuery) => {
//     const addressObject = await autoComplete.getPlace();

//     const query = addressObject.formatted_address;
//     updateQuery(query);
//     console.log({ query });

//     const latLng = {
//       lat: addressObject?.geometry?.location?.lat(),
//       lng: addressObject?.geometry?.location?.lng(),
//     };

//     console.log({ latLng });
//     setSelectedLocation(latLng);
//   };

//   useEffect(() => {
//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=AIzaSyDNEDOcsDRacIYtmMG_PuCE0-9bPckqigY&libraries=places`,
//       () => handleScriptLoad(setQuery, autoCompleteRef)
//     );
//   }, []);

//   return (
//     <div className="search-location-input">
//       <label>Type in your suburb or postcode</label>
//       <input
//         ref={autoCompleteRef}
//         className="form-control"
//         onChange={(event) => setQuery(event.target.value)}
//         placeholder="Search Places ..."
//         value={query}
//       />
//     </div>
//   );
// };

// export default SearchLocationInput;