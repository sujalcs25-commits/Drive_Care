import { createBrowserRouter, Navigate } from "react-router";
import { SplashScreen } from "./screens/SplashScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { VehiclesScreen } from "./screens/VehiclesScreen";
import { ServicesScreen } from "./screens/ServicesScreen";
import { MaintenanceScreen } from "./screens/MaintenanceScreen";
import { EmergencyScreen } from "./screens/EmergencyScreen";
import { FuelTrackerScreen } from "./screens/FuelTrackerScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/vehicles",
    element: <VehiclesScreen />,
  },
  {
    path: "/services",
    element: <ServicesScreen />,
  },
  {
    path: "/maintenance",
    element: <MaintenanceScreen />,
  },
  {
    path: "/emergency",
    element: <EmergencyScreen />,
  },
  {
    path: "/fuel-tracker",
    element: <FuelTrackerScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
