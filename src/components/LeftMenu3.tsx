import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu3.module.css";

export type LeftMenu3Type = {
  className?: string;
  logo?: string;

  /** Style props */
  frameBoxFlex?: CSSProperties["flex"];
  navigationAlignSelf?: CSSProperties["alignSelf"];
  tabsAlignSelf?: CSSProperties["alignSelf"];
  inventoryTabFlex?: CSSProperties["flex"];
};

const LeftMenu3: FunctionComponent<LeftMenu3Type> = ({
  className = "",
  logo,
  frameBoxFlex,
  navigationAlignSelf,
  tabsAlignSelf,
  inventoryTabFlex,
}) => {
  const frameBox4Style: CSSProperties = useMemo(() => {
    return {
      flex: frameBoxFlex,
    };
  }, [frameBoxFlex]);

  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: navigationAlignSelf,
    };
  }, [navigationAlignSelf]);

  const tabsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: tabsAlignSelf,
    };
  }, [tabsAlignSelf]);

  const inventoryTabStyle: CSSProperties = useMemo(() => {
    return {
      flex: inventoryTabFlex,
    };
  }, [inventoryTabFlex]);

  return (
    <Box className={[styles.leftMenu, className].join(" ")}>
      <Box className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
      <Box className={styles.frameParent} style={frameBox4Style}>
        <Box className={styles.frameGroup}>
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
              src="/layer-1-13.svg"
            />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <Box className={styles.frameContainer}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1112.svg"
              />
              <Box className={styles.layer1} />
            </Box>
          </Box>
          <Box className={styles.frameDiv}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.frameInner}
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
        <Box className={styles.navigation} style={navigationStyle}>
          <Box className={styles.tabs} style={tabsStyle}>
            <Box className={styles.dashboard}>Dashboard</Box>
            <Box className={styles.dashboard}>Events</Box>
            <Box className={styles.logistics}>Logistics</Box>
            <Box className={styles.inventoryTab} style={inventoryTabStyle}>
              <Box className={styles.inventory}>Inventory</Box>
              <Box className={styles.notifications}>
                <Box className={styles.inventoryList}>Inventory List</Box>
                <Box
                  className={styles.inventoryList}
                >{`Alerts & Notifications`}</Box>
              </Box>
            </Box>
            <Box className={styles.logistics}>Deliveries</Box>
            <Box className={styles.logistics}>Reports</Box>
            <Box className={styles.users}>Users</Box>
            <Box className={styles.logistics}>Settings</Box>
          </Box>
          <Box className={styles.paginationWrapper}>
            <Box className={styles.pagination}>
              <Box className={styles.frameParent1}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-2@2x.png"
                />
                <Box className={styles.rectangleParent}>
                  <Box className={styles.rectangleDiv} />
                  <img
                    className={styles.arrowIcon}
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
              <Box className={styles.rectangleParent}>
                <Box className={styles.rectangleDiv} />
                <img
                  className={styles.arrowIcon}
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
  );
};

export default LeftMenu3;
