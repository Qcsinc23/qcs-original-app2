import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./TableColumns.module.css";

export type TableColumnsType = {
  className?: string;
  available?: string;

  /** Style props */
  tableColumnsTop?: CSSProperties["top"];
  groupBoxWidth?: CSSProperties["width"];
  availableMinWidth?: CSSProperties["minWidth"];
  ellipseBoxBackgroundColor?: CSSProperties["backgroundColor"];
};

const TableColumns: FunctionComponent<TableColumnsType> = ({
  className = "",
  tableColumnsTop,
  groupBoxWidth,
  available,
  availableMinWidth,
  ellipseBoxBackgroundColor,
}) => {
  const tableColumnsStyle: CSSProperties = useMemo(() => {
    return {
      top: tableColumnsTop,
    };
  }, [tableColumnsTop]);

  const groupBox3Style: CSSProperties = useMemo(() => {
    return {
      width: groupBoxWidth,
    };
  }, [groupBoxWidth]);

  const availableStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: availableMinWidth,
    };
  }, [availableMinWidth]);

  const ellipseBoxStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseBoxBackgroundColor,
    };
  }, [ellipseBoxBackgroundColor]);

  return (
    <Box
      className={[styles.tableColumns, className].join(" ")}
      style={tableColumnsStyle}
    >
      <Box className={styles.columnOne}>578</Box>
      <Box className={styles.sectionName}>Section name</Box>
      <input className={styles.rectangleInput} type="checkbox" />
      <Box className={styles.categoryHere}>Category here</Box>
      <Box className={styles.columnFour}>2,257</Box>
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
        <img className={styles.groupInner} alt="" src="/group-1393.svg" />
      </Box>
      <Box className={styles.availableParent} style={groupBox3Style}>
        <Box className={styles.available} style={availableStyle}>
          {available}
        </Box>
        <Box className={styles.ellipseDiv} style={ellipseBoxStyle} />
      </Box>
      <Box className={styles.tableColumnsChild} />
    </Box>
  );
};

export default TableColumns;
