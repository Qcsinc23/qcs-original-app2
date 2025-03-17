import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import Name1 from "./Name1";
import Dataset from "./Dataset";
import Number1 from "./Number1";
import styles from "./DeliveryHeatmaps.module.css";

export type DeliveryHeatmapsType = {
  className?: string;
};

const DeliveryHeatmaps: FunctionComponent<DeliveryHeatmapsType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.deliveryHeatmaps, className].join(" ")}>
      <Typography
        className={styles.deliveryHeatmaps1}
        variant="inherit"
        component="h1"
        sx={{ fontWeight: "600", lineHeight: "120%", letterSpacing: "-0.03em" }}
      >
        Delivery Heatmaps
      </Typography>
      <Box className={styles.deliveryHeatmapsChild} />
      <Box className={styles.nameParent}>
        <Name1
          nameTop="calc(50% - 136.1px)"
          nameLeft="calc(50% + 28.5px)"
          nameOverflow="unset"
          nameWidth="unset"
          nameRight="unset"
          chartjsBarChart="Chart.js Scatter Chart"
          chartjsBarChartWidth="69px"
          chartjsBarChartHeight="8px"
        />
        <Dataset
          datasetHeight="unset"
          datasetTop="2px"
          datasetRight="unset"
          datasetBottom="unset"
          datasetLeft="calc(50% - 58.3px)"
          datasetOverflow="unset"
          xSDatasetBarHeight="15.1px"
          xSDatasetBarWidth="35.3px"
          xSDatasetBarBackgroundColor="#ff6f3c"
          dataset1="A dataset"
          dataset1Width="26px"
          dataset1Height="7px"
        />
        <img className={styles.frameChild} alt="" src="/vector-339.svg" />
        <img className={styles.frameItem} alt="" src="/vector-340.svg" />
        <img className={styles.frameInner} alt="" src="/vector-341.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-342.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-343.svg" />
        <img className={styles.frameChild2} alt="" src="/vector-344.svg" />
        <img className={styles.frameChild3} alt="" src="/vector-345.svg" />
        <img className={styles.frameChild4} alt="" src="/vector-346.svg" />
        <img className={styles.frameChild5} alt="" src="/vector-347.svg" />
        <img className={styles.frameChild6} alt="" src="/vector-348.svg" />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="42.4px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 182.8px)"
          sValueTick="100"
          sValueTickHeight="7px"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="77.7px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 179.8px)"
          sValueTick="50"
          sValueTickHeight="7px"
          sValueTickWidth="7px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="113px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 176.5px)"
          sValueTick="0"
          sValueTickHeight="7px"
          sValueTickWidth="unset"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="148.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 181.6px)"
          sValueTick="-50"
          sValueTickHeight="7px"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="183.6px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 184.8px)"
          sValueTick="-100"
          sValueTickHeight="7px"
          sValueTickWidth="12px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 151.5px)"
          sValueTick="-100"
          sValueTickHeight="7px"
          sValueTickWidth="12px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 67.6px)"
          sValueTick="-50"
          sValueTickHeight="7px"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% + 18.1px)"
          sValueTick="0"
          sValueTickHeight="7px"
          sValueTickWidth="unset"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% + 95.6px)"
          sValueTick="50"
          sValueTickHeight="7px"
          sValueTickWidth="7px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% + 173.3px)"
          sValueTick="100"
          sValueTickHeight="7px"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <Box className={styles.dot} />
        <Box className={styles.dot1} />
        <Box className={styles.dot2} />
        <Box className={styles.ellipseDiv} />
        <Box className={styles.frameChild7} />
        <Box className={styles.frameChild8} />
        <Box className={styles.frameChild9} />
        <Box className={styles.frameChild10} />
        <Box className={styles.frameChild11} />
        <Box className={styles.frameChild12} />
        <Box className={styles.frameChild13} />
        <Box className={styles.frameChild14} />
        <Box className={styles.frameChild15} />
        <Box className={styles.frameChild16} />
        <Box className={styles.frameChild17} />
        <Box className={styles.frameChild18} />
        <Box className={styles.frameChild19} />
        <Box className={styles.frameChild20} />
        <Box className={styles.frameChild21} />
        <Box className={styles.frameChild22} />
        <Box className={styles.frameChild23} />
        <Box className={styles.frameChild24} />
        <Box className={styles.frameChild25} />
        <Box className={styles.frameChild26} />
        <Box className={styles.frameChild27} />
        <Box className={styles.frameChild28} />
        <Box className={styles.frameChild29} />
        <Box className={styles.frameChild30} />
        <Box className={styles.frameChild31} />
        <Box className={styles.frameChild32} />
        <Box className={styles.frameChild33} />
        <Box className={styles.frameChild34} />
        <Box className={styles.frameChild35} />
        <Box className={styles.frameChild36} />
        <Box className={styles.frameChild37} />
        <Box className={styles.frameChild38} />
        <Box className={styles.frameChild39} />
        <Box className={styles.frameChild40} />
        <Box className={styles.frameChild41} />
        <Box className={styles.frameChild42} />
        <Box className={styles.frameChild43} />
        <Box className={styles.frameChild44} />
        <Box className={styles.frameChild45} />
        <Box className={styles.frameChild46} />
        <Box className={styles.frameChild47} />
        <Box className={styles.frameChild48} />
        <Box className={styles.frameChild49} />
        <Box className={styles.frameChild50} />
        <Box className={styles.frameChild51} />
        <Box className={styles.frameChild52} />
        <Box className={styles.frameChild53} />
        <Box className={styles.frameChild54} />
        <Box className={styles.frameChild55} />
        <Box className={styles.frameChild56} />
        <Box className={styles.frameChild57} />
        <Box className={styles.frameChild58} />
        <Box className={styles.frameChild59} />
        <Box className={styles.frameChild60} />
        <Box className={styles.frameChild61} />
        <Box className={styles.frameChild62} />
        <Box className={styles.frameChild63} />
        <Box className={styles.frameChild64} />
        <Box className={styles.frameChild65} />
        <Box className={styles.frameChild66} />
        <Box className={styles.frameChild67} />
      </Box>
    </Box>
  );
};

export default DeliveryHeatmaps;
