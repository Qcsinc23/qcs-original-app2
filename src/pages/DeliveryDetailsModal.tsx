import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import User from "../components/User1";
import Filter from "../components/Filter";
import Header from "../components/Header";
import TableRow from "../components/TableRow";
import Modal3 from "../components/Modal3";
import styles from "./DeliveryDetailsModal.module.css";

const DeliveryDetailsModal: FunctionComponent = () => {
  return (
    <Box className={styles.deliveryDetailsModal}>
      <Box className={styles.leftMenu}>
        <Box className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <Box className={styles.menuContent}>
          <Box className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/frame-2@2x.png" />
            <Box className={styles.rectangleParent}>
              <Box className={styles.frameItem} />
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </Box>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/placeholder@2x.png"
            />
          </Box>
          <Box className={styles.navigation}>
            <Box className={styles.dashboard}>Dashboard</Box>
            <Box className={styles.events}>Events</Box>
            <Box className={styles.logistics}>Logistics</Box>
            <Box className={styles.inventory}>Inventory</Box>
            <Box className={styles.pageNav}>
              <Box className={styles.deliveries}>Deliveries</Box>
              <Box className={styles.liveTracking}>
                <Box className={styles.liveTrackingMap}>Live Tracking Map</Box>
                <Box className={styles.statusUpdates}>Status Updates</Box>
                <Box className={styles.liveTrackingMap}>Proof of Delivery</Box>
              </Box>
              <Box className={styles.reportsUsers}>
                <Box className={styles.reports}>Reports</Box>
                <Box className={styles.users}>Users</Box>
              </Box>
              <Box className={styles.settings}>Settings</Box>
            </Box>
          </Box>
          <Box className={styles.submenu}>
            <Box className={styles.layer1Parent}>
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
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1073.svg"
              />
              <Box className={styles.frameGroup}>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/group-1113.svg"
                />
                <Box className={styles.layer1} />
              </Box>
              <img
                className={styles.frameChild3}
                loading="lazy"
                alt=""
                src="/group-1133.svg"
              />
            </Box>
            <Box className={styles.frameContainer}>
              <img
                className={styles.frameChild3}
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
      <Box
        className={styles.dashboardDelivery}
      >{`Dashboard > Delivery > Status Updates`}</Box>
      <User />
      <img
        className={styles.vectorIcon1}
        loading="lazy"
        alt=""
        src="/vector-14.svg"
      />
      <Typography
        className={styles.deliveryStatusUpdates}
        variant="inherit"
        component="h2"
        sx={{
          fontWeight: "600",
          fontSize: "var(--font-size-11xl)",
          lineHeight: "120%",
          letterSpacing: "-0.03em",
        }}
      >
        Delivery Status Updates
      </Typography>
      <Box className={styles.button}>
        <Box className={styles.buttonChild} />
        <Box className={styles.vectorWrapper}>
          <img className={styles.vectorIcon2} alt="" src="/vector-22.svg" />
        </Box>
        <Box className={styles.filter}>Filter</Box>
      </Box>
      <Box className={styles.button1}>
        <Box className={styles.buttonChild} />
        <img
          className={styles.buttonInner}
          loading="lazy"
          alt=""
          src="/group-220.svg"
        />
        <Box className={styles.export}>Export</Box>
      </Box>
      <section className={styles.metrics}>
        <Box className={styles.inTransit}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.metricValuesParent}>
            <Box className={styles.metricValues}>20</Box>
            <Box className={styles.inTransit1}>In Transit</Box>
          </Box>
          <img
            className={styles.layer1Icon3}
            loading="lazy"
            alt=""
            src="/layer-1-3.svg"
          />
        </Box>
        <Box className={styles.delivered}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.parent}>
            <Box className={styles.metricValues}>88</Box>
            <Box className={styles.delivered1}>Delivered</Box>
          </Box>
          <img
            className={styles.layer1Icon4}
            loading="lazy"
            alt=""
            src="/layer-1-4.svg"
          />
        </Box>
        <Box className={styles.delayed}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.group}>
            <Box className={styles.metricValues}>12</Box>
            <Box className={styles.delayed1}>Delayed</Box>
          </Box>
          <img
            className={styles.layer1Icon4}
            loading="lazy"
            alt=""
            src="/layer-1-5.svg"
          />
        </Box>
        <Box className={styles.totalDeliveries}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.group}>
            <Box className={styles.metricValues}>120</Box>
            <Box className={styles.totalDeliveries1}>Total Deliveries</Box>
          </Box>
          <img
            className={styles.layer1Icon6}
            loading="lazy"
            alt=""
            src="/layer-1-6.svg"
          />
        </Box>
      </section>
      <Filter />
      <Typography
        className={styles.deliveriesList}
        variant="inherit"
        component="h2"
        sx={{
          fontWeight: "600",
          fontSize: "var(--font-size-11xl)",
          lineHeight: "120%",
          letterSpacing: "-0.03em",
        }}
      >
        Deliveries List
      </Typography>
      <Box className={styles.button2}>
        <Box className={styles.rectangleDiv} />
        <Box className={styles.assignDriver}>Assign Driver</Box>
      </Box>
      <Box className={styles.button3}>
        <Box className={styles.buttonChild1} />
        <Box className={styles.export}>Send Group Communication</Box>
      </Box>
      <section className={styles.table}>
        <Box className={styles.tableChild} />
        <Header />
        <Box className={styles.tableBody}>
          <TableRow />
        </Box>
      </section>
      <section className={styles.modalBackground} />
      <Modal3 />
    </Box>
  );
};

export default DeliveryDetailsModal;
