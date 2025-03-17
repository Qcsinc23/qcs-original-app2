import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Card3.module.css";

export type Card3Type = {
  className?: string;
};

const Card3: FunctionComponent<Card3Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.card1, className].join(" ")}>
      <Box className={styles.card1Child} />
      <Box className={styles.cardIconsParent}>
        <img
          className={styles.cardIcons}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
        <Box className={styles.rectangleParent}>
          <Box className={styles.frameChild} />
          <Box className={styles.alertNames} />
        </Box>
      </Box>
      <Box className={styles.alertNameWrapper}>
        <Box className={styles.alertName}>Alert Name</Box>
      </Box>
      <Box className={styles.triggerTypeLowStock10Wrapper}>
        <Box className={styles.triggerTypeLowContainer}>
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
      </Box>
      <Box className={styles.emailChannel}>
        <Box className={styles.triggerTypeLowContainer}>
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
            Email
          </Typography>
        </Box>
      </Box>
      <Box className={styles.pushChannel}>
        <Box className={styles.button}>
          <Box className={styles.buttonChild} />
          <Box className={styles.pushEditButtons}>
            <img
              className={styles.pushEditButtonsChild}
              loading="lazy"
              alt=""
              src="/group-1373.svg"
            />
          </Box>
          <Box className={styles.edit}>Edit</Box>
        </Box>
        <Box className={styles.button1}>
          <Box className={styles.buttonItem} />
          <Box className={styles.pushDeleteIcons}>
            <img
              className={styles.pushDeleteIconsChild}
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

export default Card3;
