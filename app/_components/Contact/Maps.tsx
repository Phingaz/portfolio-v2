"use client";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

const Map = () => {
  const customIcon = new Icon({
    iconUrl: "/pin.svg",
    iconSize: [40, 40],
  });

  return (
    <MapContainer
      zoom={10}
      scrollWheelZoom={false}
      center={[-23.5714539, -46.6976511]}
      className="h-[400px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <Marker position={[-23.5714539, -46.6976511]} icon={customIcon}></Marker>
    </MapContainer>
  );
};

export default Map;
