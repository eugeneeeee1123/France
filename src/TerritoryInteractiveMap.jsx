import React, { useEffect } from 'react';
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';

function MapViewController({ mode }) {
  const map = useMap();

  useEffect(() => {
    if (mode === 'metropole') {
      map.flyTo([46.6, 2.4], 6, { duration: 1.1 });
    } else {
      map.flyTo([12, 15], 2, { duration: 1.1 });
    }
  }, [map, mode]);

  return null;
}

export default function TerritoryInteractiveMap({ mode, cities, markerColor, onSelect }) {
  return (
    <MapContainer center={[46.6, 2.4]} zoom={6} minZoom={2} maxZoom={12} zoomControl scrollWheelZoom>
      <MapViewController mode={mode} />
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map(city => (
        <CircleMarker
          key={`${city.fr}-${city.lat}`}
          center={[city.lat, city.lng]}
          radius={city.type === 'capital' ? 9 : city.type === 'overseas' ? 7 : 6}
          pathOptions={{
            color: markerColor(city.type),
            fillColor: markerColor(city.type),
            fillOpacity: 0.86,
            weight: 1
          }}
          eventHandlers={{ click: () => onSelect(city) }}
        >
          <Popup>
            <b>{city.name} · {city.fr}</b><br />
            {city.region}<br />
            {city.note}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
