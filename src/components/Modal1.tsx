import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import styles from "./Modal1.module.css";

export type Modal1Type = {
  className?: string;
};

const Modal1: FunctionComponent<Modal1Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.modal, className].join(" ")}>
      <Box className={styles.modalChild} />
      <Box className={styles.modalActions}>
        <Typography
          className={styles.createAlert}
          variant="inherit"
          component="h3"
          sx={{
            fontWeight: "600",
            lineHeight: "120%",
            letterSpacing: "-0.03em",
          }}
        >
          Create Alert
        </Typography>
        <Box className={styles.createIconContainer}>
          <img
            className={styles.createIconContainerChild}
            loading="lazy"
            alt=""
            src="/group-209.svg"
          />
        </Box>
      </Box>
      <Box className={styles.separator}>
        <Box className={styles.separatorChild} />
      </Box>
      <TextField
        className={styles.alertName}
        placeholder="* Alert Name"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9e9e9e" },
          "& .MuiInputBase-root": {
            height: "60px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            fontSize: "18px",
          },
        }}
      />
      <FormControl
        className={styles.triggerType}
        variant="standard"
        sx={{
          borderColor: "#9e9e9e",
          borderStyle: "SOLID",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          width: "88.88888888888889%",
          height: "60px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "60px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "60px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "60px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "60px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            fontSize: 18,
            fontWeight: "Regular",
            fontFamily: "Poppins",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "30px",
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
          <MenuItem>* Trigger Type</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <TextField
        className={styles.modalInputFields}
        placeholder="* Parameters"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9e9e9e" },
          "& .MuiInputBase-root": {
            height: "65px",
            borderRadius: "10px",
            fontSize: "18px",
          },
        }}
      />
      <Box className={styles.notificationTitle}>
        <Box className={styles.notificationChannels}>Notification Channels</Box>
        <Box className={styles.channels}>
          <Box className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <Box className={styles.channelTypes}>
              <Box className={styles.email}>Email</Box>
            </Box>
          </Box>
          <Box className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <Box className={styles.channelTypes}>
              <Box className={styles.email}>SMS</Box>
            </Box>
          </Box>
          <Box className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <Box className={styles.channelTypes}>
              <Box className={styles.email}>In-App</Box>
            </Box>
          </Box>
          <Box className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <Box className={styles.channelTypes}>
              <Box className={styles.push}>Push</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <TextField
        className={styles.modalInputFields}
        placeholder="* Email templates"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9e9e9e" },
          "& .MuiInputBase-root": {
            height: "65px",
            borderRadius: "10px",
            fontSize: "18px",
          },
        }}
      />
      <Box className={styles.frequency}>
        <Box className={styles.notificationChannels}>Frequency Settings</Box>
        <Box className={styles.frequencyOptions}>
          <Box className={styles.frequencyTypes}>
            <Box className={styles.frequencySelections}>
              <input className={styles.channelBackground} type="checkbox" />
              <Box className={styles.frequencyTypeNames}>
                <Box className={styles.immediate}>Immediate</Box>
              </Box>
            </Box>
            <Box className={styles.digestOption}>
              <input className={styles.groupInput} type="checkbox" />
              <Box className={styles.frequencyTypeNames}>
                <Box className={styles.digest}>Digest</Box>
              </Box>
            </Box>
            <Box className={styles.frequencySelections1}>
              <input className={styles.channelBackground} type="checkbox" />
              <Box className={styles.frequencyTypeNames}>
                <Box className={styles.daily}>Daily</Box>
              </Box>
            </Box>
            <Box className={styles.frequencySelections1}>
              <input className={styles.channelBackground} type="checkbox" />
              <Box className={styles.frequencyTypeNames}>
                <Box className={styles.digest}>Weekly</Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.actionButtons}>
            <Button
              className={styles.button}
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
              Cancel
            </Button>
            <Button
              className={styles.button1}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#ff6f3c",
                borderRadius: "10px",
                "&:hover": { background: "#ff6f3c" },
                height: 50,
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal1;
