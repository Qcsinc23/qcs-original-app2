import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu5.module.css";

export type LeftMenu5Type = {
  className?: string;
};

const LeftMenu5: FunctionComponent<LeftMenu5Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.leftMenu, className].join(" ")}>
      <Box className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <Box className={styles.links}>
        <Box className={styles.dashboard}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-11.svg"
          />
          <Box className={styles.dashboard1}>Dashboard</Box>
        </Box>
        <Box className={styles.events}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-1-13.svg"
          />
          <Box className={styles.events1}>Events</Box>
          <img
            className={styles.eventsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
        </Box>
        <Box className={styles.logistics}>
          <Box className={styles.logistics1}>Logistics</Box>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-107.svg"
          />
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </Box>
        </Box>
        <Box className={styles.inventory}>
          <Box className={styles.rectangleGroup}>
            <Box className={styles.frameChild} />
            <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
          </Box>
          <Box className={styles.inventory1}>Inventory</Box>
          <img
            className={styles.inventoryChild}
            loading="lazy"
            alt=""
            src="/group-1112.svg"
          />
          <Box className={styles.layer1} />
          <Box className={styles.inventoryList}>Inventory List</Box>
          <Box
            className={styles.alertsNotifications}
          >{`Alerts & Notifications`}</Box>
        </Box>
        <Box className={styles.deliveries}>
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </Box>
          <Box className={styles.deliveries1}>Deliveries</Box>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-113.svg"
          />
        </Box>
        <Box className={styles.reports}>
          <Box className={styles.reports1}>Reports</Box>
          <img
            className={styles.reportsChild}
            loading="lazy"
            alt=""
            src="/group-114.svg"
          />
        </Box>
        <Box className={styles.users}>
          <Box className={styles.users1}>Users</Box>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </Box>
        <Box className={styles.settings}>
          <Box className={styles.settings1}>Settings</Box>
          <img
            className={styles.layer1Icon2}
            loading="lazy"
            alt=""
            src="/layer-1-2.svg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftMenu5;
