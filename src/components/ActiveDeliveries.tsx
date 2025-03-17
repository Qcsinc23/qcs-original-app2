import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import HorizontalBarChartXS from "./HorizontalBarChartXS";
import HorizontalBarChartS from "./HorizontalBarChartS";
import HorizontalBarChartM from "./HorizontalBarChartM";
import HorizontalBarChartL from "./HorizontalBarChartL";
import HorizontalBarChartXL from "./HorizontalBarChartXL";
import styles from "./ActiveDeliveries.module.css";

export type ActiveDeliveriesType = {
  className?: string;
};

const ActiveDeliveries: FunctionComponent<ActiveDeliveriesType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.activeDeliveries, className].join(" ")}>
      <Typography
        className={styles.activeDeliveries1}
        variant="inherit"
        component="h1"
        sx={{ fontWeight: "600", lineHeight: "120%", letterSpacing: "-0.03em" }}
      >
        Active Deliveries
      </Typography>
      <Box className={styles.activeDeliveriesChild} />
      <Box className={styles.resize}>
        <Box className={styles.vertical} />
        <Box className={styles.vertical}>
          <HorizontalBarChartXS />
        </Box>
        <Box className={styles.horizontal1}>
          <HorizontalBarChartS />
        </Box>
        <Box className={styles.horizontal2}>
          <HorizontalBarChartM />
        </Box>
        <Box className={styles.horizontal3}>
          <HorizontalBarChartL />
        </Box>
        <Box className={styles.horizontal4}>
          <HorizontalBarChartXL />
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveDeliveries;
