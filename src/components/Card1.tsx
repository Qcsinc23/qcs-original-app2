import { FunctionComponent, useMemo, useCallback, type CSSProperties } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./Card1.module.css";

export type Card1Type = {
  className?: string;
  inApp?: string;

  /** Style props */
  card2BoxShadow?: CSSProperties["boxShadow"];
  rectangleBoxBoxShadow?: CSSProperties["boxShadow"];
  statusIconShapeLeft?: CSSProperties["left"];
  statusIconShapeBackgroundColor?: CSSProperties["backgroundColor"];
  statusIconShapeBoxShadow?: CSSProperties["boxShadow"];
};

const Card1: FunctionComponent<Card1Type> = ({
  className = "",
  card2BoxShadow,
  rectangleBoxBoxShadow,
  statusIconShapeLeft,
  statusIconShapeBackgroundColor,
  statusIconShapeBoxShadow,
  inApp,
}) => {
  const card2Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: card2BoxShadow,
    };
  }, [card2BoxShadow]);

  const rectangleBox2Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: rectangleBoxBoxShadow,
    };
  }, [rectangleBoxBoxShadow]);

  const statusIconShapeStyle: CSSProperties = useMemo(() => {
    return {
      left: statusIconShapeLeft,
      backgroundColor: statusIconShapeBackgroundColor,
      boxShadow: statusIconShapeBoxShadow,
    };
  }, [
    statusIconShapeLeft,
    statusIconShapeBackgroundColor,
    statusIconShapeBoxShadow,
  ]);

  return (
    <Box className={[styles.card2, className].join(" ")} style={card2Style}>
      <Box className={styles.card2Child} style={rectangleBox2Style} />
      <Box className={styles.frameParent}>
        <Box className={styles.alertStatusIconsParent}>
          <img
            className={styles.alertStatusIcons}
            loading="lazy"
            alt=""
            src="/vector-21.svg"
          />
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <Box
              className={styles.statusIconShape}
              style={statusIconShapeStyle}
            />
          </Box>
        </Box>
        <Box className={styles.alertNameWrapper}>
          <Box className={styles["alert-name"]}>Alert Name</Box>
        </Box>
        <Box className={styles.frameWrapper}>
          <Box className={styles.triggerTypeLowStock10Parent}>
            <Box className={styles["trigger-type-low-container"]}>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontWeight: "500" }}
              >{`Trigger Type: `}</Typography>
              <Typography
                className={styles.lowStock}
                variant="inherit"
                component="span"
                sx={{ fontWeight: "600" }}
              >{`"Low Stock < 10"`}</Typography>
            </Box>
            <Box className={styles["trigger-type-low-container"]}>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontWeight: "500" }}
              >{`Notification Channels: `}</Typography>
              <Typography
                className={styles.lowStock}
                variant="inherit"
                component="span"
                sx={{ fontWeight: "600" }}
              >
                {inApp}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={styles.frequencyImmediateWrapper}>
          <Box className={styles["trigger-type-low-container"]}>
            <Typography
              variant="inherit"
              component="span"
              sx={{ fontWeight: "500" }}
            >{`Frequency: `}</Typography>
            <Typography
              className={styles.lowStock}
              variant="inherit"
              component="span"
              sx={{ fontWeight: "600" }}
            >
              Immediate
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.buttonParent}>
        <Button
          className={styles.button}
          aria-label="Edit"
          startIcon={
            <img width="20.9px" height="20.9px" src="/group-137.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#ff6f3c",
            borderRadius: "10px",
            "&:hover": { background: "#ff6f3c" },
          }}
        >
          Edit
        </Button>
        <Button
          className={styles.button1}
          aria-label="Delete"
          startIcon={<img width="18px" height="20px" src="/group-139.svg" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#1a3e59",
            fontSize: "18",
            borderColor: "#1a3e59",
            borderRadius: "10px",
            "&:hover": { borderColor: "#1a3e59" },
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default Card1;
