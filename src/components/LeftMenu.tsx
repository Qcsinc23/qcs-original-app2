import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu.module.css";

export type LeftMenuType = {
  className?: string;
};

const LeftMenu: FunctionComponent<LeftMenuType> = ({ className = "" }) => {
  return (
    <Box className={[styles.leftMenu, className].join(" ")}>
      <Box className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <Box className={styles.leftContent}>
        <Box className={styles.menuTop}>
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
              src="/layer-1-11.svg"
            />
          </Box>
          <Box className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <Box className={styles.layer1}>
              <img
                className={styles.layer1Child}
                loading="lazy"
                alt=""
                src="/group-111.svg"
              />
            </Box>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.digiboxxIcon}
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
        <Box className={styles.menuBottom}>
          <Box className={styles.menuOptions}>
            <Box className={styles.dashboard}>Dashboard</Box>
            <Box className={styles.eventMenu}>
              <Box className={styles.events}>Events</Box>
              <Box className={styles.calendarOptions}>
                <Box className={styles.eventList}>Event List</Box>
                <Box className={styles.eventList}>Event Calendar</Box>
              </Box>
            </Box>
            <Box className={styles.eventList}>Logistics</Box>
            <Box className={styles.inventory}>Inventory</Box>
            <Box className={styles.deliveries}>Deliveries</Box>
            <Box className={styles.reports}>Reports</Box>
            <Box className={styles.users}>Users</Box>
            <Box className={styles.settings}>Settings</Box>
          </Box>
        </Box>
        <Box className={styles.content}>
          <Box className={styles.contentTop}>
            <img
              className={styles.placeholderIcon}
              alt=""
              src="/placeholder@2x.png"
            />
            <Box className={styles.ravishankarkumarcdpngParent}>
              <Box className={styles.ravishankarkumarcdpng}>
                <Box className={styles.ravishankarkumarcdpngChild} />
                <img
                  className={styles.ravishankarkumarcdpngItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </Box>
              <Box className={styles.ravishankarkumarcdpng}>
                <Box className={styles.ravishankarkumarcdpngChild} />
                <img
                  className={styles.ravishankarkumarcdpngItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </Box>
              <Box className={styles.ravishankarkumarcdpng}>
                <Box className={styles.ravishankarkumarcdpngChild} />
                <img
                  className={styles.ravishankarkumarcdpngItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftMenu;
