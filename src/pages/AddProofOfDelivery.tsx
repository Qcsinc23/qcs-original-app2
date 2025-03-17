import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./AddProofOfDelivery.module.css";

const AddProofOfDelivery: FunctionComponent = () => {
  return (
    <Box className={styles.addProofOfDelivery}>
      <Box className={styles.leftMenu}>
        <Box className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <Box className={styles.navigation}>
          <Box className={styles.navigationItems}>
            <img
              className={styles.navigationIcons}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <Box className={styles.navigationIcons1}>
              <Box className={styles.navigationIconsChild} />
              <img
                className={styles.navigationIconsItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </Box>
            <img
              className={styles.navigationIcons}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <img
              className={styles.navigationIcons}
              loading="lazy"
              alt=""
              src="/placeholder@2x.png"
            />
          </Box>
          <Box className={styles.menuOptions}>
            <Box className={styles.dashboard}>Dashboard</Box>
            <Box className={styles.events}>Events</Box>
            <Box className={styles.logistics}>Logistics</Box>
            <Box className={styles.inventory}>Inventory</Box>
            <Box className={styles.deliveriesParent}>
              <Box className={styles.deliveries}>Deliveries</Box>
              <Box className={styles.liveTrackingMapParent}>
                <Box className={styles.liveTrackingMap}>Live Tracking Map</Box>
                <Box className={styles.liveTrackingMap}>Status Updates</Box>
                <Box className={styles.liveTrackingMap}>Proof of Delivery</Box>
              </Box>
              <Box className={styles.reportsParent}>
                <Box className={styles.reports}>Reports</Box>
                <Box className={styles.users}>Users</Box>
              </Box>
              <Box className={styles.settings}>Settings</Box>
            </Box>
          </Box>
          <Box className={styles.layersParent}>
            <Box className={styles.layers}>
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-11.svg"
              />
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-1-14.svg"
              />
              <img
                className={styles.layersChild}
                loading="lazy"
                alt=""
                src="/group-1074.svg"
              />
              <Box className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-1114.svg"
                />
                <Box className={styles.layer1} />
              </Box>
              <img
                className={styles.layersItem}
                loading="lazy"
                alt=""
                src="/group-1134.svg"
              />
            </Box>
            <Box className={styles.frameGroup}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1143.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector3.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <main className={styles.content}>
        <section className={styles.header}>
          <Box className={styles.dashboardHeader}>
            <Box className={styles.dashboardTitle}>
              <Box
                className={styles.dashboardDelivery}
              >{`Dashboard > Delivery > Proof of Delivery >  Add New POD`}</Box>
            </Box>
            <Box className={styles.userIconParent}>
              <Box className={styles.userIcon}>
                <img
                  className={styles.userImageIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-15.svg"
                />
              </Box>
              <Box className={styles.user}>
                <Box className={styles.userChild} />
                <img
                  className={styles.imagePlaceholderIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2@2x.png"
                />
                <Box className={styles.userName}>
                  <Box
                    className={styles.sherwynGraham}
                  >{`Sherwyn Graham `}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.addProofOfDeliveryParent}>
            <Typography
              className={styles.addProofOf}
              variant="inherit"
              component="h3"
              sx={{
                fontWeight: "600",
                lineHeight: "120%",
                letterSpacing: "-0.03em",
              }}
            >
              Add Proof of Delivery
            </Typography>
            <Box className={styles.form}>
              <Box className={styles.formChild} />
              <Box className={styles.deliverySelectionParent}>
                <FormControl
                  className={styles.deliverySelection}
                  variant="standard"
                  sx={{
                    borderColor: "#9e9e9e",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    width: "48.91304347826087%",
                    height: "60px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "60px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "60px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "60px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "60px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      fontSize: 18,
                      fontWeight: "Regular",
                      fontFamily: "Poppins",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "30px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent="null"
                  >
                    <MenuItem>* Delivery Selection</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <Box className={styles.recipientNameParent}>
                  <TextField
                    className={styles.recipientName}
                    placeholder="* Recipient Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#9e9e9e" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        fontSize: "18px",
                      },
                    }}
                  />
                  <TextField
                    className={styles.recipientName}
                    placeholder="* ID Verification"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#9e9e9e" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        fontSize: "18px",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box className={styles.digitalSignatureParent}>
                <Box className={styles.digitalSignature}>Digital Signature</Box>
                <Box className={styles.lineParent}>
                  <Box className={styles.frameInner} />
                  <Box className={styles.quantityAvailableParent}>
                    <textarea
                      className={styles.quantityAvailable}
                      placeholder="Signature Capture"
                      rows={7}
                      cols={22}
                    />
                    <Box className={styles.imageInputWrapper}>
                      <Box className={styles.imageInput}>
                        <img
                          className={styles.imageInputChild}
                          loading="lazy"
                          alt=""
                          src="/group-1831.svg"
                        />
                        <Box className={styles.addImage}>
                          <Box className={styles.addImage1}>Add Image</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.digitalSignatureParent}>
                <Box className={styles.digitalSignature}>Photo Capture</Box>
                <Box className={styles.lineParent}>
                  <Box className={styles.frameInner} />
                  <Box className={styles.frameContainer}>
                    <Box className={styles.rectangleParent}>
                      <Box className={styles.rectangleDiv} />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page12.svg"
                      />
                    </Box>
                    <Box className={styles.frameWrapper}>
                      <Box className={styles.rectangleParent}>
                        <Box className={styles.rectangleDiv} />
                        <img
                          className={styles.page1Icon}
                          loading="lazy"
                          alt=""
                          src="/page1-11.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.addMoreInputWrapper}>
                      <Box className={styles.addMoreInput}>
                        <img
                          className={styles.imageInputChild}
                          loading="lazy"
                          alt=""
                          src="/group-183-1.svg"
                        />
                        <Box className={styles.addMoreWrapper}>
                          <Box className={styles.addMore}>Add More</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <footer className={styles.description}>
                <Box className={styles.descriptionChild} />
                <Box className={styles.comments}>
                  <Typography variant="inherit" component="span">
                    *
                  </Typography>
                  <Typography
                    className={styles.comments1}
                    variant="inherit"
                    component="span"
                  >
                     Comments
                  </Typography>
                </Box>
              </footer>
              <Box className={styles.buttonParent}>
                <Button
                  className={styles.button}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "18",
                    borderColor: "#9e9e9e",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    height: 50,
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className={styles.button1}
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
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </section>
      </main>
    </Box>
  );
};

export default AddProofOfDelivery;
