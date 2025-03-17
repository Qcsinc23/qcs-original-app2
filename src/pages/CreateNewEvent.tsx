import { FunctionComponent, useState } from "react";
import {
  Box,
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
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeftMenu2 from "../components/LeftMenu2";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./CreateNewEvent.module.css";

// Event type options
const EVENT_TYPES = [
  'Conference',
  'Exhibition',
  'Workshop',
  'Seminar',
  'Corporate Event',
  'Charity Event',
  'Social Gathering',
  'Wedding',
  'Concert',
  'Other'
];

const CreateNewEvent: FunctionComponent = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState<{message: string, severity: 'success' | 'error' | 'info'} | null>(null);

  // Handle form submission
  const handleSaveAndContinue = () => {
    if (validateForm()) {
      // In a real application, you would save the data to your backend
      // For now, we just show a success message and navigate
      setFeedback({
        message: 'Event saved successfully!',
        severity: 'success'
      });
      
      setTimeout(() => {
        navigate('/events-list');
      }, 1500);
    }
  };
  
  // Handle saving as draft
  const handleSaveAsDraft = () => {
    // Unlike the main save, drafts might not need validation
    setFeedback({
      message: 'Event saved as draft!',
      severity: 'success'
    });
  };
  
  // Form validation
  const validateForm = () => {
    if (!eventName.trim()) {
      setFeedback({
        message: 'Event name is required',
        severity: 'error'
      });
      return false;
    }
    
    if (!eventType) {
      setFeedback({
        message: 'Event type is required',
        severity: 'error'
      });
      return false;
    }
    
    if (!description.trim()) {
      setFeedback({
        message: 'Description is required',
        severity: 'error'
      });
      return false;
    }
    
    return true;
  };
  
  // Close feedback alert
  const handleCloseFeedback = () => {
    setFeedback(null);
  };

  return (
    <Box className={styles.createNewEvent}>
      <LeftMenu2 />
      <main className={styles.createNewEventInner}>
        <section className={styles.frameParent}>
          <Box className={styles.stepsWrapper}>
            <img
              className={styles.stepsIcon}
              loading="lazy"
              alt=""
              src="/steps.svg"
            />
          </Box>
          <Box className={styles.frameGroup}>
            <FrameComponent3
              dashboardEventsCreateNewEve={`Dashboard > Events > Create New Event`}
              createNewEvent="Create New Event"
              button={
                <Button
                  className={styles.draftButton}
                  disableElevation
                  variant="outlined"
                  onClick={handleSaveAsDraft}
                  sx={{
                    textTransform: "none",
                    color: "#1a3e59",
                    fontSize: "18",
                    borderColor: "#1a3e59",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#1a3e59" },
                    width: 180,
                    height: 50,
                  }}
                >
                  Save as Draft
                </Button>
              }
            />
            <Box className={styles.form}>
              <Box className={styles.formChild} />
              <Box className={styles.basicInformationParent}>
                <Box className={styles.basicInformation}>Basic Information</Box>
                <Box className={styles.frameChild} />
              </Box>
              <Box className={styles.eventNameInputParent}>
                <Box className={styles.eventNameInput}>
                  <TextField
                    className={styles.eventName}
                    placeholder="* Event Name"
                    variant="outlined"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
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
                    className={styles.eventType}
                    variant="outlined"
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
                    <Select
                      displayEmpty
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      inputProps={{ 'aria-label': 'Event Type' }}
                    >
                      <MenuItem disabled value="">
                        <em>* Event Type</em>
                      </MenuItem>
                      {EVENT_TYPES.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </Box>
                <textarea
                  className={styles.description}
                  placeholder="* Description "
                  rows={6}
                  cols={69}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>
              <Box className={styles.navigationButtons}>
                <Button
                  className={styles.button}
                  disableElevation
                  variant="outlined"
                  onClick={() => navigate(-1)}
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "18",
                    borderColor: "#9e9e9e",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    width: 140,
                    height: 50,
                  }}
                >
                  Previous
                </Button>
                <Button
                  className={styles.button1}
                  variant="contained"
                  onClick={handleSaveAndContinue}
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "18",
                    background: "#ff6f3c",
                    borderRadius: "10px",
                    "&:hover": { background: "#ff6f3c" },
                    width: 220,
                    height: 50,
                  }}
                >{`Save & Continue`}</Button>
              </Box>
            </Box>
          </Box>
        </section>
      </main>
      
      {/* Feedback alerts - only render when feedback exists */}
      {feedback && (
        <Snackbar 
          open={true} 
          autoHideDuration={6000} 
          onClose={handleCloseFeedback}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseFeedback} severity={feedback.severity}>
            {feedback.message}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default CreateNewEvent;
