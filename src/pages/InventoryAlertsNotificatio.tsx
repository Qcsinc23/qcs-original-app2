import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu4 from "../components/LeftMenu4";
import UserContainer from "../components/UserContainer";
import AlertCardContainer from "../components/AlertCardContainer";
import Card from "../components/Card";
import styles from "./InventoryAlertsNotificatio.module.css";

const InventoryAlertsNotificatio: FunctionComponent = () => {
  return (
    <Box className={styles.inventoryAlertsNotificatio}>
      <LeftMenu4 logo="/logo1.svg" />
      <Box className={styles.pageHeader}>
        <section className={styles.headerContent}>
          <Box className={styles.breadcrumb}>
            <Box className={styles.breadcrumbItems}>
              <Box
                className={styles.dashboardInventory}
              >{`Dashboard > Inventory > Alerts & Notifications`}</Box>
            </Box>
            <UserContainer />
          </Box>
          <Box className={styles.pageActions}>
            <Box className={styles.pageActionItems}>
              <Typography
                className={styles.inventoryAlerts}
                variant="inherit"
                component="h3"
                sx={{
                  fontWeight: "600",
                  lineHeight: "120%",
                  letterSpacing: "-0.03em",
                }}
              >{`Inventory Alerts & Notifications`}</Typography>
            </Box>
            <Box className={styles.alertActions}>
              <Button
                className={styles.button}
                startIcon={
                  <img width="17px" height="17px" src="/edit--add-plus.svg" />
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
                  width: 180,
                  height: 50,
                }}
              >
                Create Alert
              </Button>
              <Button
                className={styles.button1}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#1a3e59",
                  fontSize: "18",
                  borderColor: "#1a3e59",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#1a3e59" },
                  height: 50,
                }}
              >
                Manage Alerts
              </Button>
            </Box>
          </Box>
          <AlertCardContainer />
          <Box className={styles.alertListContainer}>
            <Card immediate="Immediate" />
            <Card immediate="Digest" />
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default InventoryAlertsNotificatio;
