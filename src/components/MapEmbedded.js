import React, { useEffect, useRef } from "react";
// import Map, { GeolocateControl } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
//Apparently adding '!' sign helps mapbox loading. Without '!', mapbox doesn't load
const MapEmbedded = (props) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2F0dmlreWFkYXYiLCJhIjoiY2w3dzlsdjAzMGpkbDNubXYyY2pudGlsdSJ9.yV1mnoKIv-oMkXeEg64L-Q";
  const mapContainer = useRef();

  useEffect(() => {
    const { lat, lng } = props.latlon;
    const lat1 = parseFloat(lat);
    const lng1 = parseFloat(lng);

    //   console.log(lat, lng);
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng1, lat1],
      zoom: 5,
    });
    new mapboxgl.Marker({ color: "red" }).setLngLat([lng1, lat1]).addTo(map);

    return () => map.remove();
  }, [props.latlon]);

  return <div ref={mapContainer} style={{ width: "100%", height: "80vh" }} />;
};
export default MapEmbedded;
