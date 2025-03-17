import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import TableColumns from "./TableColumns";
import styles from "./Table2.module.css";

export type Table2Type = {
  className?: string;
};

const Table2: FunctionComponent<Table2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.table, className].join(" ")}>
      <Box className={styles.tableChild} />
      <Box className={styles.header}>
        <Box className={styles.headerChild} />
        <input className={styles.rectangleInput} type="checkbox" />
        <Box className={styles.itemName}>Item Name</Box>
        <Box className={styles.sku}>SKU</Box>
        <Box className={styles.category}>Category</Box>
        <Box className={styles.availQty}>{`Avail Qty `}</Box>
        <Box className={styles.resQty}>Res Qty</Box>
        <Box className={styles.location}>Location</Box>
        <Box className={styles.status}>Status</Box>
        <Box className={styles.actions}>Actions</Box>
      </Box>
      <TableColumns available="Available" />
      <TableColumns
        tableColumnsTop="195px"
        groupBoxWidth="105px"
        available="Reserved"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#ffeb3b"
      />
      <TableColumns
        tableColumnsTop="305px"
        groupBoxWidth="128px"
        available="Out of Stock"
        availableMinWidth="104px"
        ellipseBoxBackgroundColor="#ed3006"
      />
      <TableColumns
        tableColumnsTop="415px"
        groupBoxWidth="105px"
        available="Available"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#4caf50"
      />
      <TableColumns
        tableColumnsTop="525px"
        groupBoxWidth="105px"
        available="Available"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#4caf50"
      />
      <TableColumns
        tableColumnsTop="635px"
        groupBoxWidth="105px"
        available="Reserved"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#ffeb3b"
      />
      <Box className={styles.row}>
        <Box className={styles.rowItems}>578</Box>
        <Box className={styles.sectionName}>Section name</Box>
        <input className={styles.rectangleInput1} type="checkbox" />
        <Box className={styles.categoryHere}>Category here</Box>
        <Box className={styles.rowItems1}>2,257</Box>
        <Box className={styles.abc12345SBl}>ABC-12345-S-BL</Box>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image11@2x.png"
        />
        <Box className={styles.itemNameHere}>Item name here</Box>
        <Box className={styles.groupParent}>
          <img
            className={styles.groupChild}
            loading="lazy"
            alt=""
            src="/group-140.svg"
          />
          <img
            className={styles.groupItem}
            loading="lazy"
            alt=""
            src="/group-1371.svg"
          />
          <img
            className={styles.groupInner}
            loading="lazy"
            alt=""
            src="/group-1393.svg"
          />
        </Box>
        <Box className={styles.outOfStockParent}>
          <Box className={styles.outOfStock}>Out of Stock</Box>
          <Box className={styles.ellipseDiv} />
        </Box>
        <Box className={styles.rowChild} />
      </Box>
    </section>
  );
};

export default Table2;
