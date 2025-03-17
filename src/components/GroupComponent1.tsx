import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  metricPlaceholder?: string;
  tasksDueToday?: string;

  /** Style props */
  metricPlaceholderWidth?: CSSProperties["width"];
  tasksDueTodayDisplay?: CSSProperties["display"];
  tasksDueTodayMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  metricPlaceholder,
  metricPlaceholderWidth,
  tasksDueToday,
  tasksDueTodayDisplay,
  tasksDueTodayMinWidth,
}) => {
  const metricPlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      width: metricPlaceholderWidth,
    };
  }, [metricPlaceholderWidth]);

  const tasksDueTodayStyle: CSSProperties = useMemo(() => {
    return {
      display: tasksDueTodayDisplay,
      minWidth: tasksDueTodayMinWidth,
    };
  }, [tasksDueTodayDisplay, tasksDueTodayMinWidth]);

  return (
    <Box className={[styles.rectangleParent, className].join(" ")}>
      <Box className={styles.frameChild} />
      <Box className={styles.metricPlaceholder} style={metricPlaceholderStyle}>
        {metricPlaceholder}
      </Box>
      <Box className={styles.tasksDueToday} style={tasksDueTodayStyle}>
        {tasksDueToday}
      </Box>
    </Box>
  );
};

export default GroupComponent1;
