import { FunctionComponent, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  CircularProgress,
  InputAdornment,
  Alert,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: FunctionComponent<LoginModalProps> = ({ open, onClose }) => {
  const { login, error, loading, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (validateForm()) {
      await login(email, password);
    }
  };

  const handleClose = () => {
    clearError();
    setEmail("");
    setPassword("");
    setErrors({});
    setFormSubmitted(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "10px",
          p: 2,
        },
      }}
    >
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 600,
            color: "#333",
          }}
        >
          Sign In
        </Typography>
        <IconButton onClick={handleClose} aria-label="close">
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={clearError}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email && formSubmitted}
            helperText={formSubmitted && errors.email ? errors.email : " "}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "16px",
              },
            }}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password && formSubmitted}
            helperText={formSubmitted && errors.password ? errors.password : " "}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "#fff",
                borderRadius: "10px",
                fontSize: "16px",
              },
            }}
          />
          
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
            <Typography
              variant="body2"
              sx={{
                color: "#ff6f3c",
                cursor: "pointer",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Forgot password?
            </Typography>
            
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                mt: 2,
                mb: 2,
                textTransform: "none",
                color: "#fff",
                fontSize: "16px",
                background: "#ff6f3c",
                borderRadius: "10px",
                "&:hover": { background: "#e5633c" },
                width: 100,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;