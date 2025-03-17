import { FunctionComponent, useMemo, type CSSProperties, ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./PageHeader.module.css";

export type PageHeaderProps = {
  className?: string;
  subtitle?: string;
  title?: string;
  actionButton?: string | ReactNode;

  /** Style props */
  subtitleDisplay?: CSSProperties["display"];
  buttonWidth?: CSSProperties["width"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
  
  /** Accessibility props */
  titleId?: string;
};

/**
 * PageHeader component that displays a page title with optional subtitle
 * and user information with an optional action button.
 */
const PageHeader: FunctionComponent<PageHeaderProps> = ({
  className = "",
  subtitle,
  subtitleDisplay,
  title,
  actionButton,
  buttonWidth,
  buttonAlignSelf,
  titleId = "page-title",
}) => {
  const subtitleStyle: CSSProperties = useMemo(() => {
    return {
      display: subtitleDisplay,
    };
  }, [subtitleDisplay]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      alignSelf: buttonAlignSelf,
    };
  }, [buttonWidth, buttonAlignSelf]);

  return (
    <Box className={[styles.frameParent, className].join(" ")} role="banner">
      <Box className={styles.frameWrapper}>
        <Box className={styles.dashboardEventsCreateNeParent}>
          <Box className={styles.dashboardEvents} style={subtitleStyle}>
            {subtitle}
          </Box>
          <Typography
            id={titleId}
            className={styles.createNewEvent}
            variant="inherit"
            component="h1"
            sx={{
              fontWeight: "600",
              fontSize: "var(--font-size-11xl)",
              lineHeight: "120%",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.frameGroup}>
        <Box className={styles.avatarWrapper}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt="Notification icon"
            src="/vector-1.svg"
          />
        </Box>
        <Box className={styles.userParent}>
          <Box className={styles.user}>
            <Box className={styles.userChild} />
            <img
              className={styles.buttonBackgroundIcon}
              loading="lazy"
              alt="User avatar"
              src="/rectangle-2@2x.png"
            />
            <Box className={styles.sherwynGrahamWrapper}>
              <Box className={styles.sherwynGraham}>{`Sherwyn Graham `}</Box>
            </Box>
          </Box>
          {typeof actionButton === 'string' ? (
            <Button
              className={styles.button}
              disableElevation
              variant="outlined"
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
              style={buttonStyle}
            >
              {actionButton}
            </Button>
          ) : (
            actionButton
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
