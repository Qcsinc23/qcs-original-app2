import { FunctionComponent, useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  Typography,
  Button,
  Alert,
  CircularProgress,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";
import styles from "./InputFields.module.css";

export type InputFieldsType = {
  className?: string;
};

// Delivery options for the dropdown
const deliveryOptions = [
  "1-5 deliveries",
  "6-15 deliveries",
  "16-30 deliveries",
  "31-50 deliveries",
  "50+ deliveries"
];

// Validation patterns and helpers
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\d\s()+-.]{10,15}$/;

const InputFields: FunctionComponent<InputFieldsType> = ({
  className = "",
}) => {
  const { signup, error, loading, clearError } = useAuth();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    organization: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
    deliveriesPerWeek: "",
    agreeToTerms: false
  });

  // Login modal state
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Form validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Clear auth context error when unmounting
  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  // Update form data when input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value
    });
    
    // Clear field error when user makes changes
    if (errors[name as string]) {
      setErrors({
        ...errors,
        [name as string]: ""
      });
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
    
    if (errors.agreeToTerms) {
      setErrors({
        ...errors,
        agreeToTerms: ""
      });
    }
  };

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Open login modal
  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  // Close login modal
  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!PHONE_REGEX.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization name is required";
    }
    
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!formData.deliveriesPerWeek) {
      newErrors.deliveriesPerWeek = "Please select expected deliveries";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (validateForm()) {
      await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        organization: formData.organization,
        location: formData.location,
        email: formData.email,
        password: formData.password,
        deliveriesPerWeek: formData.deliveriesPerWeek,
        agreeToTerms: formData.agreeToTerms
      });
    }
  };
  
  const getHelperText = (field: string) => {
    return (formSubmitted || formData[field as keyof typeof formData]) && errors[field] ? errors[field] : " ";
  };

  return (
    <>
      <form className={[styles.inputFields, className].join(" ")} onSubmit={handleSubmit} noValidate>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={clearError}>
            {error}
          </Alert>
        )}
        
        <Box className={styles.namePhoneInputs}>
          <TextField
            className={styles.namePhoneInputsChild}
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            label="First Name"
            placeholder="First Name"
            variant="outlined"
            required
            error={!!errors.firstName && formSubmitted}
            helperText={getHelperText("firstName")}
            sx={{
              "& fieldset": { borderColor: errors.firstName && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
          <TextField
            className={styles.namePhoneInputsChild}
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            label="Last Name"
            placeholder="Last Name"
            variant="outlined"
            required
            error={!!errors.lastName && formSubmitted}
            helperText={getHelperText("lastName")}
            sx={{
              "& fieldset": { borderColor: errors.lastName && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
        </Box>
        
        <Box className={styles.namePhoneInputs}>
          <TextField
            className={styles.namePhoneInputsChild}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            label="Phone Number"
            placeholder="Phone Number"
            variant="outlined"
            required
            error={!!errors.phoneNumber && formSubmitted}
            helperText={getHelperText("phoneNumber")}
            sx={{
              "& fieldset": { borderColor: errors.phoneNumber && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
          <TextField
            className={styles.namePhoneInputsChild}
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            label="Organization Name"
            placeholder="Organization Name"
            variant="outlined"
            required
            error={!!errors.organization && formSubmitted}
            helperText={getHelperText("organization")}
            sx={{
              "& fieldset": { borderColor: errors.organization && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
        </Box>
        
        <Box className={styles.namePhoneInputs}>
          <TextField
            className={styles.namePhoneInputsChild}
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            label="Location"
            placeholder="Location"
            variant="outlined"
            required
            error={!!errors.location && formSubmitted}
            helperText={getHelperText("location")}
            sx={{
              "& fieldset": { borderColor: errors.location && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
          <TextField
            className={styles.namePhoneInputsChild}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            label="Email"
            placeholder="Email"
            variant="outlined"
            type="email"
            required
            error={!!errors.email && formSubmitted}
            helperText={getHelperText("email")}
            sx={{
              "& fieldset": { borderColor: errors.email && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
        </Box>
        
        <Box className={styles.namePhoneInputs}>
          <TextField
            className={styles.namePhoneInputsChild}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            label="Password"
            placeholder="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            required
            error={!!errors.password && formSubmitted}
            helperText={getHelperText("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& fieldset": { borderColor: errors.password && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
          <TextField
            className={styles.namePhoneInputsChild}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            label="Confirm Password"
            placeholder="Confirm Password"
            variant="outlined"
            type={showConfirmPassword ? "text" : "password"}
            required
            error={!!errors.confirmPassword && formSubmitted}
            helperText={getHelperText("confirmPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& fieldset": { borderColor: errors.confirmPassword && formSubmitted ? "error.main" : "#9e9e9e" },
              "& .MuiInputBase-root": {
                height: "60px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
        </Box>
        
        <FormControl
          className={styles.parent}
          variant="outlined"
          error={!!errors.deliveriesPerWeek && formSubmitted}
          sx={{
            borderColor: errors.deliveriesPerWeek && formSubmitted ? "error.main" : "#9e9e9e",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            width: "100%",
            mb: 2,
            "& .MuiInputBase-root": {
              height: "60px",
              borderRadius: "10px",
              fontSize: "18px",
            },
          }}
        >
          <Select
            name="deliveriesPerWeek"
            value={formData.deliveriesPerWeek}
            onChange={handleInputChange}
            displayEmpty
            required
            renderValue={(selected) => {
              if (!selected) {
                return <em>Expected number of deliveries per week?</em>;
              }
              return selected as string;
            }}
          >
            <MenuItem disabled value="">
              <em>Expected number of deliveries per week?</em>
            </MenuItem>
            {deliveryOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {errors.deliveriesPerWeek && formSubmitted && (
            <FormHelperText>{errors.deliveriesPerWeek}</FormHelperText>
          )}
        </FormControl>
        
        <Box className={styles.rectangleParent}>
          <FormControlLabel
            control={
              <Checkbox
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                className={styles.rectangleInput}
                color="primary"
              />
            }
            label={
              <Box className={styles.iHaveReviewedContainer}>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontSize: "var(--body-small-size)" }}
                >
                  I have reviewed the below linked documents, and agree to the
                  terms and conditions set forth herein.
                </Typography>
              </Box>
            }
          />
          {errors.agreeToTerms && formSubmitted && (
            <FormHelperText error>{errors.agreeToTerms}</FormHelperText>
          )}
        </Box>
        
        <Button
          className={styles.button}
          variant="contained"
          type="submit"
          disabled={loading}
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18px",
            background: "#ff6f3c",
            borderRadius: "10px",
            "&:hover": { background: "#e5633c" },
            width: 220,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
        </Button>
        
        <Box className={styles.alreadyAQuietContainer}>
          <Typography
            className={styles.alreadyAQuietCraftSolution}
            variant="inherit"
            component="span"
            sx={{ fontFamily: "var(--font-poppins)", fontWeight: "500" }}
          >
            Already a Quiet Craft Solutions Inc customer?
          </Typography>
          <Typography
            variant="inherit"
            component="span"
            onClick={handleOpenLoginModal}
            sx={{ 
              fontFamily: "var(--font-poppins)", 
              fontWeight: "600", 
              color: "#ff6f3c", 
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            Sign in.
          </Typography>
        </Box>
      </form>
      
      {/* Login modal */}
      <LoginModal 
        open={loginModalOpen} 
        onClose={handleCloseLoginModal} 
      />
    </>
  );
};

export default InputFields;
