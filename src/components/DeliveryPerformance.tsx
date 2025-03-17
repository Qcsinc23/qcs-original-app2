import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./DeliveryPerformance.module.css";

export type DeliveryPerformanceType = {
  className?: string;
};

const DeliveryPerformance: FunctionComponent<DeliveryPerformanceType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.deliveryPerformance, className].join(" ")}>
      <Box className={styles.performanceMetrics} />
      <Typography
        className={styles.deliveryPerformance1}
        variant="inherit"
        component="h2"
        sx={{
          fontWeight: "600",
          fontSize: "var(--font-size-3xl)",
          lineHeight: "120%",
          letterSpacing: "-0.03em",
        }}
      >
        Delivery Performance
      </Typography>
      <Box className={styles.chartResize} />
      <Box className={styles.onTime}>On-time</Box>
      <Box className={styles.averageDeliveryTime}>Average Delivery Time</Box>
      <Box className={styles.delayed}>Delayed</Box>
      <Box className={styles.div}>55</Box>
      <Box className={styles.mins}>
        <span className={styles.minsTxt}>
          <Typography
            variant="inherit"
            component="span"
            sx={{ fontWeight: "600" }}
          >{`45 `}</Typography>
          <Typography
            variant="inherit"
            component="span"
            sx={{ fontWeight: "500", fontSize: "var(--font-size-xl)" }}
          >
            Mins
          </Typography>
        </span>
      </Box>
      <Box className={styles.div1}>15</Box>
    </Box>
  );
};

export default DeliveryPerformance;
