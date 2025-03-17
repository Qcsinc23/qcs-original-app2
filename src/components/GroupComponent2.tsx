import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  className?: string;
  ongoing?: string;

  /** Style props */
  groupDivAlignSelf?: CSSProperties["alignSelf"];
  groupDivFlex?: CSSProperties["flex"];
  groupDivMinWidth?: CSSProperties["minWidth"];
  souscatgorieBackgroundColor?: CSSProperties["backgroundColor"];
  ongoingDisplay?: CSSProperties["display"];
  ongoingMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  groupDivAlignSelf,
  groupDivFlex,
  groupDivMinWidth,
  souscatgorieBackgroundColor,
  ongoing,
  ongoingDisplay,
  ongoingMinWidth,
}) => {
  const groupBoxStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: groupDivAlignSelf,
      flex: groupDivFlex,
      minWidth: groupDivMinWidth,
    };
  }, [groupDivAlignSelf, groupDivFlex, groupDivMinWidth]);

  const souscatgorieStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: souscatgorieBackgroundColor,
    };
  }, [souscatgorieBackgroundColor]);

  const ongoingStyle: CSSProperties = useMemo(() => {
    return {
      display: ongoingDisplay,
      minWidth: ongoingMinWidth,
    };
  }, [ongoingDisplay, ongoingMinWidth]);

  return (
    <Box
      className={[styles.rectangleParent, className].join(" ")}
      style={groupBoxStyle}
    >
      <Box className={styles.frameChild} />
      <Box className={styles.eventDetails}>
        <Box className={styles.eventTime}>
          <Box className={styles.eventName}>Event name</Box>
          <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
        </Box>
      </Box>
      <Box className={styles.eventStatus}>
        <Box className={styles.statusIconContainer}>
          <Box className={styles.souscatgorie} style={souscatgorieStyle} />
        </Box>
        <Box className={styles.ongoing} style={ongoingStyle}>
          {ongoing}
        </Box>
      </Box>
    </Box>
  );
};

export default GroupComponent2;
