// import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

// function Map(){
//     return(
//         <GoogleMap 
//         defaultZoom={10}
//         defaultCenter={{lat:32.085300, lng: 34.781769 }}
//         />
//     );
// }

// const WrappedMap= withScriptjs(withGoogleMap(Map));

// function GoogleMaps(){
//     return (
//         <div>
//         <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
//         loadingElement={<div style={{height: "100%"}}/>}
//         containerElement={<div style={{height: "100%"}}/>}
//         mapElement={<div style={{height: "100%"}}/>}
//         />
//        </div>
//     );
// }

// export default GoogleMaps;

import BingMapsReact from "bingmaps-react";


function Map(){

    // const pushPin = {
    //     center: {
    //       latitude: 32.073397,
    //       longitude: 34.783779,
    //     },
    //     options: {
    //       title: "Tel-Aviv brunch",
    //     },
    //   }
      
      const pushPins = [{ center: { latitude: 32.073397, longitude: 34.783779, }, options: { title: "Tel-Aviv brunch",} }, 
      { center: { latitude: 32.9646301, longitude: 35.502451, }, options: { title: "Tzfat brunch",}}];
      

return(<BingMapsReact bingMapsKey="Av_z0K6bBFN0UdYRrrERVL55mmjUkQRQwJ2MXkWv2CHfXpENH_-kBtHzBtAfvc_w"
pushPins={pushPins}
    height="500px"
    mapOptions={{
        navigationBarMode: "square",
      }}
      width="900px"
      viewOptions={{
        center: { latitude: 32.085300, longitude: 34.781769 },
        mapTypeId: "canvasLight",
      }}
      />);
}

export default Map;