import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./InventoryMetrics.module.css";

export type InventoryMetricsType = {
  className?: string;
};

const InventoryMetrics: FunctionComponent<InventoryMetricsType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.inventoryMetrics, className].join(" ")}>
      <Box className={styles.inventoryMetricsChild} />
      <Typography
        className={styles.inventoryMetrics1}
        variant="inherit"
        component="h2"
        sx={{
          fontWeight: "600",
          fontSize: "var(--font-size-3xl)",
          lineHeight: "120%",
          letterSpacing: "-0.03em",
        }}
      >
        Inventory Metrics
      </Typography>
      <Box className={styles.inventoryMetricsItem} />
      <Box className={styles.lowStockItems}>Low Stock Items</Box>
      <Box className={styles.inventoryTurnoverRates}>
        Inventory Turnover Rates
      </Box>
      <Box className={styles.div}>13</Box>
      <Box className={styles.div1}>$0.00</Box>
    </Box>
  );
};

export default InventoryMetrics;
