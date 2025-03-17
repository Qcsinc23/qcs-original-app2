import { FunctionComponent } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Typography,
} from "@mui/material";
import styles from "./Modal.module.css";

export type ModalType = {
  className?: string;
};

const Modal: FunctionComponent<ModalType> = ({ className = "" }) => {
  return (
    <Box className={[styles.modal, className].join(" ")}>
      <Box className={styles.modalChild} />
      <Box className={styles.modalHeader}>
        <TextField
          className={styles.eventName}
          placeholder="* Task Name"
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
        <Button
          className={styles.eventType}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: "18",
            background: "#fff",
            border: "#9e9e9e solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#fff" },
            width: 675,
            height: 60,
          }}
        >
          * Related Event (Auto-fill if accessed from an event)
        </Button>
      </Box>
      <TextField
        className={styles.description}
        placeholder="* Description "
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9e9e9e" },
          "& .MuiInputBase-root": {
            height: "120px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            fontSize: "18px",
          },
        }}
      />
      <form className={styles.priorityFieldsParent}>
        <Box className={styles.priorityFields}>
          <FormControl
            className={styles.priorityLevel}
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
              width: "31.91304347826085%",
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
              <MenuItem>* Priority Level</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.dueDate}
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
              width: "31.840579710144905%",
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
                marginLeft: "29.700000000000728px",
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
              <MenuItem>* Due Date</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.priorityLevel}
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
              width: "31.91304347826085%",
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
                marginLeft: "30.399999999999636px",
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
              <MenuItem>* Time</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </Box>
        <Box className={styles.assigneeFieldParent}>
          <Box className={styles.assigneeField}>
            <FormControl
              className={styles.assignedTo}
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
                width: "48.91304347826087%",
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
                <MenuItem>* Assigned to</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <Box className={styles.attachmentsWrapper}>
              <Box className={styles.attachments}>Attachments</Box>
            </Box>
            <TextField
              className={styles.assigneeFieldChild}
              placeholder="File Upload"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="/group-182.png" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#9e9e9e" },
                "& .MuiInputBase-root": {
                  height: "60px",
                  backgroundColor: "#fff",
                  paddingRight: "32px",
                  borderRadius: "10px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#3f3f3f" },
                width: "532px",
              }}
            />
          </Box>
          <Box className={styles.frameParent}>
            <Box className={styles.checkboxParent}>
              <input className={styles.checkbox} type="checkbox" />
              <Box className={styles.sendAnImmediateNotificationWrapper}>
                <Box className={styles.sendAnImmediateContainer}>
                  <Typography
                    className={styles.span}
                    variant="inherit"
                    component="span"
                  >
                    *
                  </Typography>
                  <Typography
                    className={styles.sendAnImmediate}
                    variant="inherit"
                    component="span"
                  >
                     Send an immediate notification to the assignee.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-183.svg"
              />
              <Box className={styles.addSubTaskWrapper}>
                <Box className={styles.addSubTask}>Add Sub-task</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.setReminderParent}>
          <Typography
            className={styles.setReminder}
            component="h3"
            sx={{
              fontFamily: "var(--font-poppins)",
              fontWeight: "600",
              fontSize: "var(--font-size-7xl)",
              lineHeight: "34px",
              letterSpacing: "-0.03em",
            }}
          >
            Set Reminder
          </Typography>
          <Box className={styles.reminderFields}>
            <FormControl
              className={styles.dueDate1}
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
                width: "48.30163790260528%",
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
                  marginLeft: "29.700000000000728px",
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
                <MenuItem>* Due Date</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.time1}
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
                width: "48.41156425195122%",
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
                  marginLeft: "30.400000000001455px",
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
                <MenuItem>* Time</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </Box>
        </Box>
        <Button
          className={styles.button}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#ff6f3c",
            borderRadius: "10px",
            "&:hover": { background: "#ff6f3c" },
            width: 160,
            height: 50,
          }}
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default Modal;
