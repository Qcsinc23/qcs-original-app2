import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Filter.module.css";

export type FilterType = {
  className?: string;
};

const Filter: FunctionComponent<FilterType> = ({ className = "" }) => {
  return (
    <section className={[styles.filter, className].join(" ")}>
      <Box className={styles.filterChild} />
      <Box className={styles.enterName}>
        <Box className={styles.enterNameChild} />
        <Box className={styles.searchIcon}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-31.svg"
          />
        </Box>
        <Box className={styles.searchByDelivery}>
          Search by Delivery ID, Event, or Driver
        </Box>
      </Box>
      <Box className={styles.status}>
        <Box className={styles.statusChild} />
        <Box className={styles.status1}>Status</Box>
        <Box className={styles.filterDropdown}>
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4-1.svg"
            />
          </Box>
        </Box>
      </Box>
      <Box className={styles.status}>
        <Box className={styles.statusChild} />
        <Box className={styles.status}>Drivers</Box>
        <Box className={styles.filterDropdown}>
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4-1.svg"
            />
          </Box>
        </Box>
      </Box>
      <Box className={styles.status}>
        <Box className={styles.statusChild} />
        <Box className={styles.status}>Data Range</Box>
        <Box className={styles.filterDropdown}>
          <Box className={styles.rectangleParent}>
            <Box className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4-1.svg" />
          </Box>
        </Box>
      </Box>
      <Box className={styles.button}>
        <Box className={styles.buttonChild} />
        <Box className={styles.search}>Search</Box>
      </Box>
    </section>
  );
};

export default Filter;
