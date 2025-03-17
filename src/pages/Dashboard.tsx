import { FunctionComponent, useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Alert, LinearProgress, Button, Tab, Tabs } from "@mui/material";
import LeftMenu2 from "../components/LeftMenu2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent2 from "../components/FrameComponent2";
import Map1 from "../components/Map1";
import { api, DashboardMetrics, Event, Task, InventoryAlert, Delivery } from "../services/api";
import { useAuth } from "../context/AuthContext";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const { user } = useAuth();
  
  // State for data
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [alerts, setAlerts] = useState<InventoryAlert[]>([]);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  
  // UI state
  const [loading, setLoading] = useState({
    metrics: true,
    events: true,
    tasks: true,
    alerts: true,
    deliveries: true
  });
  const [error, setError] = useState<string | null>(null);
  const [mapView, setMapView] = useState(true);
  
  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch metrics
        const metricsResponse = await api.dashboard.getMetrics();
        if (metricsResponse.success) {
          setMetrics(metricsResponse.data);
        }
        setLoading(prev => ({ ...prev, metrics: false }));
        
        // Fetch events
        const eventsResponse = await api.events.getAll();
        if (eventsResponse.success) {
          setEvents(eventsResponse.data);
          
          // Get tasks from events
          const allTasks = eventsResponse.data.flatMap(event => event.tasks);
          setTasks(allTasks);
        }
        setLoading(prev => ({ ...prev, events: false, tasks: false }));
        
        // Fetch inventory alerts
        const alertsResponse = await api.inventory.getAlerts();
        if (alertsResponse.success) {
          setAlerts(alertsResponse.data);
        }
        setLoading(prev => ({ ...prev, alerts: false }));
        
        // Fetch active deliveries
        const deliveriesResponse = await api.deliveries.getActive();
        if (deliveriesResponse.success) {
          setDeliveries(deliveriesResponse.data);
        }
        setLoading(prev => ({ ...prev, deliveries: false }));
        
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data. Please try again.");
      }
    };
    
    fetchDashboardData();
  }, []);
  
  // Check if all data is loading
  const isLoading = Object.values(loading).some(status => status);
  
  // Handle map/list view toggle
  const handleViewChange = (viewType: 'map' | 'list') => {
    setMapView(viewType === 'map');
  };
  
  // Format date string to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'inprogress':
        return '#ff6f3c';
      case 'completed':
        return '#4caf50';
      case 'pending':
        return '#1a3e59';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <Box className={styles.dashboard}>
      <LeftMenu2 />
      <main className={styles.main}>
        {error && (
          <Alert 
            severity="error" 
            sx={{ mb: 2, mx: 2 }}
            onClose={() => setError(null)}
          >
            {error}
          </Alert>
        )}
        
        {isLoading ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '80vh' 
          }}>
            <CircularProgress size={60} sx={{ color: '#ff6f3c' }} />
          </Box>
        ) : (
          <section className={styles.dashboardContainer}>
            <Box className={styles.firstRowParent}>
              <FrameComponent1
                dashboardLogisticsVehicleMan={`Welcome, ${user?.firstName || 'User'}`}
                dashboardLogisticsDisplay="inline-block"
                dashboardLogisticsMinWidth="99px"
              />
              <Box className={styles.metrics}>
                <Box className={styles.rectangleParent}>
                  <Box className={styles.frameChild} />
                  <Box className={styles.grosOeuvres}>{metrics?.totalEvents || 0}</Box>
                  <Box className={styles.eventsManagedThis}>
                    Events managed this month.
                  </Box>
                </Box>
                <Box className={styles.rectangleGroup}>
                  <Box className={styles.frameItem} />
                  <Box className={styles.grosOeuvres}>{metrics?.onTimeDeliveryRate || 0}%</Box>
                  <Box className={styles.eventsManagedThis}>
                    On-time delivery rate
                  </Box>
                </Box>
                <Box className={styles.rectangleGroup}>
                  <Box className={styles.frameItem} />
                  <Box className={styles.checkbox}>{metrics?.tasksCompleted || 0}</Box>
                  <Box className={styles.eventsManagedThis}>
                    Total tasks completed
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.eventList}>
              <Typography
                className={styles.upcomingEvents}
                variant="inherit"
                component="h2"
                sx={{
                  fontWeight: "600",
                  lineHeight: "120%",
                  letterSpacing: "-0.03em",
                }}
              >
                Upcoming Events
              </Typography>
              <Box className={styles.eventsContainer}>
                <Box className={styles.eventCards}>
                  {events.length > 0 ? (
                    events
                      .filter(event => event.status === 'upcoming' || event.status === 'ongoing')
                      .slice(0, 3)
                      .map((event, index) => (
                        <GroupComponent2 
                          key={event.id}
                          ongoing={event.status === 'ongoing' ? "Ongoing" : "Upcoming"} 
                          souscatgorieBackgroundColor={event.status === 'ongoing' ? "#ff6f3c" : "#4caf50"}
                        />
                      ))
                  ) : (
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                      <Typography>No upcoming events found.</Typography>
                    </Box>
                  )}
                  
                  <Box className={styles.taskAssignmentsParent}>
                    <Typography
                      className={styles.upcomingEvents}
                      variant="inherit"
                      component="h2"
                      sx={{
                        fontWeight: "600",
                        lineHeight: "120%",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Task Assignments
                    </Typography>
                    <Box className={styles.taskCards}>
                      {tasks.length > 0 ? (
                        tasks
                          .filter(task => task.status !== 'completed')
                          .slice(0, 3)
                          .map((task, index) => (
                            <Box key={task.id} className={styles.taskCard}>
                              <Box className={styles.taskDetails}>
                                <Box className={styles.taskName}>{task.title}</Box>
                                <Box className={styles.assigneeInfoParent}>
                                  <Box className={styles.assigneeInfo}>
                                    <Box
                                      className={styles.assigneeRobertSteveContainer}
                                    >
                                      <Typography
                                        className={styles.assignee}
                                        variant="inherit"
                                      >
                                        Assignee
                                      </Typography>
                                      <Typography
                                        className={styles.robertSteve}
                                        variant="inherit"
                                        sx={{
                                          fontWeight: "600",
                                          fontSize: "var(--font-size-lg)",
                                        }}
                                      >
                                        {task.assigneeId === '2' ? 'Robert Steve' : 'Jane Smith'}
                                      </Typography>
                                    </Box>
                                    <Box className={styles.taskStatus}>
                                      <Box 
                                        className={styles.taskStatusIconWrapper}
                                        sx={{ backgroundColor: getStatusColor(task.status) }}
                                      >
                                        <Box className={styles.taskStatusIcon} />
                                      </Box>
                                      <Box className={styles.inprogress}>
                                        {task.status === 'inprogress' ? 'In progress' : 
                                          task.status === 'completed' ? 'Completed' : 'Pending'}
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box className={styles.dueDateDdMmYyyyParent}>
                                    <Box className={styles.dueDateDdMmYyyyContainer}>
                                      <Typography
                                        className={styles.assignee}
                                        variant="inherit"
                                      >
                                        Due Date
                                      </Typography>
                                      <Typography
                                        className={styles.ddMmYyyy}
                                        variant="inherit"
                                        sx={{ fontWeight: "600" }}
                                      >
                                        {formatDate(task.dueDate)}
                                      </Typography>
                                    </Box>
                                    <Box className={styles.dueDateValue}>
                                      <Box className={styles.placeholder}>{task.progress}%</Box>
                                      <LinearProgress 
                                        variant="determinate" 
                                        value={task.progress} 
                                        sx={{ 
                                          mt: 1, 
                                          height: 8, 
                                          borderRadius: 4,
                                          backgroundColor: '#e0e0e0',
                                          '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#ff6f3c'
                                          }
                                        }}
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                              <Box className={styles.separator} />
                            </Box>
                          ))
                      ) : (
                        <Box sx={{ p: 2, textAlign: 'center' }}>
                          <Typography>No pending tasks found.</Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.alertList}>
                  <Box className={styles.alertCards}>
                    <GroupComponent2
                      groupDivAlignSelf="stretch"
                      groupDivFlex="unset"
                      groupDivMinWidth="unset"
                      souscatgorieBackgroundColor="#ff6f3c"
                      ongoing="Alerts"
                      ongoingDisplay="unset"
                      ongoingMinWidth="unset"
                    />
                    <Box className={styles.taskAssignmentsParent}>
                      <Typography
                        className={styles.upcomingEvents}
                        variant="inherit"
                        component="h2"
                        sx={{
                          fontWeight: "600",
                          lineHeight: "120%",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        Inventory Alerts
                      </Typography>
                      <Box className={styles.inventoryItems}>
                        {alerts.length > 0 ? (
                          alerts.map(alert => (
                            <Box key={alert.id} className={styles.inventoryCard}>
                              <Box className={styles.itemDetails}>
                                <Box className={styles.itemTopRow}>
                                  <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                      {alert.itemName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      {alert.alertType === 'critical' ? 'CRITICAL' : 'LOW'} STOCK
                                    </Typography>
                                    <Typography variant="body2" mt={1}>
                                      {alert.message}
                                    </Typography>
                                    <Button 
                                      variant="outlined" 
                                      size="small" 
                                      sx={{ mt: 1, borderColor: '#ff6f3c', color: '#ff6f3c' }}
                                    >
                                      Reorder
                                    </Button>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          ))
                        ) : (
                          <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Typography>No inventory alerts found.</Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.frameParent}>
                    <Box className={styles.frameGroup}>
                      <GroupComponent2
                        groupDivAlignSelf="unset"
                        groupDivFlex="1"
                        groupDivMinWidth="256px"
                        souscatgorieBackgroundColor="#1a3e59"
                        ongoing="Tracking"
                        ongoingDisplay="unset"
                        ongoingMinWidth="unset"
                      />
                      <Box className={styles.arrowWrapper}>
                        <img
                          className={styles.arrowIcon}
                          loading="lazy"
                          alt=""
                          src="/arrow.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.deliveries}>
                      <Box className={styles.deliveriesContent}>
                        <Box className={styles.deliveriesTitle}>
                          <Typography
                            className={styles.activeDeliveries}
                            variant="inherit"
                            component="h2"
                            sx={{
                              fontWeight: "600",
                              lineHeight: "120%",
                              letterSpacing: "-0.03em",
                            }}
                          >
                            Active Deliveries
                          </Typography>
                        </Box>
                        <Box className={styles.tabs}>
                          <Tabs 
                            value={mapView ? 0 : 1}
                            onChange={(_, value) => handleViewChange(value === 0 ? 'map' : 'list')}
                            sx={{ 
                              minHeight: 'unset',
                              '& .MuiTabs-indicator': {
                                display: 'none',
                              }
                            }}
                          >
                            <Tab 
                              label="Map View" 
                              sx={{ 
                                textTransform: 'none', 
                                bgcolor: mapView ? '#ff6f3c' : 'transparent',
                                color: mapView ? '#fff' : '#000',
                                borderRadius: '5px',
                                minHeight: 'unset',
                                padding: '6px 12px',
                              }} 
                            />
                            <Tab 
                              label="List View" 
                              sx={{ 
                                textTransform: 'none',
                                bgcolor: !mapView ? '#ff6f3c' : 'transparent',
                                color: !mapView ? '#fff' : '#000',
                                borderRadius: '5px',
                                minHeight: 'unset',
                                padding: '6px 12px',
                              }} 
                            />
                          </Tabs>
                        </Box>
                      </Box>
                      <Box className={styles.deliveryMap}>
                        {mapView ? (
                          // Interactive Map
                          <Map1 
                            mapHeight="400px"
                            pickupLocation={
                              deliveries.length > 0 
                                ? {
                                    lat: deliveries[0].pickupLocation.coordinates.latitude,
                                    lng: deliveries[0].pickupLocation.coordinates.longitude,
                                    address: `${deliveries[0].pickupLocation.street}, ${deliveries[0].pickupLocation.city}`
                                  } 
                                : undefined
                            }
                            dropoffLocation={
                              deliveries.length > 0 
                                ? {
                                    lat: deliveries[0].dropoffLocation.coordinates.latitude,
                                    lng: deliveries[0].dropoffLocation.coordinates.longitude,
                                    address: `${deliveries[0].dropoffLocation.street}, ${deliveries[0].dropoffLocation.city}`
                                  } 
                                : undefined
                            }
                            vehiclePosition={
                              deliveries.length > 0 && deliveries[0].currentLocation
                                ? {
                                    lat: deliveries[0].currentLocation.latitude,
                                    lng: deliveries[0].currentLocation.longitude
                                  } 
                                : undefined
                            }
                          />
                        ) : (
                          // List View
                          <Box sx={{ overflowY: 'auto', maxHeight: '400px', p: 2 }}>
                            {deliveries.length > 0 ? (
                              deliveries.map(delivery => (
                                <Box key={delivery.id} sx={{ 
                                  p: 2, 
                                  mb: 1, 
                                  border: '1px solid #e0e0e0',
                                  borderRadius: '8px'
                                }}>
                                  <Typography variant="subtitle1">Order #{delivery.orderId}</Typography>
                                  <Typography variant="body2">Customer: {delivery.customerName}</Typography>
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                    <Typography variant="body2">
                                      Status: <strong>{delivery.status}</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                      ETA: {formatDate(delivery.estimatedDeliveryTime)}
                                    </Typography>
                                  </Box>
                                </Box>
                              ))
                            ) : (
                              <Typography sx={{ textAlign: 'center' }}>
                                No active deliveries found.
                              </Typography>
                            )}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </section>
        )}
      </main>
    </Box>
  );
};

export default Dashboard;
