import { useEffect, lazy, Suspense } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import ErrorBoundary from "./components/ErrorBoundary";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EventsDetails from "./pages/EventsDetails";
import CreateNewEvent from "./pages/CreateNewEvent";
import EventsList from "./pages/EventsList";
import RoutePlanning from "./pages/RoutePlanning";
import VehicleManagement from "./pages/VehicleManagement";
import EventCalendar from "./pages/EventCalendar";
import TaskAssignment from "./pages/TaskAssignment";
import LogisticsOverview from "./pages/LogisticsOverview";
import AddAlertModal from "./pages/AddAlertModal";
import InventoryDetails from "./pages/InventoryDetails";
import InventoryAlertsNotificatio from "./pages/InventoryAlertsNotificatio";
import AddInventory from "./pages/AddInventory";
import LiveTrackingMap from "./pages/LiveTrackingMap";
import VehicleDetailsModal from "./pages/VehicleDetailsModal";
import DeliveryDetailsModal from "./pages/DeliveryDetailsModal";
import ProofOfDelivery from "./pages/ProofOfDelivery";
import StatusUpdates from "./pages/StatusUpdates";
import ProofDetailsModal from "./pages/ProofDetailsModal";
import AddProofOfDelivery from "./pages/AddProofOfDelivery";
import Reports from "./pages/Reports";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Protected route component that redirects to login if not authenticated
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Main App component that includes all routes
function AppRoutes() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Sign Up - Event Management Logistics";
        metaDescription = "Create your account for Quiet Craft Solutions Inc logistics services";
        break;
      case "/dashboard":
        title = "Dashboard - Event Management Logistics";
        metaDescription = "View your logistics dashboard";
        break;
      case "/events-details":
        title = "Event Details - Event Management Logistics";
        metaDescription = "View event details";
        break;
      case "/create-new-event":
        title = "Create Event - Event Management Logistics";
        metaDescription = "Create a new event";
        break;
      case "/events-list":
        title = "Events List - Event Management Logistics";
        metaDescription = "View all events";
        break;
      case "/route-planning":
        title = "Route Planning - Event Management Logistics";
        metaDescription = "Plan delivery routes";
        break;
      case "/vehicle-management":
        title = "Vehicle Management - Event Management Logistics";
        metaDescription = "Manage your vehicles";
        break;
      case "/event-calendar":
        title = "Event Calendar - Event Management Logistics";
        metaDescription = "View events calendar";
        break;
      case "/task-assignment":
        title = "Task Assignment - Event Management Logistics";
        metaDescription = "Assign tasks";
        break;
      case "/logistics-overview":
        title = "Logistics Overview - Event Management Logistics";
        metaDescription = "View logistics overview";
        break;
      case "/add-alert-modal":
        title = "Add Alert - Event Management Logistics";
        metaDescription = "Add a new alert";
        break;
      case "/inventory-details":
        title = "Inventory Details - Event Management Logistics";
        metaDescription = "View inventory details";
        break;
      case "/inventory-alerts-notifications":
        title = "Inventory Alerts - Event Management Logistics";
        metaDescription = "View inventory alerts";
        break;
      case "/add-inventory":
        title = "Add Inventory - Event Management Logistics";
        metaDescription = "Add new inventory items";
        break;
      case "/live-tracking-map":
        title = "Live Tracking - Event Management Logistics";
        metaDescription = "Track deliveries in real-time";
        break;
      case "/vehicle-details-modal":
        title = "Vehicle Details - Event Management Logistics";
        metaDescription = "View vehicle details";
        break;
      case "/delivery-details-modal":
        title = "Delivery Details - Event Management Logistics";
        metaDescription = "View delivery details";
        break;
      case "/proof-of-delivery":
        title = "Proof of Delivery - Event Management Logistics";
        metaDescription = "View delivery proofs";
        break;
      case "/status-updates":
        title = "Status Updates - Event Management Logistics";
        metaDescription = "View status updates";
        break;
      case "/proof-details-modal":
        title = "Proof Details - Event Management Logistics";
        metaDescription = "View proof details";
        break;
      case "/add-proof-of-delivery":
        title = "Add Proof of Delivery - Event Management Logistics";
        metaDescription = "Add new delivery proof";
        break;
      case "/reports":
        title = "Reports - Event Management Logistics";
        metaDescription = "View logistics reports";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<SignUp />} />
      
      {/* Protected routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/events-details" element={
        <ProtectedRoute>
          <EventsDetails />
        </ProtectedRoute>
      } />
      <Route path="/create-new-event" element={
        <ProtectedRoute>
          <CreateNewEvent />
        </ProtectedRoute>
      } />
      <Route path="/events-list" element={
        <ProtectedRoute>
          <EventsList />
        </ProtectedRoute>
      } />
      <Route path="/route-planning" element={
        <ProtectedRoute>
          <RoutePlanning />
        </ProtectedRoute>
      } />
      <Route path="/vehicle-management" element={
        <ProtectedRoute>
          <VehicleManagement />
        </ProtectedRoute>
      } />
      <Route path="/event-calendar" element={
        <ProtectedRoute>
          <EventCalendar />
        </ProtectedRoute>
      } />
      <Route path="/task-assignment" element={
        <ProtectedRoute>
          <TaskAssignment />
        </ProtectedRoute>
      } />
      <Route path="/logistics-overview" element={
        <ProtectedRoute>
          <LogisticsOverview />
        </ProtectedRoute>
      } />
      <Route path="/add-alert-modal" element={
        <ProtectedRoute>
          <AddAlertModal />
        </ProtectedRoute>
      } />
      <Route path="/inventory-details" element={
        <ProtectedRoute>
          <InventoryDetails />
        </ProtectedRoute>
      } />
      <Route path="/inventory-alerts-notifications" element={
        <ProtectedRoute>
          <InventoryAlertsNotificatio />
        </ProtectedRoute>
      } />
      <Route path="/add-inventory" element={
        <ProtectedRoute>
          <AddInventory />
        </ProtectedRoute>
      } />
      <Route path="/live-tracking-map" element={
        <ProtectedRoute>
          <LiveTrackingMap />
        </ProtectedRoute>
      } />
      <Route path="/vehicle-details-modal" element={
        <ProtectedRoute>
          <VehicleDetailsModal />
        </ProtectedRoute>
      } />
      <Route path="/delivery-details-modal" element={
        <ProtectedRoute>
          <DeliveryDetailsModal />
        </ProtectedRoute>
      } />
      <Route path="/proof-of-delivery" element={
        <ProtectedRoute>
          <ProofOfDelivery />
        </ProtectedRoute>
      } />
      <Route path="/status-updates" element={
        <ProtectedRoute>
          <StatusUpdates />
        </ProtectedRoute>
      } />
      <Route path="/proof-details-modal" element={
        <ProtectedRoute>
          <ProofDetailsModal />
        </ProtectedRoute>
      } />
      <Route path="/add-proof-of-delivery" element={
        <ProtectedRoute>
          <AddProofOfDelivery />
        </ProtectedRoute>
      } />
      <Route path="/reports" element={
        <ProtectedRoute>
          <Reports />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

// Wrap the app with ErrorBoundary and AuthProvider
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Suspense fallback={<LinearProgress color="primary" />}>
          <AppRoutes />
        </Suspense>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
