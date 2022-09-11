import React, { useEffect, useRef } from "react";
// import Map, { GeolocateControl } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
const MapEmbedded = (props) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2F0dmlreWFkYXYiLCJhIjoiY2w3dzlsdjAzMGpkbDNubXYyY2pudGlsdSJ9.yV1mnoKIv-oMkXeEg64L-Q";
  const { lat, lng } = props.latlon;
  const lat1 = parseFloat(lat);
  const lng1 = parseFloat(lng);

  //   console.log(lat, lng);
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng1, lat1],
      zoom: 5,
    });
    new mapboxgl.Marker({ color: "red" }).setLngLat([lng1, lat1]).addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "80vh" }} />;
};
export default MapEmbedded;
