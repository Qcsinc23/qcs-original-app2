import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import UserContainer from "./UserContainer";
import styles from "./DashboardContent.module.css";

export type DashboardContentType = {
  className?: string;
};

const DashboardContent: FunctionComponent<DashboardContentType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.dashboardContent, className].join(" ")}>
      <Box className={styles.updatesContent}>
        <Box className={styles.updatesHeader}>
          <Box className={styles.updatesTitle}>
            <Box
              className={styles.dashboardDelivery}
            >{`Dashboard > Delivery > Status Updates`}</Box>
            <Typography
              className={styles.deliveryStatusUpdates}
              variant="inherit"
              component="h2"
              sx={{
                fontWeight: "600",
                fontSize: "var(--font-size-11xl)",
                lineHeight: "120%",
                letterSpacing: "-0.03em",
              }}
            >
              Delivery Status Updates
            </Typography>
          </Box>
        </Box>
        <Box className={styles.userContentParent}>
          <UserContainer />
          <Box className={styles.actions}>
            <Button
              className={styles.button}
              startIcon={<img width="24px" height="22px" src="/vector-2.svg" />}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#9e9e9e",
                fontSize: "18",
                borderColor: "#9e9e9e",
                borderRadius: "10px",
                "&:hover": { borderColor: "#9e9e9e" },
              }}
            >
              Filter
            </Button>
            <Button
              className={styles.button1}
              startIcon={
                <img width="24px" height="24px" src="/group-220.svg" />
              }
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#9e9e9e",
                fontSize: "18",
                borderColor: "#9e9e9e",
                borderRadius: "10px",
                "&:hover": { borderColor: "#9e9e9e" },
                height: 50,
              }}
            >
              Export
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={styles.metrics}>
        <Box className={styles.inTransit}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.metric}>
            <Box className={styles.metricValues}>20</Box>
            <Box className={styles.total - deliveries}>In Transit</Box>
          </Box>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-1-3.svg"
          />
        </Box>
        <Box className={styles.delivered}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.parent}>
            <Box className={styles.metricValues}>88</Box>
            <Box className={styles.total - deliveries}>Delivered</Box>
          </Box>
          <img
            className={styles.layer1Icon1}
            loading="lazy"
            alt=""
            src="/layer-1-4.svg"
          />
        </Box>
        <Box className={styles.delayed}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.group}>
            <Box className={styles.metricValues}>12</Box>
            <Box className={styles.total - deliveries}>Delayed</Box>
          </Box>
          <img
            className={styles.layer1Icon1}
            loading="lazy"
            alt=""
            src="/layer-1-5.svg"
          />
        </Box>
        <Box className={styles.totalDeliveries}>
          <Box className={styles.inTransitChild} />
          <Box className={styles.group}>
            <Box className={styles.metricValues}>120</Box>
            <Box className={styles.totalDeliveries1}>Total Deliveries</Box>
          </Box>
          <img
            className={styles.layer1Icon3}
            loading="lazy"
            alt=""
            src="/layer-1-6.svg"
          />
        </Box>
      </Box>
      <Box className={styles.filter}>
        <Box className={styles.filterChild} />
        <TextField
          className={styles.enterName}
          placeholder="Search by Delivery ID, Event, or Driver"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img width="18px" height="18px" src="/vector-3.svg" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#9e9e9e" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              paddingLeft: "20px",
              borderRadius: "8px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { paddingLeft: "10px", color: "#9e9e9e" },
          }}
        />
        <FormControl
          className={styles.status}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
            height: "50px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "50px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "50px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "50px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "50px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#9e9e9e",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="secondary" />
          <Select
            color="secondary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Status</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.status}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
            height: "50px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "50px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "50px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "50px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "50px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#9e9e9e",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="secondary" />
          <Select
            color="secondary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Drivers</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.status}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
            height: "50px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "50px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "50px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "50px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "50px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#9e9e9e",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="secondary" />
          <Select
            color="secondary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Data Range</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <Button
          className={styles.button2}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#ff6f3c",
            borderRadius: "10px",
            "&:hover": { background: "#ff6f3c" },
            width: 125,
            height: 50,
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardContent;
