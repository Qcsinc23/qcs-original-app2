import axios, { AxiosError } from 'axios';

/**
 * Type of errors that can occur in the application
 */
export type ErrorType = 
  | 'network'
  | 'auth'
  | 'validation'
  | 'notFound'
  | 'server'
  | 'conflict'
  | 'forbidden'
  | 'timeout'
  | 'unknown';

/**
 * Error response structure
 */
export interface ErrorResponse {
  type: ErrorType;
  message: string;
  technicalDetails?: string;
}

/**
 * Map HTTP status codes to error types
 */
const statusToErrorType = (status: number): ErrorType => {
  switch (status) {
    case 400:
      return 'validation';
    case 401:
    case 403:
      return 'auth';
    case 404:
      return 'notFound';
    case 409:
      return 'conflict';
    case 408:
    case 504:
      return 'timeout';
    case 500:
    case 502:
    case 503:
      return 'server';
    default:
      return 'unknown';
  }
};

/**
 * Get user-friendly error messages based on error type
 */
const getDefaultMessage = (type: ErrorType): string => {
  switch (type) {
    case 'network':
      return 'Unable to connect to the server. Please check your internet connection.';
    case 'auth':
      return 'You are not authorized to perform this action. Please sign in again.';
    case 'validation':
      return 'There was an issue with the data provided.';
    case 'notFound':
      return 'The requested resource was not found.';
    case 'server':
      return 'We\'re experiencing technical difficulties. Please try again later.';
    case 'conflict':
      return 'This operation conflicts with the current state of the resource.';
    case 'forbidden':
      return 'You don\'t have permission to access this resource.';
    case 'timeout':
      return 'The request took too long to complete. Please try again.';
    case 'unknown':
    default:
      return 'An unexpected error occurred. Please try again later.';
  }
};

/**
 * Process API error into a standardized format
 */
export const processApiError = (error: unknown): ErrorResponse => {
  // Handle Axios errors
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    
    // Network errors (no response)
    if (!axiosError.response) {
      return {
        type: 'network',
        message: getDefaultMessage('network'),
        technicalDetails: axiosError.message
      };
    }
    
    // Handle response errors
    const status = axiosError.response.status;
    const errorType = statusToErrorType(status);

    // Try to extract error message from response if available
    let errorMessage = getDefaultMessage(errorType);
    const responseData = axiosError.response.data as any;
    
    if (responseData) {
      if (typeof responseData === 'string') {
        errorMessage = responseData;
      } else if (responseData.message) {
        errorMessage = responseData.message;
      } else if (responseData.error) {
        errorMessage = typeof responseData.error === 'string' 
          ? responseData.error 
          : responseData.error.message || errorMessage;
      }
    }

    return {
      type: errorType,
      message: errorMessage,
      technicalDetails: `${status}: ${axiosError.message}`
    };
  }
  
  // Handle standard Error objects
  if (error instanceof Error) {
    return {
      type: 'unknown',
      message: getDefaultMessage('unknown'),
      technicalDetails: error.message
    };
  }
  
  // Handle everything else
  return {
    type: 'unknown',
    message: getDefaultMessage('unknown'),
    technicalDetails: String(error)
  };
};

/**
 * Format a validation error for form fields
 */
export const formatValidationErrors = (error: unknown): Record<string, string> => {
  const fieldErrors: Record<string, string> = {};
  
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as any;
    
    if (responseData && responseData.errors) {
      // Process validation errors from the API
      if (Array.isArray(responseData.errors)) {
        responseData.errors.forEach((fieldError: any) => {
          if (fieldError.field && fieldError.message) {
            fieldErrors[fieldError.field] = fieldError.message;
          }
        });
      } else if (typeof responseData.errors === 'object') {
        // Handle object format { field1: "error1", field2: "error2" }
        Object.entries(responseData.errors).forEach(([field, message]) => {
          fieldErrors[field] = message as string;
        });
      }
    }
  }
  
  return fieldErrors;
};

/**
 * Get appropriate action text based on error type
 */
export const getErrorActionText = (type: ErrorType): string => {
  switch (type) {
    case 'network':
      return 'Check Connection';
    case 'auth':
      return 'Sign In Again';
    case 'timeout':
      return 'Try Again';
    case 'server':
      return 'Try Later';
    default:
      return 'Dismiss';
  }
};
