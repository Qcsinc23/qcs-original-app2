import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import DashboardContent from "../components/DashboardContent";
import styles from "./StatusUpdates.module.css";

const StatusUpdates: FunctionComponent = () => {
  return (
    <Box className={styles.statusUpdates}>
      <Box className={styles.leftMenu}>
        <Box className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <Box className={styles.menuContent}>
          <Box className={styles.menuButtons}>
            <img
              className={styles.menuButtonIcon}
              alt=""
              src="/frame-2@2x.png"
            />
            <Box className={styles.menuButton}>
              <Box className={styles.menuButtonChild} />
              <img
                className={styles.menuButtonItem}
                alt=""
                src="/arrow-4.svg"
              />
            </Box>
            <img
              className={styles.menuButtonIcon}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <img
              className={styles.menuButtonIcon}
              loading="lazy"
              alt=""
              src="/placeholder@2x.png"
            />
          </Box>
          <Box className={styles.menuCategories}>
            <Box className={styles.dashboard}>Dashboard</Box>
            <Box className={styles.events}>Events</Box>
            <Box className={styles.logistics}>Logistics</Box>
            <Box className={styles.inventory}>Inventory</Box>
            <Box className={styles.menuSettings}>
              <Box className={styles.deliveries}>Deliveries</Box>
              <Box className={styles.trackingMenu}>
                <Box className={styles.liveTrackingMap}>Live Tracking Map</Box>
                <Box className={styles.statusUpdates1}>Status Updates</Box>
                <Box className={styles.liveTrackingMap}>Proof of Delivery</Box>
              </Box>
              <Box className={styles.usersMenu}>
                <Box className={styles.reports}>Reports</Box>
                <Box className={styles.users}>Users</Box>
              </Box>
              <Box className={styles.settings}>Settings</Box>
            </Box>
          </Box>
          <Box className={styles.layers}>
            <Box className={styles.layerTypes}>
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
                className={styles.layerTypesChild}
                loading="lazy"
                alt=""
                src="/group-1073.svg"
              />
              <Box className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-1113.svg"
                />
                <Box className={styles.layer1} />
              </Box>
              <img
                className={styles.layerTypesItem}
                loading="lazy"
                alt=""
                src="/group-1133.svg"
              />
            </Box>
            <Box className={styles.frameGroup}>
              <img
                className={styles.layerTypesItem}
                loading="lazy"
                alt=""
                src="/group-1142.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector2.svg"
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
        <section className={styles.dashboardContentParent}>
          <DashboardContent />
          <Box className={styles.deliveriesTable}>
            <Box className={styles.tableContent}>
              <Box className={styles.tableHeader}>
                <Typography
                  className={styles.deliveriesList}
                  variant="inherit"
                  component="h2"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "120%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Deliveries List
                </Typography>
              </Box>
              <Box className={styles.tableActions}>
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
                    width: 180,
                    height: 50,
                  }}
                >
                  Update Status
                </Button>
                <Button
                  className={styles.button1}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "18",
                    borderColor: "#9e9e9e",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    width: 160,
                    height: 50,
                  }}
                >
                  Assign Driver
                </Button>
                <Button
                  className={styles.button2}
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
                  Send Group Communication
                </Button>
              </Box>
            </Box>
            <Box className={styles.table}>
              <Box className={styles.tableChild} />
              <Box className={styles.header}>
                <Box className={styles.headerChild} />
                <Box className={styles.headerCell}>
                  <input className={styles.deliveryHeader} type="checkbox" />
                  <Box className={styles.deliveryId}>Delivery ID</Box>
                </Box>
                <Box className={styles.headerInfo}>
                  <Box className={styles.relatedEvent}>Related Event</Box>
                  <Box className={styles.relatedEvent}>Driver Assigned</Box>
                  <Box className={styles.relatedEvent}>Pickup Location</Box>
                  <Box className={styles.relatedEvent}>Drop-off Location</Box>
                  <Box className={styles.relatedEvent}>Scheduled Time</Box>
                  <Box className={styles.status}>Status</Box>
                </Box>
                <Box className={styles.eta}>ETA</Box>
              </Box>
              <Box className={styles.tableBody}>
                <Box className={styles.tableRow}>
                  <Box className={styles.tableCell}>
                    <Box className={styles.tableData}>
                      <Box className={styles.deliveryInfo}>
                        <Box className={styles.deliveryDetails}>
                          <Box className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <Box className={styles.aa478525}>AA-4785-25</Box>
                          </Box>
                          <Box className={styles.eventInfo}>
                            <Box className={styles.eventName}>Event name</Box>
                            <Box className={styles.royAnderson}>
                              Roy Anderson
                            </Box>
                          </Box>
                          <Box className={styles.locationInfo}>
                            <Box className={styles.streetCityState}>
                              Street, City, State
                            </Box>
                            <Box className={styles.streetCityState1}>
                              Street, City, State
                            </Box>
                          </Box>
                          <Box className={styles.pm}>00:00:00 PM</Box>
                        </Box>
                      </Box>
                      <Box className={styles.statusInfo}>
                        <Box className={styles.statusIcons}>
                          <Box className={styles.statusIcon}>
                            <Box className={styles.iconShape} />
                          </Box>
                          <Box className={styles.inTransit}>In Transit</Box>
                        </Box>
                        <Box className={styles.transitTime}>
                          <Box className={styles.hours}>2 Hours</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.tableCell1}>
                    <Box className={styles.tableCellChild} />
                  </Box>
                  <Box className={styles.tableCell}>
                    <Box className={styles.tableData}>
                      <Box className={styles.deliveryInfo}>
                        <Box className={styles.deliveryDetails}>
                          <Box className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <Box className={styles.aa478525}>AA-4785-25</Box>
                          </Box>
                          <Box className={styles.eventInfo}>
                            <Box className={styles.eventName}>Event name</Box>
                            <Box className={styles.royAnderson}>
                              Roy Anderson
                            </Box>
                          </Box>
                          <Box className={styles.locationInfo}>
                            <Box className={styles.streetCityState}>
                              Street, City, State
                            </Box>
                            <Box className={styles.streetCityState1}>
                              Street, City, State
                            </Box>
                          </Box>
                          <Box className={styles.pm}>00:00:00 PM</Box>
                        </Box>
                      </Box>
                      <Box className={styles.frameParent2}>
                        <Box className={styles.statusIcons}>
                          <Box className={styles.statusIcon}>
                            <Box className={styles.frameInner} />
                          </Box>
                          <Box className={styles.delivered}>Delivered</Box>
                        </Box>
                        <Box className={styles.transitTime}>
                          <Box className={styles.hours}>-</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.tableCell1}>
                    <Box className={styles.tableCellChild} />
                  </Box>
                  <Box className={styles.tableCell}>
                    <Box className={styles.tableData}>
                      <Box className={styles.deliveryInfo}>
                        <Box className={styles.deliveryDetails}>
                          <Box className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <Box className={styles.aa478525}>AA-4785-25</Box>
                          </Box>
                          <Box className={styles.eventInfo}>
                            <Box className={styles.eventName}>Event name</Box>
                            <Box className={styles.royAnderson}>
                              Roy Anderson
                            </Box>
                          </Box>
                          <Box className={styles.locationInfo}>
                            <Box className={styles.streetCityState}>
                              Street, City, State
                            </Box>
                            <Box className={styles.streetCityState1}>
                              Street, City, State
                            </Box>
                          </Box>
                          <Box className={styles.pm}>00:00:00 PM</Box>
                        </Box>
                      </Box>
                      <Box className={styles.statusInfo}>
                        <Box className={styles.statusIcons}>
                          <Box className={styles.statusIcon}>
                            <Box className={styles.iconShape} />
                          </Box>
                          <Box className={styles.inTransit}>In Transit</Box>
                        </Box>
                        <Box className={styles.transitTime}>
                          <Box className={styles.hours}>2 Hours</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.listDivider} />
                  <Box className={styles.tableCell}>
                    <Box className={styles.tableData}>
                      <Box className={styles.deliveryInfo}>
                        <Box className={styles.deliveryDetails}>
                          <Box className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <Box className={styles.aa478525}>AA-4785-25</Box>
                          </Box>
                          <Box className={styles.eventInfo}>
                            <Box className={styles.eventName}>Event name</Box>
                            <Box className={styles.royAnderson}>
                              Roy Anderson
                            </Box>
                          </Box>
                          <Box className={styles.locationInfo}>
                            <Box className={styles.streetCityState}>
                              Street, City, State
                            </Box>
                            <Box className={styles.streetCityState1}>
                              Street, City, State
                            </Box>
                          </Box>
                          <Box className={styles.pm}>00:00:00 PM</Box>
                        </Box>
                      </Box>
                      <Box className={styles.frameParent12}>
                        <Box className={styles.statusIcons}>
                          <Box className={styles.statusIcon}>
                            <Box className={styles.frameChild1} />
                          </Box>
                          <Box className={styles.delayed}>Delayed</Box>
                        </Box>
                        <Box className={styles.dayWrapper}>
                          <Box className={styles.hours}>1 Day</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.tableCell1}>
                    <Box className={styles.tableCellChild} />
                  </Box>
                  <Box className={styles.tableCell}>
                    <Box className={styles.tableData}>
                      <Box className={styles.deliveryInfo}>
                        <Box className={styles.deliveryDetails}>
                          <Box className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <Box className={styles.aa478525}>AA-4785-25</Box>
                          </Box>
                          <Box className={styles.eventInfo}>
                            <Box className={styles.eventName}>Event name</Box>
                            <Box className={styles.royAnderson}>
                              Roy Anderson
                            </Box>
                          </Box>
                          <Box className={styles.locationInfo}>
                            <Box className={styles.streetCityState}>
                              Street, City, State
                            </Box>
                            <Box className={styles.streetCityState1}>
                              Street, City, State
                            </Box>
                          </Box>
                          <Box className={styles.pm}>00:00:00 PM</Box>
                        </Box>
                      </Box>
                      <Box className={styles.statusInfo}>
                        <Box className={styles.statusIcons}>
                          <Box className={styles.statusIcon}>
                            <Box className={styles.iconShape} />
                          </Box>
                          <Box className={styles.inTransit}>In Transit</Box>
                        </Box>
                        <Box className={styles.transitTime}>
                          <Box className={styles.hours}>2 Hours</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.tableCell1}>
                    <Box className={styles.tableCellChild} />
                  </Box>
                  <Box className={styles.tableCell}>
                    <Box className={styles.tableData}>
                      <Box className={styles.deliveryInfo}>
                        <Box className={styles.deliveryDetails}>
                          <Box className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <Box className={styles.aa478525}>AA-4785-25</Box>
                          </Box>
                          <Box className={styles.eventInfo}>
                            <Box className={styles.eventName}>Event name</Box>
                            <Box className={styles.royAnderson}>
                              Roy Anderson
                            </Box>
                          </Box>
                          <Box className={styles.locationInfo}>
                            <Box className={styles.streetCityState}>
                              Street, City, State
                            </Box>
                            <Box className={styles.streetCityState1}>
                              Street, City, State
                            </Box>
                          </Box>
                          <Box className={styles.pm}>00:00:00 PM</Box>
                        </Box>
                      </Box>
                      <Box className={styles.statusInfo}>
                        <Box className={styles.statusIcons}>
                          <Box className={styles.statusIcon}>
                            <Box className={styles.iconShape} />
                          </Box>
                          <Box className={styles.inTransit}>In Transit</Box>
                        </Box>
                        <Box className={styles.transitTime}>
                          <Box className={styles.hours}>2 Hours</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.listScrollContainer}>
                    <Box className={styles.listDivider} />
                    <Box className={styles.scroll}>
                      <Box className={styles.scrollChild} />
                      <Box className={styles.scrollBar} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </main>
    </Box>
  );
};

export default StatusUpdates;
