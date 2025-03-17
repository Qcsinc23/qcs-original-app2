import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./NumberSmall.module.css";

export type NumberSmallType = {
  className?: string;
};

const NumberSmall: FunctionComponent<NumberSmallType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.numberSmall, className].join(" ")}>
      <Box className={styles.xSValue}>January</Box>
    </Box>
  );
};

export default NumberSmall;
