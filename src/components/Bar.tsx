import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Bar.module.css";

export type BarType = {
  className?: string;
};

const Bar: FunctionComponent<BarType> = ({ className = "" }) => {
  return (
    <Box className={[styles.bar, className].join(" ")}>
      <Box className={styles.barElement} />
    </Box>
  );
};

export default Bar;
