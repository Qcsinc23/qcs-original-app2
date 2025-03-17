import React, { FunctionComponent } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Event } from "../services/api";
import styles from "./Table1.module.css";

export type Table1Type = {
  className?: string;
  events: Event[];
};

const Table1: FunctionComponent<Table1Type> = ({ className = "", events }) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
  };

  // Get status class based on event status
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'ongoing':
        return styles.ongoing;
      case 'completed':
        return styles.completed;
      case 'cancelled':
        return styles.canceled;
      default:
        return styles.upcoming;
    }
  };

  // Get status icon class based on event status
  const getStatusIconClass = (status: string) => {
    switch (status) {
      case 'ongoing':
        return styles.div;
      case 'completed':
        return styles.descriptionLabel;
      case 'cancelled':
        return styles.input;
      default:
        return styles.imageComponent;
    }
  };
  return (
    <Box className={[styles.table, className].join(" ")}>
      <Box className={styles.tableChild} />
      <Box className={styles.header}>
        <Box className={styles.headerChild} />
        <Box className={styles.headerItems}>
          <Box className={styles.eventName}>Event Name</Box>
        </Box>
        <Box className={styles.headerItems1}>
          <Box className={styles.dates}>Date’s</Box>
        </Box>
        <Box className={styles.headerItems2}>
          <Box className={styles.locations}>Location’s</Box>
        </Box>
        <Box className={styles.headerItems3}>
          <Box className={styles.status}>Status</Box>
        </Box>
        <Box className={styles.assignee}>Assignee</Box>
        <Box className={styles.actions}>Actions</Box>
      </Box>
      
      {events.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <Typography>No events found</Typography>
        </Box>
      ) : (
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <Box className={styles.tableRows}>
              <Box className={styles.rowItems}>
                <Box className={styles.rowData}>
                  <Box className={styles.eventNameHere}>{event.title}</Box>
                </Box>
                <Box className={styles.assigneeData}>
                  <Box className={styles.assigneeItems}>
                    <Box className={styles.ddMmYyyy}>{formatDate(event.startDate)}</Box>
                  </Box>
                  <Box className={styles.canceledStatus}>
                    <Box className={styles.eventNameHere}>
                      {event.location}
                    </Box>
                  </Box>
                  <Box className={styles.upcomingStatus}>
                    <Box className={styles.upcomingIcons}>
                      <Box className={getStatusIconClass(event.status)} />
                    </Box>
                    <Box className={getStatusClass(event.status)}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </Box>
                  </Box>
                  <Box className={styles.alexMartin}>
                    {/* Placeholder for assignee - in real app, fetch user name */}
                    {index % 2 === 0 ? 'Alex Martin' : 'Sarah Johnson'}
                  </Box>
                </Box>
                <Box className={styles.moreAssigneeData}>
                  <Box className={styles.moreAssigneeItems}>
                    <img
                      className={styles.moreAssigneeItemsChild}
                      loading="lazy"
                      alt="View"
                      src="/group-140.svg"
                    />
                    <img
                      className={styles.moreAssigneeItemsItem}
                      loading="lazy"
                      alt="Edit"
                      src="/group-1371.svg"
                    />
                    <img
                      className={styles.moreAssigneeItemsInner}
                      loading="lazy"
                      alt="Delete"
                      src="/group-1381.svg"
                    />
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt="More"
                      src="/group-1391.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            {index < events.length - 1 && (
              <Box className={styles.tableRows1}>
                <Box className={styles.componentRow} />
              </Box>
            )}
          </React.Fragment>
        ))
      )}
      <Box className={styles.tableItem} />
    </Box>
  );
};

export default Table1;
