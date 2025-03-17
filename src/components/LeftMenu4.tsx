import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu4.module.css";

export type LeftMenu4Type = {
  className?: string;
  logo?: string;

  /** Style props */
  leftMenuPosition?: CSSProperties["position"];
  leftMenuTop?: CSSProperties["top"];
  leftMenuLeft?: CSSProperties["left"];
  leftMenuHeight?: CSSProperties["height"];
  menuContentFlex?: CSSProperties["flex"];
  pageContentAlignSelf?: CSSProperties["alignSelf"];
  mainContentFlex?: CSSProperties["flex"];
  frameBoxFlex?: CSSProperties["flex"];
};

const LeftMenu4: FunctionComponent<LeftMenu4Type> = ({
  className = "",
  leftMenuPosition,
  leftMenuTop,
  leftMenuLeft,
  leftMenuHeight,
  logo,
  menuContentFlex,
  pageContentAlignSelf,
  mainContentFlex,
  frameBoxFlex,
}) => {
  const leftMenuStyle: CSSProperties = useMemo(() => {
    return {
      position: leftMenuPosition,
      top: leftMenuTop,
      left: leftMenuLeft,
      height: leftMenuHeight,
    };
  }, [leftMenuPosition, leftMenuTop, leftMenuLeft, leftMenuHeight]);

  const menuContentStyle: CSSProperties = useMemo(() => {
    return {
      flex: menuContentFlex,
    };
  }, [menuContentFlex]);

  const pageContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: pageContentAlignSelf,
    };
  }, [pageContentAlignSelf]);

  const mainContentStyle: CSSProperties = useMemo(() => {
    return {
      flex: mainContentFlex,
    };
  }, [mainContentFlex]);

  const frameBox5Style: CSSProperties = useMemo(() => {
    return {
      flex: frameBoxFlex,
    };
  }, [frameBoxFlex]);

  return (
    <Box
      className={[styles.leftMenu, className].join(" ")}
      style={leftMenuStyle}
    >
      <Box className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
      <Box className={styles.menuContent} style={menuContentStyle}>
        <Box className={styles.userProfileParent}>
          <Box className={styles.userProfile}>
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
              className={styles.userProfileChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <Box className={styles.userDropdown}>
              <img
                className={styles.userDropdownChild}
                loading="lazy"
                alt=""
                src="/group-1112.svg"
              />
              <Box className={styles.layer1} />
            </Box>
          </Box>
          <Box className={styles.navigation}>
            <img
              className={styles.navigationChild}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.navigationChild}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.navItemIcon}
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
        <Box className={styles.pageContent} style={pageContentStyle}>
          <Box className={styles.dashboard}>Dashboard</Box>
          <Box className={styles.mainContent} style={mainContentStyle}>
            <Box className={styles.subNavigationParent} style={frameBox5Style}>
              <Box className={styles.subNavigation}>
                <Box className={styles.dashboard}>Events</Box>
                <Box className={styles.logistics}>Logistics</Box>
                <Box className={styles.pageOptions}>
                  <Box className={styles.inventory}>Inventory</Box>
                  <Box className={styles.inventoryList}>Inventory List</Box>
                </Box>
              </Box>
              <Box className={styles.contentActions}>
                <Box className={styles.actionButtons}>
                  <img
                    className={styles.buttonContainerIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-2@2x.png"
                  />
                  <Box className={styles.buttonContainer}>
                    <Box className={styles.buttonContainerChild} />
                    <img
                      className={styles.buttonContainerItem}
                      loading="lazy"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </Box>
                  <Box className={styles.buttonContainer}>
                    <Box className={styles.buttonContainerChild} />
                    <img
                      className={styles.arrowIcon}
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className={styles.alertsNotifications}
            >{`Alerts & Notifications`}</Box>
          </Box>
          <Box className={styles.pageFooter}>
            <Box className={styles.footerNavigation}>
              <Box className={styles.logistics}>Deliveries</Box>
              <Box className={styles.logistics}>Reports</Box>
              <Box className={styles.users}>Users</Box>
              <Box className={styles.logistics}>Settings</Box>
            </Box>
            <Box className={styles.footerActions}>
              <Box className={styles.buttonContainer}>
                <Box className={styles.buttonContainerChild} />
                <img
                  className={styles.buttonContainerItem}
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

export default LeftMenu4;
