import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import DoughnutChartXS from "./DoughnutChartXS";
import DoughnutChartS from "./DoughnutChartS";
import DoughnutChartM from "./DoughnutChartM";
import DoughnutChartL from "./DoughnutChartL";
import DoughnutChartXL from "./DoughnutChartXL";
import styles from "./ResourceUtilization.module.css";

export type ResourceUtilizationType = {
  className?: string;
};

const ResourceUtilization: FunctionComponent<ResourceUtilizationType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.resourceUtilization, className].join(" ")}>
      <Typography
        className={styles.active - deliveries}
        variant="inherit"
        component="h1"
        sx={{ fontWeight: "600", lineHeight: "120%", letterSpacing: "-0.03em" }}
      >
        Resource Utilization
      </Typography>
      <Box className={styles.utilizationBackground} />
      <Box className={styles.resize}>
        <Box className={styles.vertical}>
          <Box className={styles.horizontal}>
            <DoughnutChartXS />
          </Box>
          <Box className={styles.horizontal1}>
            <DoughnutChartS />
          </Box>
          <Box className={styles.horizontal2}>
            <DoughnutChartM />
          </Box>
          <Box className={styles.horizontal3}>
            <DoughnutChartL />
          </Box>
          <Box className={styles.horizontal4}>
            <DoughnutChartXL />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResourceUtilization;
