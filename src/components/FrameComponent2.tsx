import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.itemNameContainerParent, className].join(" ")}>
      <Box className={styles.itemNameContainer}>
        <Box className={styles.itemNameValue}>
          <Box className={styles.itemName}>Item name</Box>
          <Box className={styles.lowStock}>Low Stock</Box>
        </Box>
      </Box>
      <Box className={styles.rectangleParent}>
        <Box className={styles.frameChild} />
        <Box className={styles.restock}>Restock</Box>
      </Box>
    </Box>
  );
};

export default FrameComponent2;
