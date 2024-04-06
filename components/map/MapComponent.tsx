import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapComponentProps {
  location: {
    lat: number;
    lng: number;
  };
}

const MapComponent: React.FC<MapComponentProps> = ({ location }) => {
  return (
    <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat, location.lng]}>
        <Popup>Stargate Academy is here. Visit us!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
