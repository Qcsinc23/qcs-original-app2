import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./Modal4.module.css";

export type Modal4Type = {
  className?: string;
};

const Modal4: FunctionComponent<Modal4Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.modal, className].join(" ")}>
      <Box className={styles.modalChild} />
      <Box className={styles.modalContent}>
        <Box className={styles.modalHeader}>
          <Typography
            className={styles.proofDetails}
            variant="inherit"
            component="h3"
            sx={{
              fontWeight: "600",
              lineHeight: "120%",
              letterSpacing: "-0.03em",
            }}
          >
            Proof Details
          </Typography>
          <Box className={styles.closeIcon}>
            <img
              className={styles.closeIconChild}
              loading="lazy"
              alt=""
              src="/group-2092.svg"
            />
          </Box>
        </Box>
        <Box className={styles.headerSeparator}>
          <Box className={styles.headerSeparatorChild} />
        </Box>
        <Box className={styles.deliveryInformation}>
          <Box className={styles.digitalSignature}>Delivery Information:</Box>
          <Box className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Box>
        </Box>
        <Box className={styles.location}>
          <Box className={styles.locationItems}>
            <Box className={styles.pickupLocation}>Pickup Location:</Box>
            <Box className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </Box>
          </Box>
          <Box className={styles.locationItems1}>
            <Box className={styles.pickupLocation}>Dropoff Location:</Box>
            <Box className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.signaturePhotos}>
        <Box className={styles.signaturePhoto}>
          <Box className={styles.signature}>
            <Box className={styles.signatureData}>
              <Box className={styles.digitalSignature}>Digital Signature:</Box>
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
            </Box>
            <Box className={styles.proofPhotos}>
              <Box className={styles.photos}>Photos:</Box>
              <Box className={styles.photoGallery}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.proofActions}>
            <Button
              className={styles.button}
              startIcon={
                <img width="26px" height="26px" src="/group-221.png" />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#1a3e59",
                borderRadius: "10px",
                "&:hover": { background: "#1a3e59" },
                width: 140,
                height: 50,
              }}
            >
              Reject
            </Button>
            <Button
              className={styles.button1}
              startIcon={
                <img width="26px" height="26px" src="/group-221-1.png" />
              }
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#ff6f3c",
                borderRadius: "10px",
                "&:hover": { background: "#ff6f3c" },
                height: 50,
              }}
            >{`Approve `}</Button>
          </Box>
        </Box>
        <Box className={styles.recipientInfoContainer}>
          <Box className={styles.recipientInfoWrapper}>
            <Box className={styles.recipientIdentity}>
              <Box className={styles.digitalSignature}>
                Recipient Information:
              </Box>
              <Box className={styles.marshallSalzarIdContainer}>
                <Typography
                  className={styles.marshallSalzar}
                  variant="inherit"
                  sx={{ fontWeight: "600" }}
                >
                  Marshall Salzar
                </Typography>
                <Typography className={styles.id284772} variant="inherit">
                  ID: 284772
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.proofPhotos}>
            <Box className={styles.commentInputWrapper}>
              <Box className={styles.comment}>Comment:</Box>
            </Box>
            <textarea
              className={styles.description}
              placeholder="* Description"
              rows={6}
              cols={20}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal4;
