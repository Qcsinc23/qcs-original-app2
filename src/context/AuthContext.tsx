import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, User } from '../services/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  isAuthenticated: boolean;
}

interface SignupData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  organization: string;
  location: string;
  email: string;
  password: string;
  deliveriesPerWeek: string;
  agreeToTerms: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Check for existing session on initial load
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        try {
          // Try to get the current user with the stored token
          const storedUser = localStorage.getItem(USER_KEY);
          if (storedUser) {
            setUser(JSON.parse(storedUser));
            
            // Optionally verify the token is still valid by making an API call
            const response = await api.auth.getCurrentUser();
            if (response.success && response.data) {
              // Update user data with latest from server
              setUser(response.data);
              localStorage.setItem(USER_KEY, JSON.stringify(response.data));
            }
          }
        } catch (err) {
          console.error('Failed to verify authentication:', err);
          // If verification fails, clear the stored token
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(USER_KEY);
          setUser(null);
        }
      }
      setLoading(false);
    };
    
    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.auth.login({ email, password });
      
      if (response.success && response.data) {
        const { token, user } = response.data;
        
        // Store authentication token and user data
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        
        setUser(user);
        navigate('/dashboard');
      } else {
        setError(response.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData: SignupData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Convert SignupData to the format expected by the API
      const apiUserData = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        organization: userData.organization,
        location: userData.location,
        phoneNumber: userData.phoneNumber,
        deliveriesPerWeek: userData.deliveriesPerWeek,
        role: 'staff' as const // Default role for new users (using a valid role from the User type)
      };
      
      const response = await api.auth.register(apiUserData);
      
      if (response.success && response.data) {
        const { token, user } = response.data;
        
        // Store authentication token and user data
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        
        setUser(user);
        navigate('/dashboard');
      } else {
        setError(response.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Call logout API if you need to invalidate token on server
      await api.auth.logout();
    } catch (err) {
      console.error('Error during logout:', err);
    } finally {
      // Always clear local storage and state regardless of API success
      setUser(null);
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      navigate('/');
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        error, 
        login, 
        signup, 
        logout, 
        clearError,
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};