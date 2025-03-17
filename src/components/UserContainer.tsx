import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./UserContainer.module.css";

export type UserContainerType = {
  className?: string;
};

const UserContainer: FunctionComponent<UserContainerType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.userContainer, className].join(" ")}>
      <Box className={styles.userIcon}>
        <img
          className={styles.profilePictureIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </Box>
      <Box className={styles.user}>
        <Box className={styles.userChild} />
        <img
          className={styles.profileBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <Box className={styles.userName}>
          <Box className={styles.sherwynGraham}>{`Sherwyn Graham `}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserContainer;
