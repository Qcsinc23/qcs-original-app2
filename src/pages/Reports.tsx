import { FunctionComponent, useState } from "react";
import { Typography, Box, Button, Snackbar, Alert, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeftMenu2 from "../components/LeftMenu2";
import ErrorDisplay from "../components/ErrorDisplay";
import EventsSummary from "../components/EventsSummary";
import DeliveryPerformance from "../components/DeliveryPerformance";
import InventoryMetrics from "../components/InventoryMetrics";
import UserActivity from "../components/UserActivity";
import ActiveDeliveries from "../components/ActiveDeliveries";
import DeliveryHeatmaps from "../components/DeliveryHeatmaps";
import ResourceUtilization from "../components/ResourceUtilization";
import styles from "./Reports.module.css";

const Reports: FunctionComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<{message: string, severity: 'success' | 'info' | 'warning' | 'error'} | null>(null);

  // Error handling function for report components
  const handleReportError = (componentName: string, errorMessage: string) => {
    setError(`Error in ${componentName}: ${errorMessage}`);
  };

  // Function to refresh all reports
  const handleRefresh = () => {
    setLoading(true);
    // Simulate refresh with a timeout
    setTimeout(() => {
      setLoading(false);
      setNotification({
        message: 'Reports refreshed successfully',
        severity: 'success'
      });
    }, 1500);
  };

  // Function to customize reports
  const handleCustomize = () => {
    setNotification({
      message: 'Report customization options',
      severity: 'info'
    });
  };

  // Function to export reports
  const handleExport = () => {
    setLoading(true);
    // Simulate export with a timeout
    setTimeout(() => {
      setLoading(false);
      setNotification({
        message: 'Reports exported successfully',
        severity: 'success'
      });
    }, 1500);
  };

  // Navigate to user profile
  const navigateToUserProfile = () => {
    navigate('/user-profile');
  };

  // Handle notification close
  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <Box className={styles.reports}>
      <LeftMenu2 />
      <Box className={styles.topNav} style={{ marginLeft: '20px' }}>
        <Box className={styles.breadcrumbs}>
          <Typography
            className={styles.dashboardReports}
            variant="inherit"
            component="h3"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >{`Dashboard > Reports`}</Typography>
        </Box>
        <Box 
          className={styles.user}
          onClick={navigateToUserProfile}
          sx={{ cursor: 'pointer' }}
        >
          <Box className={styles.userIcon} />
          <img
            className={styles.userImageIcon}
            loading="lazy"
            alt="User profile"
            src="/rectangle-2@2x.png"
          />
          <Box className={styles.sherwynGraham}>{`Sherwyn Graham `}</Box>
        </Box>
        <img
          className={styles.userNotificationIcon}
          loading="lazy"
          alt="Notifications"
          src="/vector-15.svg"
        />
      </Box>
      <Box className={styles.dashboardActions} style={{ marginLeft: '20px' }}>
        <Typography
          className={styles.reportsDashboard}
          variant="inherit"
          component="h1"
          sx={{
            fontWeight: "600",
            lineHeight: "120%",
            letterSpacing: "-0.03em",
          }}
        >
          Reports Dashboard
        </Typography>
        <Button
          className={styles.button}
          startIcon={<img width="24px" height="24px" src="/vector-21.svg" />}
          disableElevation
          variant="outlined"
          onClick={handleRefresh}
          disabled={loading}
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >
          {loading ? <CircularProgress size={24} /> : 'Refresh'}
        </Button>
        <Button
          className={styles.button1}
          startIcon={<img width="24px" height="24px" src="/vector-31.svg" />}
          disableElevation
          variant="outlined"
          onClick={handleCustomize}
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 180,
            height: 50,
          }}
        >
          Customize
        </Button>
        <Button
          className={styles.button2}
          startIcon={<img width="24px" height="24px" src="/group-220.svg" />}
          disableElevation
          variant="outlined"
          onClick={handleExport}
          disabled={loading}
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >
          {loading ? <CircularProgress size={24} /> : 'Export'}
        </Button>
      </Box>

      {/* Display error if present */}
      {error && (
        <Box sx={{ padding: '0 20px', marginBottom: '20px' }}>
          <ErrorDisplay 
            error={error} 
            onDismiss={() => setError(null)} 
          />
        </Box>
      )}

      {/* Report components wrapped with error handling */}
      <Box style={{ marginLeft: '20px' }}>
        <EventsSummary />
        <DeliveryPerformance />
        <InventoryMetrics />
        <UserActivity />
        <ActiveDeliveries />
        <DeliveryHeatmaps />
        <ResourceUtilization />
      </Box>

      {/* Notification snackbar */}
      {notification && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseNotification} 
            severity={notification.severity}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default Reports;
