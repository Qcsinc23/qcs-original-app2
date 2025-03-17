import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  immediate?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "", immediate }) => {
  return (
    <Box className={[styles.card1, className].join(" ")}>
      <Box className={styles.card1Child} />
      <Box className={styles.cardContentContainer}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
        <Box className={styles.rectangleParent}>
          <Box className={styles.frameChild} />
          <Box className={styles.alertNameField} />
        </Box>
      </Box>
      <Box className={styles.alertActionsContainer}>
        <Box className={styles.alertName}>Alert Name</Box>
      </Box>
      <Box className={styles.notificationChannelContainerWrapper}>
        <Box className={styles.notificationChannelContainer}>
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
      </Box>
      <Box className={styles.frequencyContainer}>
        <Box className={styles.triggerTypeLowContainer}>
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
            {immediate}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.alertEditActions}>
        <Button
          className={styles.button}
          startIcon={
            <img width="20.9px" height="20.9px" src="/group-1371.svg" />
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
          startIcon={<img width="18px" height="20px" src="/group-1391.svg" />}
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

export default Card;
