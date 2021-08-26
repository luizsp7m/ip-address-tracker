import { memo, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import L from 'leaflet'

const Map = () => {
  console.log(process.env.NEXT_PUBLIC_MAPBOX_KEY);
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%', zIndex: 0 }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />

    </MapContainer>
  )
}

export default memo(Map);