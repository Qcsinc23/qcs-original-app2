import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./TableRows.module.css";

export type TableRowsType = {
  className?: string;

  /** Style props */
  spanColor?: CSSProperties["color"];
};

const TableRows: FunctionComponent<TableRowsType> = ({
  className = "",
  spanColor,
}) => {
  const typographyStyle: CSSProperties = useMemo(() => {
    return {
      color: spanColor,
    };
  }, [spanColor]);

  return (
    <Box className={[styles.tableRows, className].join(" ")}>
      <Typography
        className={styles.taskName}
        variant="inherit"
        component="h3"
        sx={{ fontWeight: "500", lineHeight: "200%", letterSpacing: "-0.02em" }}
      >
        Task name
      </Typography>
      <Box className={styles.assigneeRobertSteveParent}>
        <Box className={styles.assigneeRobertSteveContainer}>
          <Typography
            variant="inherit"
            component="span"
          >{`Assignee: `}</Typography>
          <Typography
            className={styles.robertSteve}
            variant="inherit"
            component="span"
            sx={{ fontWeight: "500" }}
          >
            Robert Steve
          </Typography>
        </Box>
        <Box className={styles.dueDateDdMmYyyyWrapper}>
          <Box className={styles.dueDateDdMmYyyyContainer}>
            <Typography variant="inherit" component="span">
              <Typography variant="inherit" component="span">
                Due Date:
              </Typography>
            </Typography>
            <Typography variant="inherit" component="span">
              <Typography
                variant="inherit"
                component="span"
                style={typographyStyle}
              >{` `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: "500" }}
              >
                dd-mm-yyyy
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TableRows;
