import { memo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import L from 'leaflet'

const Map = ({ loading, position }) => {

  const icon = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>'

  // here's the trick, base64 encode the URL
  const svgURL = "data:image/svg+xml;base64," + btoa(icon);

  const markerIcon = new L.Icon({
    iconUrl: svgURL,
    iconSize: [46, 56],
    iconAnchor: [18, 50],
    popupAnchor: [0, -32]
  })

  return (
    <>
      {!loading && (
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%', zIndex: 0 }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`}
            attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
          />

          <Marker position={position} icon={markerIcon} />

        </MapContainer>
      )}
    </>
  )
}

export default memo(Map);