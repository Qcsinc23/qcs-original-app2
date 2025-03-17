import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <Box className={[styles.header, className].join(" ")}>
      <Box className={styles.headerChild} />
      <Box className={styles.headerRow}>
        <Box className={styles.deliveryIdCell}>
          <Box className={styles.cellBackground} />
        </Box>
        <Box className={styles.deliveryId}>Delivery ID</Box>
      </Box>
      <Box className={styles.headerItems}>
        <Box className={styles.relatedEvent}>Related Event</Box>
        <Box className={styles.relatedEvent}>Driver Assigned</Box>
        <Box className={styles.relatedEvent}>Pickup Location</Box>
        <Box className={styles.relatedEvent}>Drop-off Location</Box>
        <Box className={styles.relatedEvent}>Scheduled Time</Box>
        <Box className={styles.status}>Status</Box>
      </Box>
      <Box className={styles.eta}>ETA</Box>
    </Box>
  );
};

export default Header;
