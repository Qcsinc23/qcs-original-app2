import { FunctionComponent, useEffect } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import InputFields from "../components/InputFields";
import { useAuth } from "../context/AuthContext";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  const { user, loading } = useAuth();

  // Redirect to dashboard if already authenticated
  if (user && !loading) {
    return <Navigate to="/dashboard" replace />;
  }

  // Show loading spinner while checking auth state
  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <CircularProgress size={60} sx={{ color: '#ff6f3c' }} />
      </Box>
    );
  }

  return (
    <Box className={styles.signUp}>
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <Box className={styles.content}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <Box className={styles.formHeaderParent}>
          <Box className={styles.formHeader}>
            <Box className={styles.title}>
              <Typography
                className={styles.createYourAccountContainer}
                variant="inherit"
                component="h1"
                sx={{ lineHeight: "120%", letterSpacing: "-0.03em" }}
              >
                <Typography
                  className={styles.createYourAccount}
                  variant="inherit"
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "var(--font-poppins)" }}
                  >{`Create `}</Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontWeight: "500" }}
                  >
                    your Account
                  </Typography>
                </Typography>
              </Typography>
            </Box>
            <Box className={styles.fillOutThe}>
              Fill out the form below to have your parcels delivered and to
              create a Quiet Craft Solutions Inc customer account.
            </Box>
          </Box>
          <InputFields />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
