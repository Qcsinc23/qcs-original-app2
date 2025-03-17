import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./EventsSummary.module.css";

export type EventsSummaryType = {
  className?: string;
};

const EventsSummary: FunctionComponent<EventsSummaryType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.eventsSummary, className].join(" ")}>
      <Box className={styles.summaryBackground} />
      <Typography
        className={styles.eventsSummary1}
        variant="inherit"
        component="h2"
        sx={{
          fontWeight: "600",
          fontSize: "var(--font-size-3xl)",
          lineHeight: "120%",
          letterSpacing: "-0.03em",
        }}
      >
        Events Summary
      </Typography>
      <Box className={styles.summarySeparator} />
      <Box className={styles.inProgress}>In Progress</Box>
      <Box className={styles.upcoming}>Upcoming</Box>
      <Box className={styles.eventCounts}>8</Box>
      <Box className={styles.eventCounts1}>15</Box>
      <Box className={styles.past}>Past</Box>
      <Box className={styles.totalEvents}>Total Events</Box>
      <Box className={styles.eventCounts2}>12</Box>
      <Box className={styles.eventCounts3}>35</Box>
    </Box>
  );
};

export default EventsSummary;
