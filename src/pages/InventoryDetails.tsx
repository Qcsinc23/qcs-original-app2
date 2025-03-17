import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu3 from "../components/LeftMenu3";
import UserContainer from "../components/UserContainer";
import styles from "./InventoryDetails.module.css";

const InventoryDetails: FunctionComponent = () => {
  return (
    <Box className={styles.inventoryDetails}>
      <LeftMenu3 logo="/logo1.svg" />
      <Box className={styles.content}>
        <section className={styles.main}>
          <Box className={styles.header}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </Box>
          <Box className={styles.details}>
            <Box className={styles.titleBar}>
              <header className={styles.itemDetails}>
                <Box className={styles.itemName}>
                  <Box className={styles.dashboardInventoryListParent}>
                    <Box
                      className={styles.dashboardInventory}
                    >{`Dashboard > Inventory > List > Details (Item Name)`}</Box>
                    <Box className={styles.inventoryDetailsParent}>
                      <Typography
                        className={styles.inventoryDetails1}
                        variant="inherit"
                        component="h3"
                        sx={{
                          fontWeight: "600",
                          lineHeight: "120%",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        Inventory Details
                      </Typography>
                      <Box className={styles.tabs}>
                        <Box className={styles.tabsChild} />
                        <Button
                          className={styles.tabsItem}
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "16",
                            background: "#ff6f3c",
                            borderRadius: "50px",
                            "&:hover": { background: "#ff6f3c" },
                            width: 150,
                          }}
                        >
                          Overview
                        </Button>
                        <Box className={styles.stockLevelsWrapper}>
                          <Box className={styles.stockLevels}>Stock Levels</Box>
                        </Box>
                        <Box className={styles.stockLevelsWrapper}>
                          <Box className={styles.supplierInformation}>
                            Supplier Information
                          </Box>
                        </Box>
                        <Box className={styles.stockLevelsWrapper}>
                          <Box className={styles.relatedEvents}>
                            Related Events
                          </Box>
                        </Box>
                        <Box className={styles.activityLogWrapper}>
                          <Box className={styles.activityLog}>Activity Log</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.userActions}>
                  <UserContainer />
                  <Box className={styles.actions}>
                    <Button
                      className={styles.button}
                      startIcon={
                        <img
                          width="20.9px"
                          height="20.9px"
                          src="/group-137.svg"
                        />
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
                      startIcon={
                        <img width="18px" height="20px" src="/group-139.svg" />
                      }
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
              </header>
              <Box className={styles.info}>
                <Box className={styles.infoChild} />
                <Box className={styles.basicInfo}>
                  <Box className={styles.basicInformation}>
                    Basic Information
                  </Box>
                  <Box className={styles.divider} />
                </Box>
                <Box className={styles.itemInfo}>
                  <Box className={styles.labels}>
                    <Box className={styles.name}>Name:</Box>
                    <Box className={styles.sku}>SKU:</Box>
                    <Box className={styles.category}>Category:</Box>
                    <Box className={styles.description}>Description:</Box>
                  </Box>
                  <Box className={styles.infoFields}>
                    <Box className={styles.itemNameHere}>Item name here</Box>
                    <Box className={styles.itemNameHere}>ABC-12345-S-BL</Box>
                    <Box className={styles.itemNameHere}>Category here</Box>
                    <Box className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.images}>
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </Box>
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default InventoryDetails;
