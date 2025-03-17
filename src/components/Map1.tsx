import { FunctionComponent, useEffect, useMemo, useState, useRef, type CSSProperties } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from "./Map1.module.css";

// Fix Leaflet marker icon issues
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Define custom icons for pickup and delivery locations
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const PickupIcon = L.icon({
  iconUrl: '/group-187.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const DropoffIcon = L.icon({
  iconUrl: '/group-191.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Register icons for Leaflet
L.Marker.prototype.options.icon = DefaultIcon;

// Map center auto-adjust component
const MapBounds = ({ locations }: { locations: [number, number][] }) => {
  const map = useMap();
  
  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(coord => L.latLng(coord[0], coord[1])));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, locations]);

  return null;
};

export type Map1Type = {
  className?: string;
  
  // Locations data (optional - if not provided, default demo locations will be used)
  pickupLocation?: {
    lat: number;
    lng: number;
    address: string;
  };
  dropoffLocation?: {
    lat: number;
    lng: number;
    address: string;
  };
  
  // Optional vehicle current position for tracking
  vehiclePosition?: {
    lat: number;
    lng: number;
  };

  /** Style props */
  mapAlignSelf?: CSSProperties["alignSelf"];
  mapPosition?: CSSProperties["position"];
  mapTop?: CSSProperties["top"];
  mapLeft?: CSSProperties["left"];
  mapWidth?: CSSProperties["width"];
  mapHeight?: CSSProperties["height"];
};

const Map1: FunctionComponent<Map1Type> = ({
  className = "",
  pickupLocation,
  dropoffLocation,
  vehiclePosition,
  mapAlignSelf,
  mapPosition,
  mapTop,
  mapLeft,
  mapWidth,
  mapHeight = "500px",
}) => {
  // Default locations if not provided
  const defaultPickup = { lat: 39.0997, lng: -94.5786, address: "859 Sauer Lock, Janismouth, Kansas, USA" };
  const defaultDropoff = { lat: 39.1197, lng: -94.5186, address: "921 Main Street, Kansas City, Missouri, USA" };
  const defaultVehicle = { lat: 39.1097, lng: -94.5486 };
  
  const pickup = pickupLocation || defaultPickup;
  const dropoff = dropoffLocation || defaultDropoff;
  const vehicle = vehiclePosition || defaultVehicle;
  
  // Calculate route coordinates
  const routeCoordinates = [
    [pickup.lat, pickup.lng],
    [vehicle.lat, vehicle.lng],
    [dropoff.lat, dropoff.lng],
  ];

  // Calculate progress as percentage along the route
  const totalDistance = calculateTotalDistance(routeCoordinates);
  const progressDistance = calculateDistanceBetween(
    [pickup.lat, pickup.lng], 
    [vehicle.lat, vehicle.lng]
  );
  const progressPercentage = Math.round((progressDistance / totalDistance) * 100);
  
  // Map style
  const mapStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: mapAlignSelf,
      position: mapPosition,
      top: mapTop,
      left: mapLeft,
      width: mapWidth || "100%",
      height: mapHeight,
    };
  }, [mapAlignSelf, mapPosition, mapTop, mapLeft, mapWidth, mapHeight]);

  // Locations for map bounds
  const allLocations: [number, number][] = [
    [pickup.lat, pickup.lng],
    [dropoff.lat, dropoff.lng],
    [vehicle.lat, vehicle.lng],
  ];

  return (
    <Box className={[styles.map, className].join(" ")} style={mapStyle}>
      {/* Leaflet Map */}
      <MapContainer 
        style={{ height: "100%", width: "100%", borderRadius: "10px" }}
        center={[vehicle.lat, vehicle.lng]} 
        zoom={12} 
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Auto-adjust bounds to show all locations */}
        <MapBounds locations={allLocations} />
        
        {/* Route path */}
        <Polyline 
          positions={routeCoordinates} 
          color="#1a3e59" 
          weight={4}
          dashArray="5, 10"
        />
        
        {/* Pickup location marker */}
        <Marker position={[pickup.lat, pickup.lng]} icon={PickupIcon}>
          <Popup>
            <Typography variant="subtitle1" fontWeight="bold">Pickup Location</Typography>
            <Typography variant="body2">{pickup.address}</Typography>
          </Popup>
        </Marker>
        
        {/* Dropoff location marker */}
        <Marker position={[dropoff.lat, dropoff.lng]} icon={DropoffIcon}>
          <Popup>
            <Typography variant="subtitle1" fontWeight="bold">Dropoff Location</Typography>
            <Typography variant="body2">{dropoff.address}</Typography>
          </Popup>
        </Marker>
        
        {/* Vehicle location marker */}
        <Marker position={[vehicle.lat, vehicle.lng]}>
          <Popup>
            <Typography variant="subtitle1" fontWeight="bold">Vehicle Location</Typography>
            <Typography variant="body2">
              ETA: {calculateETA()} min
            </Typography>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Route Information Overlay */}
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 15px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          zIndex: 1000,
          maxWidth: '250px',
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold" color="#1a3e59">
          Delivery Status
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Box 
            sx={{ 
              width: '100%', 
              backgroundColor: '#e0e0e0', 
              height: '8px', 
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                width: `${progressPercentage}%`,
                height: '100%',
                backgroundColor: '#ff6f3c',
                borderRadius: '4px',
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ ml: 1, minWidth: '36px' }}>
            {progressPercentage}%
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          ETA: {calculateETA()} minutes
        </Typography>
      </Paper>
    </Box>
  );
};

// Helper functions for distance and ETA calculations
function calculateDistanceBetween(point1: [number, number], point2: [number, number]): number {
  // Simple Haversine formula for distance calculation
  const R = 6371; // Earth's radius in km
  const dLat = (point2[0] - point1[0]) * Math.PI / 180;
  const dLon = (point2[1] - point1[1]) * Math.PI / 180;
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(point1[0] * Math.PI / 180) * Math.cos(point2[0] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in km
}

function calculateTotalDistance(points: [number, number][]): number {
  let totalDistance = 0;
  for (let i = 0; i < points.length - 1; i++) {
    totalDistance += calculateDistanceBetween(points[i], points[i+1]);
  }
  return totalDistance;
}

function calculateETA(): number {
  // Average speed of 50 km/h for city delivery
  return Math.floor(Math.random() * 10) + 15; // Simple random ETA between 15-25 minutes
}

export default Map1;
