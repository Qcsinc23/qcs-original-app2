import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import LeftMenu4 from "../components/LeftMenu4";
import User from "../components/User1";
import Card3 from "../components/Card3";
import Card2 from "../components/Card2";
import Modal1 from "../components/Modal1";
import styles from "./AddAlertModal.module.css";

const AddAlertModal: FunctionComponent = () => {
  return (
    <Box className={styles.addAlertModal}>
      <main className={styles.bg}>
        <LeftMenu4
          leftMenuPosition="absolute"
          leftMenuTop="0px"
          leftMenuLeft="0px"
          leftMenuHeight="1080px"
          logo="/logo1.svg"
          menuContentFlex="1"
          pageContentAlignSelf="stretch"
          mainContentFlex="1"
          frameBoxFlex="1"
        />
        <Box
          className={styles.dashboardInventory}
        >{`Dashboard > Inventory > Alerts & Notifications`}</Box>
        <User />
        <img
          className={styles.notificationIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <Typography
          className={styles.inventoryAlerts}
          variant="inherit"
          component="h2"
          sx={{
            fontWeight: "600",
            fontSize: "var(--font-size-11xl)",
            lineHeight: "120%",
            letterSpacing: "-0.03em",
          }}
        >{`Inventory Alerts & Notifications`}</Typography>
        <Box className={styles.button}>
          <Box className={styles.buttonChild} />
          <Box className={styles.manageAlerts}>Manage Alerts</Box>
        </Box>
        <Box className={styles.button1}>
          <Box className={styles.buttonItem} />
          <Box className={styles.addIcon}>
            <img
              className={styles.editAddPlus}
              loading="lazy"
              alt=""
              src="/edit--add-plus.svg"
            />
          </Box>
          <Box className={styles.createAlert}>Create Alert</Box>
        </Box>
        <Card3 />
        <Card2 push="Push" />
        <Box className={styles.card4}>
          <Box className={styles.card4Child} />
          <Box className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
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
            <Box className={styles.alertName}>Alert Name</Box>
          </Box>
          <Box className={styles.card4Inner}>
            <Box className={styles.triggerTypeLowStock10Parent}>
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
                  In-App
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.buttonParent}>
            <Box className={styles.button2}>
              <Box className={styles.buttonInner} />
              <Box className={styles.emailEditButtons}>
                <img
                  className={styles.emailEditButtonsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1373.svg"
                />
              </Box>
              <Box className={styles.edit}>Edit</Box>
            </Box>
            <Box className={styles.button3}>
              <Box className={styles.rectangleDiv} />
              <Box className={styles.emailDeleteIcons}>
                <img
                  className={styles.emailDeleteIconsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1392.svg"
                />
              </Box>
              <Box className={styles.delete}>Delete</Box>
            </Box>
          </Box>
        </Box>
        <Card2 card3Top="591px" card3Left="897px" push="SMS" />
        <Box className={styles.card2}>
          <Box className={styles.card2Child} />
          <Box className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-21.svg"
            />
            <Box className={styles.rectangleParent}>
              <Box className={styles.frameChild} />
              <Box className={styles.ellipseDiv} />
            </Box>
          </Box>
          <Box className={styles.alertNameWrapper}>
            <Box className={styles.alertName}>Alert Name</Box>
          </Box>
          <Box className={styles.card4Inner}>
            <Box className={styles.triggerTypeLowStock10Parent}>
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
                  In-App
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.buttonParent}>
            <Box className={styles.button2}>
              <Box className={styles.buttonInner} />
              <Box className={styles.emailEditButtons}>
                <img
                  className={styles.emailEditButtonsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1373.svg"
                />
              </Box>
              <Box className={styles.edit}>Edit</Box>
            </Box>
            <Box className={styles.button3}>
              <Box className={styles.rectangleDiv} />
              <Box className={styles.emailDeleteIcons}>
                <img
                  className={styles.emailDeleteIconsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1392.svg"
                />
              </Box>
              <Box className={styles.delete}>Delete</Box>
            </Box>
          </Box>
        </Box>
        <section className={styles.modalBackground} />
      </main>
      <Modal1 />
    </Box>
  );
};

export default AddAlertModal;
