import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./VehicleManagement.module.css";

const VehicleManagement: FunctionComponent = () => {
  return (
    <Box className={styles.vehicleManagement}>
      <Box className={styles.leftMenu}>
        <Box className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <Box className={styles.menuContent}>
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
                src="/layer-1-1.svg"
              />
              <img
                className={styles.layersChild}
                loading="lazy"
                alt=""
                src="/group-1071.svg"
              />
            </Box>
            <Box className={styles.layer1Parent}>
              <Box className={styles.layer1}>
                <img
                  className={styles.layer1Child}
                  loading="lazy"
                  alt=""
                  src="/group-111.svg"
                />
              </Box>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-113.svg"
              />
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-114.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </Box>
          </Box>
          <Box className={styles.content}>
            <Box className={styles.dashboard}>Dashboard</Box>
            <Box className={styles.frameParent}>
              <Box className={styles.frameGroup}>
                <Box className={styles.eventsParent}>
                  <Box className={styles.events}>Events</Box>
                  <Box className={styles.logisticsParent}>
                    <Box className={styles.logistics}>Logistics</Box>
                    <Box className={styles.overviewParent}>
                      <Box className={styles.overview}>Overview</Box>
                      <Box className={styles.overview}>Task Assignment</Box>
                      <Box className={styles.overview}>Route Planning</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.frameWrapper}>
                  <Box className={styles.frameContainer}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/frame-2@2x.png"
                    />
                    <Box className={styles.rectangleParent}>
                      <Box className={styles.rectangleDiv} />
                      <img
                        className={styles.arrowIcon}
                        alt=""
                        src="/arrow-4.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.vehicleManagement1}>
                Vehicle Management
              </Box>
            </Box>
            <Box className={styles.navigationParent}>
              <Box className={styles.navigation}>
                <Box className={styles.inventory}>Inventory</Box>
                <Box className={styles.deliveries}>Deliveries</Box>
                <Box className={styles.reports}>Reports</Box>
                <Box className={styles.users}>Users</Box>
                <Box className={styles.settings}>Settings</Box>
              </Box>
              <Box className={styles.frameDiv}>
                <Box className={styles.frameContainer}>
                  <Box className={styles.rectangleParent}>
                    <Box className={styles.rectangleDiv} />
                    <img
                      className={styles.frameChild2}
                      loading="lazy"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </Box>
                  <Box className={styles.rectangleParent}>
                    <Box className={styles.rectangleDiv} />
                    <img
                      className={styles.frameChild2}
                      loading="lazy"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <section className={styles.footer}>
        <Box className={styles.footerContent}>
          <FrameComponent1
            dashboardLogisticsVehicleMan={`Dashboard > Logistics > Vehicle Management`}
          />
          <Box className={styles.footerContent}>
            <Typography
              className={styles.vehicleManagement2}
              variant="inherit"
              component="h2"
              sx={{
                fontWeight: "600",
                lineHeight: "120%",
                letterSpacing: "-0.03em",
              }}
            >
              Vehicle Management
            </Typography>
            <Box className={styles.table}>
              <Box className={styles.tableChild} />
              <Box className={styles.header}>
                <Box className={styles.headerChild} />
                <Box className={styles.vehicleIdname}>Vehicle ID/Name</Box>
                <Box className={styles.headerActions}>
                  <Box className={styles.vehicleInfo}>
                    <Box className={styles.type}>Type</Box>
                    <Box className={styles.capacity}>Capacity</Box>
                  </Box>
                  <Box className={styles.statusHeader}>
                    <Box className={styles.status}>Status</Box>
                  </Box>
                  <Box className={styles.vehicleIdname}>Assigned Driver</Box>
                  <Box className={styles.actions}>Actions</Box>
                </Box>
              </Box>
              <Box className={styles.tableRows}>
                <Box className={styles.rowItems}>
                  <Box className={styles.rowData}>
                    <Box className={styles.taskNames}>
                      <Box className={styles.taskNameHere}>Task name here</Box>
                    </Box>
                    <Box className={styles.vehicles}>
                      <Box className={styles.truck}>Truck</Box>
                    </Box>
                    <Box className={styles.weights}>
                      <Box className={styles.kg}>550 KG</Box>
                    </Box>
                    <Box className={styles.statusIcons}>
                      <Box className={styles.icons}>
                        <Box className={styles.iconShape} />
                      </Box>
                      <Box className={styles.inUse}>In Use</Box>
                    </Box>
                  </Box>
                  <Box className={styles.driverNames}>
                    <Box className={styles.thomasGardio}>Thomas Gardio</Box>
                  </Box>
                  <Box className={styles.actionButtons}>
                    <Box className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                        src="/group-140.svg"
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                        src="/group-1371.svg"
                      />
                      <img
                        className={styles.buttonDataInner}
                        alt=""
                        src="/group-1381.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-1391.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.tableRows1}>
                <Box className={styles.tableRowsChild} />
              </Box>
              <Box className={styles.tableRows}>
                <Box className={styles.rowItems}>
                  <Box className={styles.taskNameHereWrapper}>
                    <Box className={styles.taskNameHere}>Task name here</Box>
                  </Box>
                  <Box className={styles.frameParent3}>
                    <Box className={styles.vehicleDetailsWrapper}>
                      <Box className={styles.navigationParent}>
                        <Box className={styles.truck}>Truck</Box>
                        <Box className={styles.kg}>550 KG</Box>
                      </Box>
                    </Box>
                    <Box className={styles.statusIcons}>
                      <Box className={styles.icons}>
                        <Box className={styles.maintenanceShape} />
                      </Box>
                      <Box className={styles.maintenance}>Maintenance</Box>
                    </Box>
                    <Box className={styles.driverNames}>
                      <Box className={styles.thomasGardio}>Thomas Gardio</Box>
                    </Box>
                  </Box>
                  <Box className={styles.actionButtons}>
                    <Box className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                        src="/group-140.svg"
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                        src="/group-1371.svg"
                      />
                      <img
                        className={styles.buttonDataInner}
                        alt=""
                        src="/group-1381.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-1391.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.tableRows1}>
                <Box className={styles.tableRowsChild} />
              </Box>
              <Box className={styles.tableRows}>
                <Box className={styles.rowItems}>
                  <Box className={styles.frameParent6}>
                    <Box className={styles.taskNames}>
                      <Box className={styles.taskNameHere}>Task name here</Box>
                    </Box>
                    <Box className={styles.vehicles}>
                      <Box className={styles.truck}>Truck</Box>
                    </Box>
                    <Box className={styles.weights}>
                      <Box className={styles.kg}>550 KG</Box>
                    </Box>
                    <Box className={styles.statusIcons}>
                      <Box className={styles.icons}>
                        <Box className={styles.ellipseDiv} />
                      </Box>
                      <Box className={styles.available}>Available</Box>
                    </Box>
                  </Box>
                  <Box className={styles.driverNames}>
                    <Box className={styles.thomasGardio}>Thomas Gardio</Box>
                  </Box>
                  <Box className={styles.actionButtons}>
                    <Box className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                        src="/group-140.svg"
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                        src="/group-1371.svg"
                      />
                      <img
                        className={styles.buttonDataInner}
                        alt=""
                        src="/group-1381.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-1391.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.tableRows1}>
                <Box className={styles.tableRowsChild} />
              </Box>
              <Box className={styles.tableRows}>
                <Box className={styles.rowItems}>
                  <Box className={styles.frameParent6}>
                    <Box className={styles.taskNames}>
                      <Box className={styles.taskNameHere}>Task name here</Box>
                    </Box>
                    <Box className={styles.vehicles}>
                      <Box className={styles.truck}>Truck</Box>
                    </Box>
                    <Box className={styles.weights}>
                      <Box className={styles.kg}>550 KG</Box>
                    </Box>
                    <Box className={styles.statusIcons}>
                      <Box className={styles.icons}>
                        <Box className={styles.ellipseDiv} />
                      </Box>
                      <Box className={styles.available}>Available</Box>
                    </Box>
                  </Box>
                  <Box className={styles.driverNames}>
                    <Box className={styles.thomasGardio}>Thomas Gardio</Box>
                  </Box>
                  <Box className={styles.actionButtons}>
                    <Box className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                        src="/group-140.svg"
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                        src="/group-1371.svg"
                      />
                      <img
                        className={styles.buttonDataInner}
                        alt=""
                        src="/group-1381.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-1391.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.tableRows1}>
                <Box className={styles.tableRowsChild} />
              </Box>
              <Box className={styles.tableRows}>
                <Box className={styles.rowItems}>
                  <Box className={styles.frameParent6}>
                    <Box className={styles.taskNames}>
                      <Box className={styles.taskNameHere}>Task name here</Box>
                    </Box>
                    <Box className={styles.vehicles}>
                      <Box className={styles.truck}>Truck</Box>
                    </Box>
                    <Box className={styles.weights}>
                      <Box className={styles.kg}>550 KG</Box>
                    </Box>
                    <Box className={styles.statusIcons}>
                      <Box className={styles.icons}>
                        <Box className={styles.ellipseDiv} />
                      </Box>
                      <Box className={styles.available}>Available</Box>
                    </Box>
                  </Box>
                  <Box className={styles.driverNames}>
                    <Box className={styles.thomasGardio}>Thomas Gardio</Box>
                  </Box>
                  <Box className={styles.actionButtons}>
                    <Box className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                        src="/group-140.svg"
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                        src="/group-1371.svg"
                      />
                      <img
                        className={styles.buttonDataInner}
                        loading="lazy"
                        alt=""
                        src="/group-1381.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        loading="lazy"
                        alt=""
                        src="/group-1391.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.tableItem} />
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default VehicleManagement;
