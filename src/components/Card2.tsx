import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Card2.module.css";

export type Card2Type = {
  className?: string;
  push?: string;

  /** Style props */
  card3Top?: CSSProperties["top"];
  card3Left?: CSSProperties["left"];
};

const Card2: FunctionComponent<Card2Type> = ({
  className = "",
  card3Top,
  card3Left,
  push,
}) => {
  const card3Style: CSSProperties = useMemo(() => {
    return {
      top: card3Top,
      left: card3Left,
    };
  }, [card3Top, card3Left]);

  return (
    <Box className={[styles.card3, className].join(" ")} style={card3Style}>
      <Box className={styles.card3Child} />
      <Box className={styles.frameParent}>
        <Box className={styles.alertIconsParent}>
          <img
            className={styles.alertIcons}
            loading="lazy"
            alt=""
            src="/vector-21.svg"
          />
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <Box className={styles.frameItem} />
          </Box>
        </Box>
        <Box className={styles.alertNameWrapper}>
          <Box className={styles.alert - name2}>Alert Name</Box>
        </Box>
        <Box className={styles.triggerTypeContentWrapper}>
          <Box className={styles.triggerTypeContent}>
            <Box className={styles.trigger - type - low - container}>
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
            <Box className={styles.trigger - type - low - container}>
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
                {push}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.buttonParent}>
        <Box className={styles.button}>
          <Box className={styles.buttonChild} />
          <Box className={styles.editButtons}>
            <img
              className={styles.editButtonsChild}
              loading="lazy"
              alt=""
              src="/group-1373.svg"
            />
          </Box>
          <Box className={styles.edit}>Edit</Box>
        </Box>
        <Box className={styles.button1}>
          <Box className={styles.buttonItem} />
          <Box className={styles.deleteIcons}>
            <img
              className={styles.deleteIconsChild}
              loading="lazy"
              alt=""
              src="/group-1392.svg"
            />
          </Box>
          <Box className={styles.delete}>Delete</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card2;
