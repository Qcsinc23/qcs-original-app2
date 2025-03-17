import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import TableRows from "./TableRows";
import styles from "./BreadcrumbBar.module.css";

export type BreadcrumbBarType = {
  className?: string;
};

const BreadcrumbBar: FunctionComponent<BreadcrumbBarType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.breadcrumbBar, className].join(" ")}>
      <Box
        className={styles.dashboardEvents}
      >{`Dashboard > Events > List > Details`}</Box>
      <Box className={styles.main}>
        <Box className={styles.mainChild} />
        <Box className={styles.eventsTitleGoesHereParent}>
          <Typography
            className={styles.eventsTitleGoes}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "600",
              lineHeight: "120%",
              letterSpacing: "-0.03em",
            }}
          >
            Events title goes here
          </Typography>
          <Box className={styles.frameParent}>
            <Box className={styles.linkWrapper}>
              <Box className={styles.link} />
            </Box>
            <Box className={styles.upcoming}>Upcoming</Box>
          </Box>
        </Box>
        <Box className={styles.mainInner}>
          <Box className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-137.svg"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-138.svg"
            />
            <img className={styles.frameInner} alt="" src="/group-139.svg" />
          </Box>
        </Box>
      </Box>
      <Box className={styles.tabbedPane}>
        <Box className={styles.tabs}>
          <Box className={styles.tabsChild} />
          <Box className={styles.rectangleParent}>
            <Box className={styles.rectangleDiv} />
            <Box className={styles.logisticsPlan}>Logistics Plan</Box>
          </Box>
          <Box className={styles.inventoryWrapper}>
            <Box className={styles.inventory}>Inventory</Box>
          </Box>
          <Box className={styles.inventoryWrapper}>
            <Box className={styles.assignedPersonnel}>Assigned Personnel</Box>
          </Box>
          <Box className={styles.documentsWrapper}>
            <Box className={styles.documents}>Documents</Box>
          </Box>
        </Box>
        <Box className={styles.logisticsPlan1}>
          <Box className={styles.logisticsPlanChild} />
          <Typography
            className={styles.logisticsPlan2}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "600",
              fontSize: "var(--font-size-7xl)",
              lineHeight: "120%",
              letterSpacing: "-0.03em",
            }}
          >
            Logistics Plan
          </Typography>
          <Box className={styles.margin} />
          <Box className={styles.tableRows}>
            <Typography
              className={styles.taskName}
              variant="inherit"
              component="h3"
              sx={{
                fontWeight: "500",
                lineHeight: "200%",
                letterSpacing: "-0.02em",
              }}
            >
              Task name
            </Typography>
            <Box className={styles.assigneeRobertSteveParent}>
              <Box className={styles.assigneeRobertSteveContainer}>
                <Typography variant="inherit" component="span">
                  <Typography variant="inherit" component="span">
                    Assignee:
                  </Typography>
                </Typography>
                <Typography
                  className={styles.robertSteve}
                  variant="inherit"
                  component="span"
                >
                  <Typography
                    variant="inherit"
                    component="span"
                  >{` `}</Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontWeight: "500" }}
                  >
                    Robert Steve
                  </Typography>
                </Typography>
              </Box>
              <Box className={styles.dueDateDdMmYyyyWrapper}>
                <Box className={styles.dueDateDdMmYyyyContainer}>
                  <Typography
                    variant="inherit"
                    component="span"
                  >{`Due Date: `}</Typography>
                  <Typography
                    className={styles.ddMmYyyy}
                    variant="inherit"
                    component="span"
                    sx={{ fontWeight: "500" }}
                  >
                    dd-mm-yyyy
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.masterDataStructuresAlgori} />
          <TableRows />
          <Box className={styles.masterDataStructuresAlgori} />
          <TableRows spanColor="unset" />
          <Box className={styles.logisticsPlanItem} />
        </Box>
      </Box>
    </Box>
  );
};

export default BreadcrumbBar;
