import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./User1.module.css";

export type UserType = {
  className?: string;
};

const User: FunctionComponent<UserType> = ({ className = "" }) => {
  return (
    <Box className={[styles.user, className].join(" ")}>
      <Box className={styles.userChild} />
      <img
        className={styles.userIcon}
        loading="lazy"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <Box className={styles.sherwynGrahamWrapper}>
        <Box className={styles.sherwynGraham}>{`Sherwyn Graham `}</Box>
      </Box>
    </Box>
  );
};

export default User;
