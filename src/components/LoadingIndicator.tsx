import { FC } from 'react';
import { Box, CircularProgress, Typography, LinearProgress, useTheme, Paper } from '@mui/material';

export interface LoadingIndicatorProps {
  /**
   * Text to display with the loading indicator
   */
  message?: string;
  
  /**
   * Type of loading indicator to display
   */
  type?: 'circular' | 'linear' | 'skeleton';
  
  /**
   * Size of the loading indicator
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Whether to cover the full parent container
   */
  fullPage?: boolean;
  
  /**
   * Whether to show a transparent overlay background
   */
  overlay?: boolean;
}

/**
 * A standardized loading indicator component that can be used throughout the application.
 * Provides consistent styling and behavior for loading states.
 */
const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  message = 'Loading...',
  type = 'circular',
  size = 'medium',
  fullPage = false,
  overlay = false,
}) => {
  const theme = useTheme();
  
  // Size mappings for circular progress
  const sizeMap = {
    small: 24,
    medium: 40,
    large: 60
  };
  
  // Determine styles based on props
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    ...(fullPage && {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
    }),
    ...(overlay && {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }),
    ...(fullPage && !overlay && {
      height: '100vh',
    }),
    ...(!fullPage && !overlay && {
      minHeight: '200px',
    }),
  };
  
  const content = (
    <>
      {type === 'circular' && (
        <CircularProgress 
          size={sizeMap[size]} 
          sx={{ 
            color: '#ff6f3c', 
            marginBottom: message ? theme.spacing(2) : 0
          }} 
        />
      )}
      
      {type === 'linear' && (
        <Box sx={{ width: '100%', maxWidth: 300, mb: message ? 2 : 0 }}>
          <LinearProgress 
            sx={{ 
              height: size === 'small' ? 4 : size === 'medium' ? 6 : 8,
              borderRadius: 4,
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#ff6f3c'
              }
            }}
          />
        </Box>
      )}
      
      {type === 'skeleton' && (
        <Box sx={{ 
          width: size === 'small' ? 150 : size === 'medium' ? 250 : 350,
          height: size === 'small' ? 100 : size === 'medium' ? 150 : 200,
          backgroundColor: '#f0f0f0',
          borderRadius: 1,
          animation: 'pulse 1.5s ease-in-out infinite',
          '@keyframes pulse': {
            '0%': { opacity: 0.6 },
            '50%': { opacity: 0.8 },
            '100%': { opacity: 0.6 },
          },
          mb: message ? 2 : 0
        }}/>
      )}
      
      {message && (
        <Typography 
          variant={size === 'small' ? 'body2' : 'body1'} 
          color="textSecondary"
          align="center"
        >
          {message}
        </Typography>
      )}
    </>
  );
  
  // For overlay mode, wrap in a Paper component
  if (overlay && !fullPage) {
    return (
      <Paper 
        elevation={2} 
        sx={{ 
          ...containerStyles,
          position: 'absolute',
          borderRadius: 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: 150,
        }}
      >
        {content}
      </Paper>
    );
  }
  
  // Otherwise return the Box container
  return (
    <Box sx={containerStyles} role="status" aria-live="polite">
      {content}
    </Box>
  );
};

export default LoadingIndicator;
