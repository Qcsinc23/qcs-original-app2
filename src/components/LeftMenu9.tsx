import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./LeftMenu9.module.css";

export type LeftMenu9Type = {
  className?: string;
};

const LeftMenu9: FunctionComponent<LeftMenu9Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.leftMenu, className].join(" ")}>
      <Box className={styles.menuBackground} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <Box className={styles.links}>
        <Box className={styles.dashboard}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-11.svg"
          />
          <Typography
            className={styles.dashboard1}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Dashboard
          </Typography>
        </Box>
        <Box className={styles.events}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-1-14.svg"
          />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Events
          </Typography>
          <img
            className={styles.eventsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
        </Box>
        <Box className={styles.logistics}>
          <Typography
            className={styles.logistics1}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Logistics
          </Typography>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-1074.svg"
          />
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
          </Box>
        </Box>
        <Box className={styles.inventory}>
          <img
            className={styles.inventoryChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <Typography
            className={styles.inventory1}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Inventory
          </Typography>
          <img
            className={styles.inventoryItem}
            loading="lazy"
            alt=""
            src="/group-1114.svg"
          />
          <Box className={styles.layer1} />
        </Box>
        <Box className={styles.deliveries}>
          <Box className={styles.rectangleGroup}>
            <Box className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
          </Box>
          <Typography
            className={styles.deliveries1}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Deliveries
          </Typography>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-1135.svg"
          />
        </Box>
        <Box className={styles.reports}>
          <Typography
            className={styles.reports1}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "600",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Reports
          </Typography>
          <img
            className={styles.reportsChild}
            loading="lazy"
            alt=""
            src="/group-1144.svg"
          />
        </Box>
        <Box className={styles.users}>
          <Typography
            className={styles.users1}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Users
          </Typography>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </Box>
        <Box className={styles.settings}>
          <Typography
            className={styles.settings1}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Settings
          </Typography>
          <img
            className={styles.layer1Icon2}
            loading="lazy"
            alt=""
            src="/layer-1-2.svg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftMenu9;
