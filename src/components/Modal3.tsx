import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./Modal3.module.css";

export type Modal3Type = {
  className?: string;
};

const Modal3: FunctionComponent<Modal3Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.modal, className].join(" ")}>
      <Box className={styles.button}>
        <Box className={styles.buttonChild} />
        <Box className={styles.updateStatus}>Update Status</Box>
      </Box>
      <Box className={styles.modalChild} />
      <Box className={styles.modalHeader}>
        <Typography
          className={styles.deliveryDetails}
          variant="inherit"
          component="h3"
          sx={{
            fontWeight: "600",
            lineHeight: "120%",
            letterSpacing: "-0.03em",
          }}
        >
          Delivery Details
        </Typography>
        <Box className={styles.modalCloseIcon}>
          <img
            className={styles.modalCloseIconChild}
            alt=""
            src="/group-2092.svg"
          />
        </Box>
      </Box>
      <Box className={styles.modalContentSeparator}>
        <Box className={styles.firstSeparator} />
      </Box>
      <Box className={styles.deliveryInformationParent}>
        <Box className={styles.deliveryInformation}>Delivery Information:</Box>
        <Box className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Box>
      </Box>
      <Box className={styles.secondSeparator} />
      <Box className={styles.locationContainerParent}>
        <Box className={styles.locationContainer}>
          <Box className={styles.locationDetails}>
            <Box className={styles.pickupLocation}>Pickup Location:</Box>
            <Box className={styles.pickupLocation}>Dropoff Location:</Box>
          </Box>
          <Box className={styles.statusHistory}>Status History:</Box>
        </Box>
        <Box className={styles.locationView}>
          <Box className={styles.locationDetails}>
            <Box className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </Box>
            <Box className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </Box>
          </Box>
          <Box className={styles.mapViewButton}>
            <Box className={styles.mapView}>Map View:</Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.orderStatusContainerParent}>
        <Box className={styles.orderStatusContainer}>
          <Box className={styles.orderStatusListParent}>
            <Box className={styles.orderStatusList}>
              <Box className={styles.orderStatusDate}>
                <Box className={styles.nov14}>
                  <Typography className={styles.p} variant="inherit">
                    12:20
                  </Typography>
                  <Typography className={styles.p} variant="inherit">
                    Nov 14
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.orderStatusIcons}>
                <Box className={styles.statusCircle} />
              </Box>
              <Box className={styles.orderReceived}>Order Received</Box>
            </Box>
            <Box className={styles.orderStatusList}>
              <Box className={styles.orderStatusDate}>
                <Box className={styles.nov14}>
                  <Typography className={styles.p} variant="inherit">
                    12:20
                  </Typography>
                  <Typography className={styles.p} variant="inherit">
                    Nov 14
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.orderStatusIcons}>
                <Box className={styles.frameChild} />
              </Box>
              <Box className={styles.shipped}>Shipped</Box>
            </Box>
            <Box className={styles.orderStatusList}>
              <Box className={styles.orderStatusDate}>
                <Box className={styles.nov14}>
                  <Typography className={styles.p} variant="inherit">
                    12:20
                  </Typography>
                  <Typography className={styles.p} variant="inherit">
                    Nov 14
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.orderStatusIcons}>
                <Box className={styles.frameChild} />
              </Box>
              <Box className={styles.arrivingNov18}>Arriving Nov 18 - 22</Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.modalFooter}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group31.svg"
          />
          <Button
            className={styles.button1}
            startIcon={<img width="24px" height="20px" src="/vector-4.svg" />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#ff6f3c",
              borderRadius: "10px",
              "&:hover": { background: "#ff6f3c" },
              width: 220,
              height: 50,
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal3;
