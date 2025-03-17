import { FunctionComponent, useMemo, type CSSProperties, ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  dashboardEventsCreateNewEve?: string;
  createNewEvent?: string;
  button?: string | ReactNode;

  /** Style props */
  dashboardEventsDisplay?: CSSProperties["display"];
  buttonWidth?: CSSProperties["width"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  dashboardEventsCreateNewEve,
  dashboardEventsDisplay,
  createNewEvent,
  button,
  buttonWidth,
  buttonAlignSelf,
}) => {
  const dashboardEventsStyle: CSSProperties = useMemo(() => {
    return {
      display: dashboardEventsDisplay,
    };
  }, [dashboardEventsDisplay]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      alignSelf: buttonAlignSelf,
    };
  }, [buttonWidth, buttonAlignSelf]);

  return (
    <Box className={[styles.frameParent, className].join(" ")}>
      <Box className={styles.frameWrapper}>
        <Box className={styles.dashboardEventsCreateNeParent}>
          <Box className={styles.dashboardEvents} style={dashboardEventsStyle}>
            {dashboardEventsCreateNewEve}
          </Box>
          <Typography
            className={styles.createNewEvent}
            variant="inherit"
            component="h3"
            sx={{
              fontWeight: "600",
              fontSize: "var(--font-size-11xl)",
              lineHeight: "120%",
              letterSpacing: "-0.03em",
            }}
          >
            {createNewEvent}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.frameGroup}>
        <Box className={styles.avatarWrapper}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </Box>
        <Box className={styles.userParent}>
          <Box 
            className={styles.user}
            onClick={() => window.location.href = '/user-profile'} 
            sx={{ cursor: 'pointer' }}
          >
            <Box className={styles.userChild} />
            <img
              className={styles.buttonBackgroundIcon}
              loading="lazy"
              alt="Profile"
              src="/rectangle-2@2x.png"
            />
            <Box className={styles.sherwynGrahamWrapper}>
              <Box className={styles.sherwynGraham}>{`Sherwyn Graham `}</Box>
            </Box>
          </Box>
          {typeof button === 'string' ? (
            <Button
              className={styles.button}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#1a3e59",
                fontSize: "18",
                borderColor: "#1a3e59",
                borderRadius: "10px",
                "&:hover": { borderColor: "#1a3e59" },
                width: 180,
                height: 50,
              }}
              style={buttonStyle}
            >
              {button}
            </Button>
          ) : (
            button
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FrameComponent3;
