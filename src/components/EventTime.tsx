import { FunctionComponent, useMemo, type CSSProperties } from 'react';
import { Box,Typography } from "@mui/material"
import styles from './EventTime.module.css';

export type EventTimeType = {
  className?: string;
  prop?: string;
  
  /** Style props */
  timeWidth?: CSSProperties['width'];
  boxWidth?: CSSProperties['width'];
  groupBoxBackgroundColor?: CSSProperties['backgroundColor'];
  rectangleBoxBackgroundColor?: CSSProperties['backgroundColor'];
}



const EventTime:FunctionComponent<EventTimeType> = ({ className="", timeWidth, prop, boxWidth, groupBoxBackgroundColor, rectangleBoxBackgroundColor }) => {
  const timeStyle: CSSProperties = useMemo(() => {
                  return {
                    width: timeWidth
                  };
                }, [timeWidth]);
              
  const boxStyle: CSSProperties = useMemo(() => {
                  return {
                    width: boxWidth
                  };
                }, [boxWidth]);
              
  const groupBox1Style: CSSProperties = useMemo(() => {
                  return {
                    backgroundColor: groupBoxBackgroundColor
                  };
                }, [groupBoxBackgroundColor]);
              
  const rectangleBoxStyle: CSSProperties = useMemo(() => {
                  return {
                    backgroundColor: rectangleBoxBackgroundColor
                  };
                }, [rectangleBoxBackgroundColor]);
              
  return (
    <Box className={[styles.eventTime, className].join(' ')}>
      <Box className={styles.time} style={timeStyle}>
        <Box className={styles.div9} style={boxStyle}>{prop}</Box>
      </Box>
      <Box className={styles.rectangleParent} style={groupBox1Style}>
        <Box className={styles.frameChild} style={rectangleBoxStyle} />
        <Box className={styles['event-name-000000-container']}>
          <Typography className={styles.eventName} variant="inherit" sx={ {"fontWeight":"600"} }>Event name</Typography>
          <Typography className={styles.p} variant="inherit">00:00:00</Typography>
        </Box>
      </Box>
    </Box>);
};

export default EventTime;
