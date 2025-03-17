import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeftMenu2 from "../components/LeftMenu2";
import UserContainer from "../components/UserContainer";
import Table3 from "../components/Table3";
import styles from "./ProofOfDelivery.module.css";

const ProofOfDelivery: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleAddNewPOD = () => {
    navigate('/add-proof-of-delivery');
  };

  const handleApprove = () => {
    // Implement approval functionality
    alert('Approving selected POD');
  };

  const handleReject = () => {
    // Implement reject functionality
    alert('Rejecting selected POD');
  };

  const handleExport = () => {
    // Implement export functionality
    alert('Exporting data');
  };

  return (
    <Box className={styles.proofOfDelivery}>
      <LeftMenu2 />
      <main className={styles.mainContent} style={{ marginLeft: '20px' }}>
        <section className={styles.contentContainer}>
          <header className={styles.contentHeader}>
            <Box className={styles.contentTitle}>
              <Box className={styles.dashboardDeliveryProofOParent}>
                <Box
                  className={styles.dashboardDelivery}
                >{`Dashboard > Delivery > Proof of Delivery`}</Box>
                <Typography
                  className={styles.proofOfDelivery1}
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
              </Box>
            </Box>
            <Box className={styles.buttons}>
              <Button
                className={styles.button}
                disableElevation
                variant="outlined"
                onClick={handleApprove}
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
                Approve
              </Button>
              <Button
                className={styles.button1}
                disableElevation
                variant="outlined"
                onClick={handleReject}
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
                Reject
              </Button>
              <Box className={styles.user}>
                <UserContainer />
                <Box className={styles.exportAdd}>
                  <Button
                    className={styles.button2}
                    disableElevation
                    variant="outlined"
                    onClick={handleExport}
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
                  <Button
                    className={styles.button3}
                    startIcon={
                      <img
                        width="15px"
                        height="15px"
                        src="/edit--add-plus1.svg"
                      />
                    }
                    onClick={handleAddNewPOD}
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
                    Add New POD
                  </Button>
                </Box>
              </Box>
            </Box>
          </header>
          <Table3 />
        </section>
      </main>
    </Box>
  );
};

export default ProofOfDelivery;
