import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./EventRows.module.css";

export type EventRowsType = {
  className?: string;
  timePlaceholder?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  groupBoxBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleBoxBackgroundColor?: CSSProperties["backgroundColor"];
  frameBoxWidth?: CSSProperties["width"];
  boxWidth?: CSSProperties["width"];
  frameBoxWidth1?: CSSProperties["width"];
};

const EventRows: FunctionComponent<EventRowsType> = ({
  className = "",
  timePlaceholder,
  groupBoxBackgroundColor,
  rectangleBoxBackgroundColor,
  frameBoxWidth,
  prop,
  boxWidth,
  frameBoxWidth1,
  prop1,
  prop2,
}) => {
  const groupBox2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: groupBoxBackgroundColor,
    };
  }, [groupBoxBackgroundColor]);

  const rectangleBox1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleBoxBackgroundColor,
    };
  }, [rectangleBoxBackgroundColor]);

  const frameBox2Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth,
    };
  }, [frameBoxWidth]);

  const box1Style: CSSProperties = useMemo(() => {
    return {
      width: boxWidth,
    };
  }, [boxWidth]);

  const frameBox3Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth1,
    };
  }, [frameBoxWidth1]);

  return (
    <Box className={[styles.eventRows, className].join(" ")}>
      <Box className={styles.eventColumns}>
        <Box className={styles.eventCells}>
          <Box className={styles.timeSlots}>
            <Box className={styles.timePlaceholder}>{timePlaceholder}</Box>
          </Box>
          <Box className={styles.rectangleParent} style={groupBox2Style}>
            <Box className={styles.frameChild} style={rectangleBox1Style} />
            <Box className={styles.eventName000000Container}>
              <Typography
                className={styles.eventName}
                variant="inherit"
                sx={{ fontWeight: "600" }}
              >
                Event name
              </Typography>
              <Typography className={styles.p} variant="inherit">
                00:00:00
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={styles.wrapper} style={frameBox2Style}>
          <Box className={styles.div} style={box1Style}>
            {prop}
          </Box>
        </Box>
        <Box className={styles.container} style={frameBox3Style}>
          <Box className={styles.div1}>{prop1}</Box>
        </Box>
        <Box className={styles.frame}>
          <Box className={styles.div2}>{prop2}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventRows;
