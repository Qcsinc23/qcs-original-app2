import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu1.module.css";

export type LeftMenu1Type = {
  className?: string;
};

const LeftMenu1: FunctionComponent<LeftMenu1Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.leftMenu, className].join(" ")}>
      <Box className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <Box className={styles.menuContent}>
        <Box className={styles.layerMenuParent}>
          <Box className={styles.layerMenu}>
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
              src="/layer-1-1.svg"
            />
            <img
              className={styles.layerMenuChild}
              loading="lazy"
              alt=""
              src="/group-1071.svg"
            />
          </Box>
          <Box className={styles.layer1Parent}>
            <Box className={styles.layer1}>
              <img
                className={styles.layer1Child}
                loading="lazy"
                alt=""
                src="/group-111.svg"
              />
            </Box>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.vectorIcon}
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
        <Box className={styles.content}>
          <Box className={styles.dashboard}>Dashboard</Box>
          <Box className={styles.tabs}>
            <Box className={styles.tabs}>
              <Box className={styles.tabContainer}>
                <Box className={styles.tabContent}>
                  <Box className={styles.dashboard}>Events</Box>
                  <Box className={styles.moreTabs}>
                    <Box className={styles.logistics}>Logistics</Box>
                    <Box className={styles.overviewAssignmentTab}>
                      <Box className={styles.overview}>Overview</Box>
                      <Box className={styles.overview}>Task Assignment</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.planningTab}>
                  <Box className={styles.frameParent}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/frame-2@2x.png"
                    />
                    <Box className={styles.rectangleParent}>
                      <Box className={styles.rectangleDiv} />
                      <img
                        className={styles.arrowIcon}
                        loading="lazy"
                        alt=""
                        src="/arrow-4.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.routePlanning}>Route Planning</Box>
            </Box>
            <Box className={styles.overview}>Vehicle Management</Box>
          </Box>
          <Box className={styles.bottomMenu}>
            <Box className={styles.settingsMenu}>
              <Box className={styles.inventory}>Inventory</Box>
              <Box className={styles.deliveries}>Deliveries</Box>
              <Box className={styles.deliveries}>Reports</Box>
              <Box className={styles.users}>Users</Box>
              <Box className={styles.deliveries}>Settings</Box>
            </Box>
            <Box className={styles.bottomMenuInner}>
              <Box className={styles.frameParent}>
                <Box className={styles.rectangleParent}>
                  <Box className={styles.rectangleDiv} />
                  <img
                    className={styles.frameChild2}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </Box>
                <Box className={styles.rectangleParent}>
                  <Box className={styles.rectangleDiv} />
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/arrow-4.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftMenu1;
