import React from 'react';
import { Alert, AlertTitle, Box, Button, Collapse, IconButton, Paper, Typography } from '@mui/material';
import { ErrorResponse, ErrorType, getErrorActionText } from '../utils/errorHandler';

interface ErrorDisplayProps {
  /**
   * The error to display, can be an ErrorResponse or a string
   */
  error: ErrorResponse | string | null;
  
  /**
   * Called when the error is dismissed
   */
  onDismiss?: () => void;
  
  /**
   * Called when the action button is clicked
   */
  onAction?: (type: ErrorType) => void;
  
  /**
   * Whether to show the error as a full banner (true) or as an inline message (false)
   */
  variant?: 'banner' | 'inline' | 'toast';
  
  /**
   * Optional title to display above the error message
   */
  title?: string;
  
  /**
   * Whether to show technical details (only in development mode)
   */
  showTechnicalDetails?: boolean;
}

/**
 * Component for displaying error messages consistently throughout the application
 */
const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onDismiss,
  onAction,
  variant = 'inline',
  title,
  showTechnicalDetails = process.env.NODE_ENV === 'development',
}) => {
  // If there's no error, don't render anything
  if (!error) return null;
  
  // Process the error into a standard format
  const errorResponse: ErrorResponse = typeof error === 'string'
    ? { type: 'unknown', message: error }
    : error;
  
  // Get appropriate action text based on error type
  const actionText = getErrorActionText(errorResponse.type);
  
  // Determine severity based on error type
  const getSeverity = () => {
    switch (errorResponse.type) {
      case 'validation':
      case 'conflict':
        return 'warning';
      case 'auth':
      case 'forbidden':
        return 'info';
      case 'server':
      case 'network':
      case 'timeout':
        return 'error';
      default:
        return 'error';
    }
  };
  
  // For banner variant (full-width across the top)
  if (variant === 'banner') {
    return (
      <Collapse in={!!error}>
        <Alert
          severity={getSeverity()}
          action={
            <Box>
              {onAction && (
                <Button 
                  color="inherit" 
                  size="small" 
                  onClick={() => onAction(errorResponse.type)}
                >
                  {actionText}
                </Button>
              )}
              {onDismiss && (
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={onDismiss}
                >
                  ✕
                </IconButton>
              )}
            </Box>
          }
          sx={{ mb: 2 }}
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {errorResponse.message}
          
          {showTechnicalDetails && errorResponse.technicalDetails && (
            <Typography 
              variant="caption" 
              component="div" 
              sx={{ 
                mt: 1, 
                fontFamily: 'monospace',
                fontSize: '0.7rem',
                opacity: 0.7
              }}
            >
              {errorResponse.technicalDetails}
            </Typography>
          )}
        </Alert>
      </Collapse>
    );
  }
  
  // For toast variant (floating notification)
  if (variant === 'toast') {
    return (
      <Paper 
        elevation={3} 
        sx={{ 
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 2000,
          maxWidth: 400,
          overflow: 'hidden'
        }}
      >
        <Alert
          severity={getSeverity()}
          action={
            <Box>
              {onAction && (
                <Button 
                  color="inherit" 
                  size="small" 
                  onClick={() => onAction(errorResponse.type)}
                >
                  {actionText}
                </Button>
              )}
              {onDismiss && (
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={onDismiss}
                >
                  ✕
                </IconButton>
              )}
            </Box>
          }
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {errorResponse.message}
        </Alert>
      </Paper>
    );
  }
  
  // For inline variant (default)
  return (
    <Alert
      severity={getSeverity()}
      action={
        onDismiss && (
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onDismiss}
          >
            ✕
          </IconButton>
        )
      }
      sx={{ mb: 2 }}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {errorResponse.message}
      
      {showTechnicalDetails && errorResponse.technicalDetails && (
        <Typography 
          variant="caption" 
          component="div" 
          sx={{ 
            mt: 1, 
            fontFamily: 'monospace',
            fontSize: '0.7rem',
            opacity: 0.7
          }}
        >
          {errorResponse.technicalDetails}
        </Typography>
      )}
      
      {onAction && (
        <Button 
          color="inherit" 
          size="small" 
          onClick={() => onAction(errorResponse.type)}
          sx={{ mt: 1 }}
        >
          {actionText}
        </Button>
      )}
    </Alert>
  );
};

export default ErrorDisplay;
