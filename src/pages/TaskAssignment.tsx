import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import UserContainer from "../components/UserContainer";
import Modal from "../components/Modal";
import styles from "./TaskAssignment.module.css";

const TaskAssignment: FunctionComponent = () => {
  return (
    <Box className={styles.taskAssignment}>
      <Box className={styles.leftMenu}>
        <Box className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <Box className={styles.menuContent}>
          <Box className={styles.layersParent}>
            <Box className={styles.layers}>
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
                className={styles.layersChild}
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
            <Box className={styles.innerContentParent}>
              <Box className={styles.innerContent}>
                <Box className={styles.contentItems}>
                  <Box className={styles.events}>Events</Box>
                  <Box className={styles.logisticsParent}>
                    <Box className={styles.logistics}>Logistics</Box>
                    <Box className={styles.overviewParent}>
                      <Box className={styles.overview}>Overview</Box>
                      <Box className={styles.taskAssignment1}>
                        Task Assignment
                      </Box>
                      <Box className={styles.overview}>Route Planning</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.innerContentInner}>
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
              <Box className={styles.overview}>Vehicle Management</Box>
            </Box>
            <Box className={styles.settingsLabelsParent}>
              <Box className={styles.settingsLabels}>
                <Box className={styles.inventory}>Inventory</Box>
                <Box className={styles.deliveries}>Deliveries</Box>
                <Box className={styles.reports}>Reports</Box>
                <Box className={styles.users}>Users</Box>
                <Box className={styles.settings}>Settings</Box>
              </Box>
              <Box className={styles.frameWrapper}>
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
      </Box>
      <main className={styles.rightSidebar}>
        <section className={styles.sidebarContent}>
          <Box className={styles.frameContainer}>
            <Box className={styles.userHeaderWrapper}>
              <Box className={styles.userHeader}>
                <Box
                  className={styles.dashboardLogistics}
                >{`Dashboard > Logistics > Task Assignment`}</Box>
                <Typography
                  className={styles.taskAssignment2}
                  variant="inherit"
                  component="h2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "var(--font-size-11xl)",
                    lineHeight: "120%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Task Assignment
                </Typography>
              </Box>
            </Box>
            <UserContainer />
          </Box>
          <Modal />
        </section>
      </main>
    </Box>
  );
};

export default TaskAssignment;
