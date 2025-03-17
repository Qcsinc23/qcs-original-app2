import { FunctionComponent, useState, useEffect } from "react";
import { Box, CircularProgress, Alert, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import GroupComponent3 from "../components/GroupComponent3";
import LeftMenu2 from "../components/LeftMenu2";
import Table1 from "../components/Table1";
import { api, Event } from "../services/api"; 
import styles from "./EventsList.module.css";

const EventsList: FunctionComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.events.getAll();
        if (response.success && response.data) {
          setEvents(response.data);
        } else {
          setError("Failed to load events. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEvent = () => {
    navigate('/create-new-event');
  };

  return (
    <Box className={styles.eventsList}>
      <LeftMenu2 />
      <main className={styles.eventsListInner}>
        <section className={styles.breadcrumbItemsParent}>
          <PageHeader
            subtitle={`Dashboard > Events > Event List`}
            subtitleDisplay="unset"
            title="Event Management"
            actionButton={
              <Button 
                variant="contained" 
                onClick={handleCreateEvent}
                sx={{ 
                  backgroundColor: '#ff6f3c',
                  '&:hover': { backgroundColor: '#e5642f' },
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                Create New Event
              </Button>
            }
            buttonWidth="unset"
            buttonAlignSelf="stretch"
            titleId="events-page-title"
          />
          <GroupComponent3 />
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Table1 events={events} /> // Pass events data to Table1
          )}
        </section>
      </main>
    </Box>
  );
};

export default EventsList;
