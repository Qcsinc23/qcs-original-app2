import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu7.module.css";

export type LeftMenu7Type = {
  className?: string;
};

const LeftMenu7: FunctionComponent<LeftMenu7Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.leftMenu, className].join(" ")}>
      <Box className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <Box className={styles.menu}>
        <Box className={styles.menuIcons}>
          <img
            className={styles.menuIconsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </Box>
          <img
            className={styles.menuIconsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <img
            className={styles.menuIconsChild}
            loading="lazy"
            alt=""
            src="/placeholder@2x.png"
          />
        </Box>
        <Box className={styles.menuItems}>
          <Box className={styles.dashboard}>Dashboard</Box>
          <Box className={styles.events}>Events</Box>
          <Box className={styles.logistics}>Logistics</Box>
          <Box className={styles.inventory}>Inventory</Box>
          <Box className={styles.deliveriesMenu}>
            <Box className={styles.deliveries}>Deliveries</Box>
            <Box className={styles.trackingMenu}>
              <Box className={styles.liveTrackingMap}>Live Tracking Map</Box>
              <Box className={styles.liveTrackingMap}>Status Updates</Box>
              <Box className={styles.proofOfDelivery}>Proof of Delivery</Box>
            </Box>
            <Box className={styles.reportsMenu}>
              <Box className={styles.reports}>Reports</Box>
              <Box className={styles.users}>Users</Box>
            </Box>
            <Box className={styles.settings}>Settings</Box>
          </Box>
        </Box>
        <Box className={styles.layersMenu}>
          <Box className={styles.layer1Parent}>
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-11.svg"
            />
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1-14.svg"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-1073.svg"
            />
            <Box className={styles.frameParent}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1113.svg"
              />
              <Box className={styles.layer1} />
            </Box>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-1133.svg"
            />
          </Box>
          <Box className={styles.frameGroup}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-1142.svg"
            />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector2.svg"
            />
            <img
              className={styles.layer1Icon2}
              loading="lazy"
              alt=""
              src="/layer-1-2.svg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftMenu7;
