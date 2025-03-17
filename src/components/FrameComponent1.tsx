import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  dashboardLogisticsVehicleMan?: string;

  /** Style props */
  dashboardLogisticsDisplay?: CSSProperties["display"];
  dashboardLogisticsMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  dashboardLogisticsVehicleMan,
  dashboardLogisticsDisplay,
  dashboardLogisticsMinWidth,
}) => {
  const dashboardLogisticsStyle: CSSProperties = useMemo(() => {
    return {
      display: dashboardLogisticsDisplay,
      minWidth: dashboardLogisticsMinWidth,
    };
  }, [dashboardLogisticsDisplay, dashboardLogisticsMinWidth]);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <Box className={styles.dashboardLogisticsVehiclWrapper}>
        <Box
          className={styles.dashboardLogistics}
          style={dashboardLogisticsStyle}
        >
          {dashboardLogisticsVehicleMan}
        </Box>
      </Box>
      <Box className={styles.userIconParent}>
        <Box className={styles.userIcon}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </Box>
        <Box className={styles.user}>
          <Box className={styles.userChild} />
          <img
            className={styles.userImageIcon}
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <Box className={styles.userName}>
            <Box className={styles.sherwynGraham}>{`Sherwyn Graham `}</Box>
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default FrameComponent1;
