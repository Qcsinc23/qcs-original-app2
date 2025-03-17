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
} from "@mui/material";
import LeftMenu1 from "../components/LeftMenu1";
import FrameComponent from "../components/FrameComponent";
import UserContainer from "../components/UserContainer";
import styles from "./RoutePlanning.module.css";

const RoutePlanning: FunctionComponent = () => {
  return (
    <Box className={styles.routePlanning}>
      <LeftMenu1 />
      <main className={styles.pageContent}>
        <section className={styles.mainContentParent}>
          <Box className={styles.mainContent}>
            <Box className={styles.innerContent}>
              <Box
                className={styles.dashboardLogistics}
              >{`Dashboard > Logistics > Route Planning`}</Box>
              <Box className={styles.planningContent}>
                <Typography
                  className={styles.routePlanning1}
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "120%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Route Planning
                </Typography>
                <Box className={styles.map}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group2@2x.png"
                  />
                  <img
                    className={styles.mapChild}
                    loading="lazy"
                    alt=""
                    src="/group-191.svg"
                  />
                  <Box className={styles.locations}>
                    <img
                      className={styles.locationsChild}
                      loading="lazy"
                      alt=""
                      src="/group-195.svg"
                    />
                    <Box className={styles.nestedLocation}>
                      <Box className={styles.deepNestedLocation}>
                        <img
                          className={styles.deepNestedLocationChild}
                          loading="lazy"
                          alt=""
                          src="/group-191.svg"
                        />
                        <Box className={styles.deepNestedLocationInner}>
                          <img
                            className={styles.frameChild}
                            loading="lazy"
                            alt=""
                            src="/group-195.svg"
                          />
                        </Box>
                      </Box>
                    </Box>
                    <FrameComponent
                      depotIcon="/vector-11.svg"
                      depotLocation="Depot Location"
                      group196="/group-195.svg"
                    />
                  </Box>
                  <Box className={styles.dropoffContainerWrapper}>
                    <Box className={styles.dropoffContainer}>
                      <Box className={styles.dropoffDetails}>
                        <Box className={styles.dropoffContent}>
                          <Box className={styles.dropoffInfo}>
                            <Box className={styles.dropoffMarker}>
                              <img
                                className={styles.dropoffIcon}
                                alt=""
                                src="/vector-11.svg"
                              />
                              <Box className={styles.dropoffName}>
                                <img
                                  className={styles.dropoffNameChild}
                                  loading="lazy"
                                  alt=""
                                  src="/group-187.svg"
                                />
                                <Box className={styles.dropOffLocation}>
                                  Drop-off Location
                                </Box>
                              </Box>
                              <Box className={styles.sauerLock}>
                                859 Sauer Lock , Janismouth, Kansas, USA
                              </Box>
                            </Box>
                            <Box className={styles.dropoffInfoInner}>
                              <img
                                className={styles.frameItem}
                                loading="lazy"
                                alt=""
                                src="/group-191.svg"
                              />
                            </Box>
                          </Box>
                          <Box className={styles.secondDropoff}>
                            <img
                              className={styles.secondDropoffChild}
                              loading="lazy"
                              alt=""
                              src="/group-187.svg"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.pickupContainerParent}>
                        <FrameComponent
                          frameBoxAlignSelf="unset"
                          frameBoxJustifyContent="flex-start"
                          frameBoxWidth="258px"
                          depotContainerGap="10px"
                          depotIcon="/vector-11.svg"
                          depotLocation="Pickup Location"
                          group196="/group-187.svg"
                          groupIconWidth="37.2px"
                        />
                        <Box className={styles.moreMarkers}>
                          <Box className={styles.additionalMarker}>
                            <img
                              className={styles.secondDropoffChild}
                              loading="lazy"
                              alt=""
                              src="/group-187.svg"
                            />
                          </Box>
                          <img
                            className={styles.moreMarkersChild}
                            loading="lazy"
                            alt=""
                            src="/group-195.svg"
                          />
                          <img
                            className={styles.moreMarkersItem}
                            loading="lazy"
                            alt=""
                            src="/group-191.svg"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.userPanel}>
            <UserContainer />
            <Box className={styles.routePanel}>
              <Box className={styles.routeDetails}>
                <Box className={styles.routeDetailsChild} />
                <Box className={styles.routeDetails1}>Route Details</Box>
                <Box className={styles.routeDetailsItem} />
                <Box className={styles.routeLocations}>
                  <Box className={styles.routeLocationsChild} />
                  <Box className={styles.steuberMissionMichaelasideContainer}>
                    <Typography
                      className={styles.steuberMissionMichaelaside}
                      variant="inherit"
                      sx={{ lineHeight: "120%" }}
                    >
                      10884 Steuber Mission, Michaelaside, Mississippi, USA
                    </Typography>
                    <Typography
                      className={styles.terrellTowne}
                      variant="inherit"
                      sx={{
                        fontWeight: "600",
                        fontSize: "var(--body-small-size)",
                        lineHeight: "180%",
                      }}
                    >
                      Terrell Towne - (937) 773-8255
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.routeLocations}>
                  <Box className={styles.routeLocationsItem} />
                  <Box className={styles.steuberMissionMichaelasideContainer}>
                    <Typography
                      className={styles.steuberMissionMichaelaside}
                      variant="inherit"
                      sx={{ lineHeight: "120%" }}
                    >
                      10884 Steuber Mission, Michaelaside, Mississippi, USA
                    </Typography>
                    <Typography
                      className={styles.terrellTowne}
                      variant="inherit"
                      sx={{
                        fontWeight: "600",
                        fontSize: "var(--body-small-size)",
                        lineHeight: "180%",
                      }}
                    >
                      Terrell Towne - (937) 773-8255
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.routeLocations}>
                  <Box className={styles.routeLocationsInner} />
                  <Box className={styles.steuberMissionMichaelasideContainer}>
                    <Typography
                      className={styles.steuberMissionMichaelaside}
                      variant="inherit"
                      sx={{ lineHeight: "120%" }}
                    >
                      10884 Steuber Mission, Michaelaside, Mississippi, USA
                    </Typography>
                    <Typography
                      className={styles.terrellTowne}
                      variant="inherit"
                      sx={{
                        fontWeight: "600",
                        fontSize: "var(--body-small-size)",
                        lineHeight: "180%",
                      }}
                    >
                      Terrell Towne - (937) 773-8255
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.routeButtons}>
                  <Box className={styles.button}>
                    <Box className={styles.buttonChild} />
                    <Box className={styles.autoOptimize}>Auto-optimize</Box>
                  </Box>
                  <Box className={styles.button1}>
                    <Box className={styles.buttonItem} />
                    <Box className={styles.reverse}>Reverse</Box>
                  </Box>
                </Box>
                <Box className={styles.button2}>
                  <Box className={styles.buttonInner} />
                  <Box className={styles.manuallyReorderStops}>
                    Manually Reorder Stops
                  </Box>
                </Box>
              </Box>
              <Box className={styles.vehicleSelection}>
                <Box className={styles.vehicleSelectionChild} />
                <Box className={styles.vehicleSelection1}>
                  Vehicle Selection
                </Box>
                <FormControl
                  className={styles.button3}
                  variant="standard"
                  sx={{
                    borderColor: "#9e9e9e",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "10px",
                    width: "79.5%",
                    height: "50px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "50px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "50px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "50px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "50px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#9e9e9e",
                      fontSize: 18,
                      fontWeight: "Medium",
                      fontFamily: "Poppins",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "20px",
                    },
                  }}
                >
                  <InputLabel color="warning" />
                  <Select
                    color="warning"
                    disableUnderline
                    displayEmpty
                    IconComponent="null"
                  >
                    <MenuItem>Assign Routes</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </section>
      </main>
    </Box>
  );
};

export default RoutePlanning;
