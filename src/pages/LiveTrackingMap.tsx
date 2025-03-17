import { FunctionComponent, useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  CircularProgress, 
  Menu, 
  MenuItem, 
  Chip, 
  Divider,
  Alert,
  Snackbar,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent
} from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import LeftMenu6 from "../components/LeftMenu6";
import UserContainer from "../components/UserContainer";
import Map1 from "../components/Map1";
import { api, Delivery, DeliveryStatus } from "../services/api";
import styles from "./LiveTrackingMap.module.css";

const LiveTrackingMap: FunctionComponent = () => {
  // State for deliveries data
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // UI state
  const [statusFilter, setStatusFilter] = useState<DeliveryStatus | 'all'>('all');
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const [actionAnchorEl, setActionAnchorEl] = useState<null | HTMLElement>(null);
  const [legendsOpen, setLegendsOpen] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'info' as 'info' | 'success' | 'error'
  });

  // Fetch deliveries data
  const fetchDeliveries = async () => {
    try {
      setLoading(true);
      const response = await api.deliveries.getAll();
      
      if (response.success) {
        setDeliveries(response.data);
        
        // Select the first delivery by default if none is selected
        if (!selectedDelivery && response.data.length > 0) {
          setSelectedDelivery(response.data[0]);
        }
      } else {
        setError("Failed to load deliveries data");
      }
    } catch (err) {
      console.error("Error fetching deliveries:", err);
      setError("An error occurred while fetching delivery data");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchDeliveries();
  }, []);

  // Handle filter menu
  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleStatusFilterChange = (status: DeliveryStatus | 'all') => {
    setStatusFilter(status);
    handleFilterClose();
  };

  // Handle refresh button
  const handleRefreshMap = () => {
    fetchDeliveries();
    setNotification({
      open: true,
      message: 'Map data refreshed',
      severity: 'info'
    });
  };

  // Handle legends toggle
  const handleLegendsToggle = () => {
    setLegendsOpen(!legendsOpen);
  };

  // Handle delivery selection
  const handleDeliverySelect = (delivery: Delivery) => {
    setSelectedDelivery(delivery);
  };

  // Handle delivery actions
  const handleActionClick = (event: React.MouseEvent<HTMLElement>, delivery: Delivery) => {
    setSelectedDelivery(delivery);
    setActionAnchorEl(event.currentTarget);
  };

  const handleActionClose = () => {
    setActionAnchorEl(null);
  };

  // Update delivery status
  const updateDeliveryStatus = async (deliveryId: string, newStatus: DeliveryStatus) => {
    try {
      setLoading(true);
      const response = await api.deliveries.updateStatus(deliveryId, newStatus);
      
      if (response.success) {
        // Update the deliveries in state
        setDeliveries(prevDeliveries =>
          prevDeliveries.map(delivery =>
            delivery.id === deliveryId ? response.data : delivery
          )
        );
        
        // Update selected delivery if it's the one being modified
        if (selectedDelivery && selectedDelivery.id === deliveryId) {
          setSelectedDelivery(response.data);
        }
        
        setNotification({
          open: true,
          message: `Delivery status updated to ${newStatus}`,
          severity: 'success'
        });
      } else {
        setNotification({
          open: true,
          message: 'Failed to update delivery status',
          severity: 'error'
        });
      }
    } catch (err) {
      console.error("Error updating delivery status:", err);
      setNotification({
        open: true,
        message: 'An error occurred while updating status',
        severity: 'error'
      });
    } finally {
      setLoading(false);
      handleActionClose();
    }
  };

  // Close notification
  const handleCloseNotification = () => {
    setNotification({...notification, open: false});
  };

  // Filter deliveries based on selected status
  const filteredDeliveries = deliveries.filter(delivery => 
    statusFilter === 'all' || delivery.status === statusFilter
  );

  // Helper function to get status color
  const getStatusColor = (status: DeliveryStatus): string => {
    switch (status) {
      case 'delivered':
        return '#4caf50'; // Green
      case 'inTransit':
        return '#2196f3'; // Blue
      case 'pending':
      case 'processing':
        return '#ff9800'; // Orange
      case 'failed':
      case 'cancelled':
        return '#f44336'; // Red
      default:
        return '#9e9e9e'; // Grey
    }
  };

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <Box className={styles.liveTrackingMap}>
      <LeftMenu6 logo="/logo1.svg" />
      <main className={styles.brandCardSixteen}>
        {/* Notification */}
        <Snackbar 
          open={notification.open} 
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

        {loading && !deliveries.length ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%', 
            width: '100%' 
          }}>
            <CircularProgress size={60} />
          </Box>
        ) : error ? (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Alert severity="error">{error}</Alert>
          </Box>
        ) : (
          <section className={styles.mainPanel}>
            <Box className={styles.header}>
              <Box className={styles.titleWrapper}>
                <Box className={styles.title}>
                  <Box
                    className={styles.dashboardDelivery}
                  >{`Dashboard > Delivery > Live Tracking Map`}</Box>
                  <Typography
                    className={styles.deliveryTracking}
                    variant="inherit"
                    component="h3"
                    sx={{
                      fontWeight: "600",
                      fontSize: "var(--font-size-11xl)",
                      lineHeight: "120%",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Delivery Tracking {statusFilter !== 'all' && `(${statusFilter})`}
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.actions}>
                <Button
                  className={styles.button}
                  startIcon={<FilterAltIcon />}
                  onClick={handleFilterClick}
                  variant="outlined"
                  sx={{ 
                    color: "var(--dark)",
                    borderColor: "var(--stroke)",
                    textTransform: "none",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "14px"
                  }}
                >
                  Filter Map
                </Button>
                <Menu
                  anchorEl={filterAnchorEl}
                  open={Boolean(filterAnchorEl)}
                  onClose={handleFilterClose}
                >
                  <MenuItem onClick={() => handleStatusFilterChange('all')}>
                    All Deliveries
                  </MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('pending')}>
                    Pending
                  </MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('processing')}>
                    Processing
                  </MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('inTransit')}>
                    In Transit
                  </MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('delivered')}>
                    Delivered
                  </MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('failed')}>
                    Failed
                  </MenuItem>
                </Menu>
                
                <Box className={styles.userDropdown}>
                  <UserContainer />
                  <Box className={styles.mapActions}>
                    <Button
                      className={styles.button1}
                      startIcon={<RefreshIcon />}
                      onClick={handleRefreshMap}
                      variant="outlined"
                      sx={{ 
                        color: "var(--dark)",
                        borderColor: "var(--stroke)",
                        textTransform: "none",
                        fontFamily: "var(--font-poppins)",
                        fontSize: "14px"
                      }}
                    >
                      Refresh Map
                    </Button>
                    <Button
                      className={styles.button2}
                      startIcon={<InfoIcon />}
                      onClick={handleLegendsToggle}
                      variant="outlined"
                      sx={{ 
                        color: "var(--dark)",
                        borderColor: "var(--stroke)",
                        textTransform: "none",
                        fontFamily: "var(--font-poppins)",
                        fontSize: "14px"
                      }}
                    >
                      Legends
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Legend box */}
            {legendsOpen && (
              <Box 
                sx={{
                  position: 'absolute',
                  top: '120px',
                  right: '20px',
                  zIndex: 1000,
                  backgroundColor: 'white',
                  border: '1px solid var(--stroke)',
                  borderRadius: '8px',
                  padding: '15px',
                  width: '250px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Status Legend
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 2, backgroundColor: '#4caf50', mr: 1 }} />
                  <Typography variant="body2">Delivered</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 2, backgroundColor: '#2196f3', mr: 1 }} />
                  <Typography variant="body2">In Transit</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 2, backgroundColor: '#ff9800', mr: 1 }} />
                  <Typography variant="body2">Pending/Processing</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 2, backgroundColor: '#f44336', mr: 1 }} />
                  <Typography variant="body2">Failed/Cancelled</Typography>
                </Box>
                
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
                  Map Markers
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <img src="/group-187.svg" alt="Pickup" style={{ width: 24, height: 24, marginRight: 8 }} />
                  <Typography variant="body2">Pickup Location</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <img src="/group-191.svg" alt="Dropoff" style={{ width: 24, height: 24, marginRight: 8 }} />
                  <Typography variant="body2">Dropoff Location</Typography>
                </Box>
              </Box>
            )}

            {/* Main content split view */}
            <Box sx={{ 
              display: 'flex', 
              height: 'calc(100vh - 120px)',
              position: 'relative'
            }}>
              {/* Map */}
              <Box sx={{ flex: 3, position: 'relative' }}>
                {selectedDelivery ? (
                  <Map1 
                    mapHeight="100%"
                    pickupLocation={{
                      lat: selectedDelivery.pickupLocation.coordinates.latitude,
                      lng: selectedDelivery.pickupLocation.coordinates.longitude,
                      address: `${selectedDelivery.pickupLocation.street}, ${selectedDelivery.pickupLocation.city}`
                    }}
                    dropoffLocation={{
                      lat: selectedDelivery.dropoffLocation.coordinates.latitude,
                      lng: selectedDelivery.dropoffLocation.coordinates.longitude,
                      address: `${selectedDelivery.dropoffLocation.street}, ${selectedDelivery.dropoffLocation.city}`
                    }}
                    vehiclePosition={
                      selectedDelivery.currentLocation ? {
                        lat: selectedDelivery.currentLocation.latitude,
                        lng: selectedDelivery.currentLocation.longitude
                      } : undefined
                    }
                  />
                ) : (
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100%', 
                    bgcolor: '#f5f5f5' 
                  }}>
                    <Typography variant="h6" color="text.secondary">
                      No delivery selected
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Delivery list */}
              <Box sx={{ 
                flex: 1, 
                borderLeft: '1px solid var(--stroke)', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ 
                  p: 2, 
                  borderBottom: '1px solid var(--stroke)',
                  backgroundColor: 'var(--hover)',
                }}>
                  <Typography variant="h6" fontWeight="bold">
                    Deliveries ({filteredDeliveries.length})
                  </Typography>
                </Box>

                {filteredDeliveries.length === 0 ? (
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    flex: 1
                  }}>
                    <Typography variant="body1" color="text.secondary">
                      No deliveries found
                    </Typography>
                  </Box>
                ) : (
                  <Box sx={{ 
                    flex: 1, 
                    overflow: 'auto',
                    bgcolor: 'white'
                  }}>
                    {filteredDeliveries.map((delivery) => (
                      <Box 
                        key={delivery.id}
                        sx={{ 
                          p: 2, 
                          borderBottom: '1px solid var(--stroke)',
                          cursor: 'pointer',
                          bgcolor: selectedDelivery?.id === delivery.id ? 'var(--hover)' : 'transparent',
                          '&:hover': { bgcolor: 'var(--hover)' }
                        }}
                        onClick={() => handleDeliverySelect(delivery)}
                      >
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'flex-start'
                        }}>
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                              #{delivery.orderId.toUpperCase()}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {delivery.customerName}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Chip 
                              label={delivery.status} 
                              size="small"
                              sx={{ 
                                bgcolor: getStatusColor(delivery.status),
                                color: 'white',
                                fontWeight: 'bold',
                                mr: 1
                              }}
                            />
                            <IconButton 
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleActionClick(e, delivery);
                              }}
                            >
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                        
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" sx={{ display: 'flex' }}>
                            <Box component="span" sx={{ minWidth: 80 }}>Pickup:</Box>
                            {delivery.pickupLocation.street}, {delivery.pickupLocation.city}
                          </Typography>
                          <Typography variant="body2" sx={{ display: 'flex' }}>
                            <Box component="span" sx={{ minWidth: 80 }}>Dropoff:</Box>
                            {delivery.dropoffLocation.street}, {delivery.dropoffLocation.city}
                          </Typography>
                          <Typography variant="body2" sx={{ display: 'flex' }}>
                            <Box component="span" sx={{ minWidth: 80 }}>ETA:</Box>
                            {formatDate(delivery.estimatedDeliveryTime)}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>

              {/* Status update menu */}
              <Menu
                anchorEl={actionAnchorEl}
                open={Boolean(actionAnchorEl)}
                onClose={handleActionClose}
              >
                <MenuItem disabled>
                  <Typography variant="body2" fontWeight="bold">
                    Update Status
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem 
                  onClick={() => selectedDelivery && updateDeliveryStatus(selectedDelivery.id, 'processing')}
                  disabled={selectedDelivery?.status === 'processing'}
                >
                  Processing
                </MenuItem>
                <MenuItem 
                  onClick={() => selectedDelivery && updateDeliveryStatus(selectedDelivery.id, 'inTransit')}
                  disabled={selectedDelivery?.status === 'inTransit'}
                >
                  In Transit
                </MenuItem>
                <MenuItem 
                  onClick={() => selectedDelivery && updateDeliveryStatus(selectedDelivery.id, 'delivered')}
                  disabled={selectedDelivery?.status === 'delivered'}
                >
                  Delivered
                </MenuItem>
                <MenuItem 
                  onClick={() => selectedDelivery && updateDeliveryStatus(selectedDelivery.id, 'failed')}
                  disabled={selectedDelivery?.status === 'failed'}
                >
                  Failed
                </MenuItem>
                <MenuItem 
                  onClick={() => selectedDelivery && updateDeliveryStatus(selectedDelivery.id, 'cancelled')}
                  disabled={selectedDelivery?.status === 'cancelled'}
                >
                  Cancelled
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleActionClose}>View Details</MenuItem>
              </Menu>
            </Box>
          </section>
        )}
      </main>
    </Box>
  );
};

export default LiveTrackingMap;
