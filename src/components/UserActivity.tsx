import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./UserActivity.module.css";

export type UserActivityType = {
  className?: string;
};

const UserActivity: FunctionComponent<UserActivityType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.userActivity, className].join(" ")}>
      <Box className={styles.userActivityChild} />
      <Typography
        className={styles.userActivity1}
        variant="inherit"
        component="h2"
        sx={{
          fontWeight: "600",
          fontSize: "var(--font-size-3xl)",
          lineHeight: "120%",
          letterSpacing: "-0.03em",
        }}
      >
        User Activity
      </Typography>
      <Box className={styles.userActivityItem} />
      <Box className={styles.userLogins}>User Logins</Box>
      <Box className={styles.activeUsers}>Active Users</Box>
      <Box className={styles.div}>24</Box>
      <Box className={styles.div1}>3</Box>
      <Box className={styles.recentUserActivities}>Recent User Activities</Box>
      <Box className={styles.div2}>7</Box>
    </Box>
  );
};

export default UserActivity;
