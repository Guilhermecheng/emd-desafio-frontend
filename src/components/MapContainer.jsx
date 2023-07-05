import React from "react";
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export function MapContainer({ mapRef }) {
    // zoom init: 11 - sem marcador
    // zoom final: 18.6

    return (
        <Map
            ref={mapRef}
            mapLib={import('mapbox-gl')}
            initialViewState={{
                longitude:-43.210857,
                latitude: -22.951975,
                zoom: 11
            }}
            style={{width: "100vw", height: "100vh", position: "fixed", top:0, left:0 }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            doubleClickZoom={false}
            scrollZoom={false}
        >
            <Marker longitude={-43.210857} latitude={-22.951975} color="red" />
        </Map>
    )
}