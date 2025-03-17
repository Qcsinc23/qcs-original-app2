import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Modal2.module.css";

export type Modal2Type = {
  className?: string;
};

const Modal2: FunctionComponent<Modal2Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.modal, className].join(" ")}>
      <Box className={styles.modalChild} />
      <Box className={styles.vehicleDetailsPanelParent}>
        <Box className={styles.vehicleDetailsPanel}>Vehicle Details Panel</Box>
        <Box className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-2091.svg"
          />
        </Box>
      </Box>
      <Box className={styles.modalInner}>
        <Box className={styles.frameItem} />
      </Box>
      <Box className={styles.frameParent}>
        <Box className={styles.vehicleIdParent}>
          <Box className={styles.vehicleId}>Vehicle ID:</Box>
          <Box className={styles.driverName}>Driver Name:</Box>
          <Box className={styles.currentSpeed}>Current Speed:</Box>
          <Box className={styles.eta}>(ETA):</Box>
          <Box className={styles.status}>Status:</Box>
        </Box>
        <Box className={styles.vehicleIdParent}>
          <Box className={styles.kmperHour}>1D7HA18D44J218509</Box>
          <Box className={styles.ronaldGrey}>Ronald Grey</Box>
          <Box className={styles.kmperHour}>80KM/Per Hour</Box>
          <Box className={styles.minutes}>15 Minutes</Box>
          <Box className={styles.enRoute}>En Route</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal2;
