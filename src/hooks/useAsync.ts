import { useState, useCallback, useEffect } from 'react';
import { processApiError, ErrorResponse } from '../utils/errorHandler';

/**
 * Status for async operations
 */
type Status = 'idle' | 'pending' | 'success' | 'error';

/**
 * The result of an async operation
 */
interface AsyncState<T> {
  status: Status;
  data: T | null;
  error: ErrorResponse | null;
}

/**
 * Default options for useAsync
 */
interface UseAsyncOptions {
  /**
   * Whether to execute the function immediately on mount
   */
  immediate?: boolean;
  
  /**
   * Dependencies for the function
   */
  deps?: any[];
  
  /**
   * Whether to reset error and data when function is called again
   */
  resetOnCall?: boolean;
}

/**
 * A hook to handle async operations with loading, error, and success states
 */
export const useAsync = <T>(
  asyncFunction: () => Promise<T>,
  options: UseAsyncOptions = {}
) => {
  const {
    immediate = true,
    deps = [],
    resetOnCall = true,
  } = options;
  
  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  });
  
  // Function to execute the async function
  const execute = useCallback(async () => {
    if (resetOnCall) {
      setState({
        status: 'pending',
        data: null,
        error: null,
      });
    } else {
      setState(prev => ({
        ...prev,
        status: 'pending',
      }));
    }
    
    try {
      const data = await asyncFunction();
      setState({
        status: 'success',
        data,
        error: null,
      });
      return data;
    } catch (error) {
      const processedError = processApiError(error);
      setState({
        status: 'error',
        data: null,
        error: processedError,
      });
      throw processedError;
    }
  }, [asyncFunction, resetOnCall]);
  
  // Execute the function immediately on mount and when deps change
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate, ...deps]);
  
  // Reset the state
  const reset = useCallback(() => {
    setState({
      status: 'idle',
      data: null,
      error: null,
    });
  }, []);
  
  return {
    execute,
    reset,
    status: state.status,
    data: state.data,
    error: state.error,
    isIdle: state.status === 'idle',
    isPending: state.status === 'pending',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
  };
};
