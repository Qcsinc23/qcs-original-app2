import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import LeftMenu6 from "../components/LeftMenu6";
import User from "../components/User1";
import Map1 from "../components/Map1";
import Modal2 from "../components/Modal2";
import styles from "./VehicleDetailsModal.module.css";

const VehicleDetailsModal: FunctionComponent = () => {
  return (
    <Box className={styles.vehicleDetailsModal}>
      <main className={styles.bg}>
        <LeftMenu6
          leftMenuPosition="absolute"
          leftMenuTop="0px"
          leftMenuLeft="0px"
          logo="/logo1.svg"
        />
        <Box
          className={styles.dashboardDelivery}
        >{`Dashboard > Delivery > Live Tracking Map`}</Box>
        <User />
        <img
          className={styles.deliveryIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <Typography
          className={styles.deliveryTracking}
          variant="inherit"
          component="h3"
          sx={{
            fontWeight: "600",
            fontSize: "var(--font-size-11xl)",
            lineHeight: "120%",
            letterSpacing: "-0.03em",
          }}
        >
          Delivery Tracking
        </Typography>
        <Box className={styles.button}>
          <Box className={styles.buttonChild} />
          <Box className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </Box>
          <Box className={styles.filterMap}>Filter Map</Box>
        </Box>
        <Box className={styles.button1}>
          <Box className={styles.buttonItem} />
          <Box className={styles.vectorContainer}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </Box>
          <Box className={styles.refreshMap}>Refresh Map</Box>
        </Box>
        <Box className={styles.button2}>
          <Box className={styles.buttonChild} />
          <Box className={styles.outWrapper}>
            <img
              className={styles.outIcon}
              loading="lazy"
              alt=""
              src="/out.svg"
            />
          </Box>
          <Box className={styles.legends}>Legends</Box>
        </Box>
        <Map1
          mapAlignSelf="unset"
          mapPosition="absolute"
          mapTop="211px"
          mapLeft="390px"
          mapWidth="1480px"
        />
        <section className={styles.modalBackground} />
      </main>
      <Modal2 />
    </Box>
  );
};

export default VehicleDetailsModal;
