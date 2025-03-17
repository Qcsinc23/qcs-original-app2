import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./TopNav.module.css";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  return (
    <Box className={[styles.topNav, className].join(" ")}>
      <Box className={styles.breadcrumbs}>
        <Box
          className={styles.dashboardInventory}
        >{`Dashboard > Inventory > Inventory List`}</Box>
      </Box>
      <Box className={styles.user}>
        <Box className={styles.userChild} />
        <img
          className={styles.userItem}
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <Box className={styles.sherwynGraham}>{`Sherwyn Graham `}</Box>
      </Box>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
    </Box>
  );
};

export default TopNav;
