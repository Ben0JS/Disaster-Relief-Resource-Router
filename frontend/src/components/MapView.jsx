import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


// Fix default marker icon issues

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
// Component to adjust map view dynamically
const MapBounds = ({ markers }) => {
  const map = useMap();
  useEffect(() => {
    if (markers.length === 0) return;
    const bounds = L.latLngBounds(markers.map(m => [m.latitude, m.longitude]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [markers, map]);
  return null;
};

const MapView = ({ resources }) => {
  const markers = resources.filter(r => r.latitude && r.longitude);

  return (
    <div style={{ height: "400px", margin: "20px 0" }}>
      {markers.length === 0 ? (
        <p style={{ textAlign: "center", paddingTop: "180px" }}>No resources to show on map</p>
      ) : (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          {markers.map(res => (
            <Marker key={res._id} position={[res.latitude, res.longitude]}>
              <Popup>
                <strong>{res.type}</strong><br />
                {res.description}<br />
                {res.location}<br />
                {res.contact}
              </Popup>
            </Marker>
          ))}
          <MapBounds markers={markers} />
        </MapContainer>
      )}
    </div>
  );
};

export default MapView;
