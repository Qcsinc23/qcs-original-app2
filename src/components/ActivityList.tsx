import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./ActivityList.module.css";

export type ActivityListType = {
  className?: string;
  assignedATask?: string;
  robertSteve?: string;
  justNow?: string;
  assignedATask1?: string;
  robertSteve1?: string;

  /** Style props */
  frameDivHeight?: CSSProperties["height"];
};

const ActivityList: FunctionComponent<ActivityListType> = ({
  className = "",
  assignedATask,
  robertSteve,
  frameDivHeight,
  justNow,
  assignedATask1,
  robertSteve1,
}) => {
  const frameBoxStyle: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  return (
    <Box className={[styles.activityList, className].join(" ")}>
      <Box className={styles.activityItems}>
        <Typography
          className={styles.sherwynGrahamAssignedContainer}
          component="h3"
          sx={{
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "200%",
            letterSpacing: "-0.02em",
          }}
        >
          <span>
            <Typography variant="inherit" component="span">
              Sherwyn Graham
            </Typography>
            <Typography
              className={styles.assignedATask}
              variant="inherit"
              component="span"
            >
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: "500" }}
              >{` `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontWeight: "600" }}
              >
                {assignedATask1}
              </Typography>
            </Typography>
            <Typography variant="inherit" component="span">
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: "500" }}
              >{` `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "var(--font-poppins)" }}
              >{`to `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontWeight: "600" }}
              >
                {robertSteve1}
              </Typography>
            </Typography>
          </span>
        </Typography>
        <Box className={styles.activityDetails}>
          <Box className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Box>
          <Box className={styles.timeWrapper} style={frameBoxStyle}>
            <Box className={styles.time}>
              <Box className={styles.justNow}>{justNow}</Box>
              <Box className={styles.feedItemIcon}>
                <Box className={styles.adobedbcpng} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.uberbcbapng} />
    </Box>
  );
};

export default ActivityList;
