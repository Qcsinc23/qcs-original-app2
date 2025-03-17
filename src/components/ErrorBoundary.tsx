import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

interface Props {
  children: ReactNode;
  fallbackComponent?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary component to catch JavaScript errors anywhere in the child component tree.
 * Displays a fallback UI instead of crashing the entire app.
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallbackComponent) {
        return this.props.fallbackComponent;
      }

      // Default fallback UI
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            p: 4
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              maxWidth: '600px',
              textAlign: 'center',
              borderLeft: '4px solid #ff6f3c'
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: '#1a3e59' }}>
              Something went wrong
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              The application encountered an unexpected error. Our team has been notified.
            </Typography>
            <Button 
              variant="contained" 
              onClick={this.handleReset}
              sx={{ 
                bgcolor: '#ff6f3c', 
                '&:hover': { bgcolor: '#e5623a' } 
              }}
            >
              Try Again
            </Button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box sx={{ mt: 4, textAlign: 'left', p: 2, bgcolor: '#f5f5f5' }}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'monospace' }}>
                  {this.state.error.toString()}
                </Typography>
                {this.state.errorInfo && (
                  <Typography 
                    variant="caption" 
                    component="pre" 
                    sx={{ 
                      mt: 2, 
                      maxHeight: '200px', 
                      overflow: 'auto',
                      fontFamily: 'monospace'
                    }}
                  >
                    {this.state.errorInfo.componentStack}
                  </Typography>
                )}
              </Box>
            )}
          </Paper>
        </Box>
      );
    }

    // When there's no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
