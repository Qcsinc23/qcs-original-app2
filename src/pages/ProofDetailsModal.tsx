import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu7 from "../components/LeftMenu7";
import User from "../components/User1";
import Table4 from "../components/Table4";
import Modal4 from "../components/Modal4";
import styles from "./ProofDetailsModal.module.css";

const ProofDetailsModal: FunctionComponent = () => {
  return (
    <Box className={styles.proofDetailsModal}>
      <main className={styles.bg}>
        <LeftMenu7 />
        <Box
          className={styles.dashboardDelivery}
        >{`Dashboard > Delivery > Proof of Delivery`}</Box>
        <User />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-14.svg"
        />
        <Typography
          className={styles.proofOfDelivery}
          variant="inherit"
          component="h2"
          sx={{
            fontWeight: "600",
            fontSize: "var(--font-size-11xl)",
            lineHeight: "120%",
            letterSpacing: "-0.03em",
          }}
        >
          Proof of Delivery
        </Typography>
        <Box className={styles.button}>
          <Box className={styles.buttonChild} />
          <Box className={styles.editAdd}>
            <img
              className={styles.editAddPlus}
              loading="lazy"
              alt=""
              src="/edit--add-plus1.svg"
            />
          </Box>
          <Box className={styles.addNewPod}>Add New POD</Box>
        </Box>
        <Box className={styles.button1}>
          <Box className={styles.buttonItem} />
          <Box className={styles.approve}>Approve</Box>
        </Box>
        <Box className={styles.button2}>
          <Box className={styles.buttonItem} />
          <Box className={styles.reject}>Reject</Box>
        </Box>
        <Button
          className={styles.button3}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >
          Export
        </Button>
        <Table4 />
        <section className={styles.bgChild} />
      </main>
      <Modal4 />
    </Box>
  );
};

export default ProofDetailsModal;
