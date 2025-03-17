import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu6.module.css";

export type LeftMenu6Type = {
  className?: string;
  logo?: string;

  /** Style props */
  leftMenuPosition?: CSSProperties["position"];
  leftMenuTop?: CSSProperties["top"];
  leftMenuLeft?: CSSProperties["left"];
};

const LeftMenu6: FunctionComponent<LeftMenu6Type> = ({
  className = "",
  leftMenuPosition,
  leftMenuTop,
  leftMenuLeft,
  logo,
}) => {
  const leftMenu1Style: CSSProperties = useMemo(() => {
    return {
      position: leftMenuPosition,
      top: leftMenuTop,
      left: leftMenuLeft,
    };
  }, [leftMenuPosition, leftMenuTop, leftMenuLeft]);

  return (
    <Box
      className={[styles.leftMenu, className].join(" ")}
      style={leftMenu1Style}
    >
      <Box className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
      <Box className={styles.menu}>
        <Box className={styles.brandwomenParent}>
          <img
            className={styles.brandwomenIcon}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <Box className={styles.abel}>
            <Box className={styles.abelChild} />
            <img className={styles.abelItem} alt="" src="/arrow-4.svg" />
          </Box>
          <img
            className={styles.brandwomenIcon}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <img
            className={styles.brandwomenIcon}
            loading="lazy"
            alt=""
            src="/placeholder@2x.png"
          />
        </Box>
        <Box className={styles.menuItemContainer}>
          <Box className={styles.dashboard}>Dashboard</Box>
          <Box className={styles.events}>Events</Box>
          <Box className={styles.logistics}>Logistics</Box>
          <Box className={styles.inventory}>Inventory</Box>
          <Box className={styles.submenuContainer}>
            <Box className={styles.deliveries}>Deliveries</Box>
            <Box className={styles.trackingItems}>
              <Box className={styles.liveTrackingMap}>Live Tracking Map</Box>
              <Box className={styles.statusUpdates}>Status Updates</Box>
              <Box className={styles.statusUpdates}>Proof of Delivery</Box>
            </Box>
            <Box className={styles.accountItems}>
              <Box className={styles.reports}>Reports</Box>
              <Box className={styles.users}>Users</Box>
            </Box>
            <Box className={styles.settings}>Settings</Box>
          </Box>
        </Box>
        <Box className={styles.layerPanel}>
          <Box className={styles.layerItems}>
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
              src="/layer-1-13.svg"
            />
            <img
              className={styles.layerItemsChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <Box className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-111.svg"
              />
              <Box className={styles.layer1} />
            </Box>
            <img
              className={styles.layerItemsItem}
              loading="lazy"
              alt=""
              src="/group-1132.svg"
            />
          </Box>
          <Box className={styles.frameGroup}>
            <img
              className={styles.layerItemsItem}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.brandwomenIcon2}
              loading="lazy"
              alt=""
              src="/vector.svg"
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

export default LeftMenu6;
