// API service for data fetching and manipulation
import axios from 'axios';

interface ApiResponse<T> {
  data: T | null;
  success: boolean;
  message?: string;
}

// Base URL for API requests
const BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com/v1';

// API client setup with proper headers and interceptors
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to include auth token
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Generic request function that works with real API or falls back to mock data
async function request<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any
): Promise<ApiResponse<T>> {
  try {
    // In development mode or when API is not available, use mock data
    if (import.meta.env.DEV || !BASE_URL.includes('api.example.com')) {
      console.log(`Using mock data for ${method} ${endpoint}`);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Special handling for auth/register endpoint
      if (endpoint === 'auth/register' && method === 'POST') {
        return handleMockRegistration(data);
      }
      
      // Special handling for auth/login endpoint
      if (endpoint === 'auth/login' && method === 'POST') {
        return handleMockLogin(data);
      }
      
      // Check if mock data exists for this endpoint
      if (mockData[endpoint] === undefined) {
        return {
          data: null,
          success: false,
          message: `No mock data available for endpoint: ${endpoint}`
        };
      }
      
      // Return mock data
      return {
        data: mockData[endpoint] as T,
        success: true
      };
    }

    // In production, make actual API request
    const response = await apiClient({
      method,
      url: endpoint,
      data: method !== 'GET' ? data : undefined,
      params: method === 'GET' && data ? data : undefined
    });

    return {
      data: response.data,
      success: true
    };
  } catch (error) {
    console.error(`API error (${method} ${endpoint}):`, error);
    return {
      data: null as T,
      success: false,
      message: 'An error occurred while fetching data'
    };
  }
}

// API methods corresponding to different endpoints
export const api = {
  // Auth endpoints
  auth: {
    login: (credentials: { email: string; password: string }) => 
      request<{ user: User; token: string }>('auth/login', 'POST', credentials),
    register: (userData: Partial<User>) => 
      request<{ user: User; token: string }>('auth/register', 'POST', userData),
    logout: () => request<boolean>('auth/logout', 'POST'),
    getCurrentUser: () => request<User>('auth/me'),
  },

  // Event management
  events: {
    getAll: () => request<Event[]>('events'),
    getById: (id: string) => request<Event>(`events/${id}`),
    create: (data: Partial<Event>) => request<Event>('events', 'POST', data),
    update: (id: string, data: Partial<Event>) => request<Event>(`events/${id}`, 'PUT', data),
    delete: (id: string) => request<boolean>(`events/${id}`, 'DELETE')
  },
  
  // Vehicle management
  vehicles: {
    getAll: () => request<Vehicle[]>('vehicles'),
    getById: (id: string) => request<Vehicle>(`vehicles/${id}`),
    create: (data: Partial<Vehicle>) => request<Vehicle>('vehicles', 'POST', data),
    update: (id: string, data: Partial<Vehicle>) => request<Vehicle>(`vehicles/${id}`, 'PUT', data),
    delete: (id: string) => request<boolean>(`vehicles/${id}`, 'DELETE')
  },
  
  // Inventory management
  inventory: {
    getAll: () => request<InventoryItem[]>('inventory'),
    getById: (id: string) => request<InventoryItem>(`inventory/${id}`),
    create: (data: Partial<InventoryItem>) => request<InventoryItem>('inventory', 'POST', data),
    update: (id: string, data: Partial<InventoryItem>) => request<InventoryItem>(`inventory/${id}`, 'PUT', data),
    delete: (id: string) => request<boolean>(`inventory/${id}`, 'DELETE'),
    getAlerts: () => request<InventoryAlert[]>('inventory/alerts')
  },
  
  // Delivery management
  deliveries: {
    getAll: () => request<Delivery[]>('deliveries'),
    getActive: () => request<Delivery[]>('deliveries/active'),
    getById: (id: string) => request<Delivery>(`deliveries/${id}`),
    create: (data: Partial<Delivery>) => request<Delivery>('deliveries', 'POST', data),
    update: (id: string, data: Partial<Delivery>) => request<Delivery>(`deliveries/${id}`, 'PUT', data),
    updateStatus: (id: string, status: DeliveryStatus) => 
      request<Delivery>(`deliveries/${id}/status`, 'PUT', { status }),
    addProof: (id: string, proofData: ProofOfDelivery) => 
      request<Delivery>(`deliveries/${id}/proof`, 'POST', proofData)
  },
  
  // Dashboard analytics
  dashboard: {
    getMetrics: () => request<DashboardMetrics>('dashboard/metrics'),
    getChartData: (chart: string) => request<any>(`dashboard/charts/${chart}`)
  }
};

// Data types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'manager' | 'driver' | 'staff';
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  organizerId: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assigneeId: string;
  status: 'pending' | 'inprogress' | 'completed';
  dueDate: string;
  progress: number;
  priority: 'low' | 'medium' | 'high';
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  licensePlate: string;
  capacity: string;
  status: 'available' | 'inUse' | 'maintenance';
  currentLocation?: GeoLocation;
  assignedDriverId?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  location: string;
  threshold: number;
  status: 'normal' | 'low' | 'critical';
}

export interface InventoryAlert {
  id: string;
  itemId: string;
  itemName: string;
  alertType: 'low' | 'critical';
  message: string;
  createdAt: string;
  isRead: boolean;
}

export interface Delivery {
  id: string;
  orderId: string;
  customerId: string;
  customerName: string;
  items: DeliveryItem[];
  pickupLocation: Address;
  dropoffLocation: Address;
  status: DeliveryStatus;
  assignedVehicleId?: string;
  assignedDriverId?: string;
  estimatedDeliveryTime: string;
  actualDeliveryTime?: string;
  proofOfDelivery?: ProofOfDelivery;
  currentLocation?: GeoLocation;
}

export type DeliveryStatus = 
  'pending' | 'processing' | 'inTransit' | 'delivered' | 'failed' | 'cancelled';

export interface DeliveryItem {
  id: string;
  name: string;
  quantity: number;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates: GeoLocation;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export interface ProofOfDelivery {
  id: string;
  deliveryId: string;
  recipientName: string;
  recipientSignature: string;
  photoUrl?: string;
  notes?: string;
  timestamp: string;
}

export interface DashboardMetrics {
  totalEvents: number;
  onTimeDeliveryRate: number;
  tasksCompleted: number;
  activeDeliveries: number;
  lowStockItems: number;
  vehiclesInUse: number;
}

// Function to handle mock registration
function handleMockRegistration<T>(userData: any): ApiResponse<T> {
  // Basic validation
  if (!userData.email) {
    return {
      data: null,
      success: false,
      message: 'Email is required'
    };
  }
  
  if (!userData.password || userData.password.length < 8) {
    return {
      data: null,
      success: false,
      message: 'Password must be at least 8 characters'
    };
  }
  
  // Check if email already exists in mock users
  const existingUsers = Object.values(mockUsers);
  const emailExists = existingUsers.some((user: any) => user.email === userData.email);
  
  if (emailExists) {
    return {
      data: null,
      success: false,
      message: 'Email address is already in use'
    };
  }
  
  // Create a new user
  const newUser: User = {
    id: `user-${Date.now()}`,
    email: userData.email,
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    role: userData.role || 'staff',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  // Add to mock users
  mockUsers[newUser.id] = newUser;
  
  return {
    data: {
      user: newUser,
      token: `mock-token-${newUser.id}`
    } as unknown as T,
    success: true
  };
}

// Function to handle mock login
function handleMockLogin<T>(credentials: any): ApiResponse<T> {
  const { email, password } = credentials;
  
  // Basic validation
  if (!email || !password) {
    return {
      data: null,
      success: false,
      message: 'Email and password are required'
    };
  }
  
  // Find user by email
  const users = Object.values(mockUsers);
  const user = users.find((user: any) => user.email === email);
  
  if (!user) {
    return {
      data: null,
      success: false,
      message: 'Invalid email or password'
    };
  }
  
  // In a real app, you would check the password hash
  // Here we'll just simulate a successful login
  return {
    data: {
      user,
      token: `mock-token-${user.id}`
    } as unknown as T,
    success: true
  };
}

// Mock users store
const mockUsers: Record<string, User> = {
  'admin-1': {
    id: 'admin-1',
    email: 'admin@quietcraft.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  'user-1': {
    id: 'user-1',
    email: 'staff@quietcraft.com',
    firstName: 'Staff',
    lastName: 'User',
    role: 'staff',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  }
};

// Simplified mock data - just what's needed for essential functionality
const mockData: Record<string, any> = {
  'auth/me': mockUsers['admin-1'],
  'events': [
    {
      id: '1',
      title: 'Corporate Conference',
      description: 'Annual corporate conference',
      location: 'Grand Hotel, Downtown',
      startDate: '2023-06-15T09:00:00',
      endDate: '2023-06-17T18:00:00',
      status: 'upcoming',
      organizerId: '1',
      tasks: [
        {
          id: '101',
          title: 'Arrange catering',
          description: 'Arrange food for attendees',
          assigneeId: '2',
          status: 'inprogress',
          dueDate: '2023-06-10T17:00:00',
          progress: 50,
          priority: 'high'
        }
      ]
    },
    {
      id: '2',
      title: 'Charity Gala',
      description: 'Annual fundraising event',
      location: 'City Convention Center',
      startDate: '2023-07-20T18:00:00',
      endDate: '2023-07-20T23:00:00',
      status: 'upcoming',
      organizerId: '1',
      tasks: []
    }
  ],
  
  'vehicles': [
    {
      id: '1',
      name: 'Delivery Van 1',
      type: 'Van',
      licensePlate: 'ABC-1234',
      capacity: '1000kg',
      status: 'available',
      currentLocation: {
        latitude: 37.7749,
        longitude: -122.4194
      }
    }
  ],
  
  'inventory': [
    {
      id: '1',
      name: 'Tables',
      category: 'Furniture',
      quantity: 150,
      unit: 'piece',
      location: 'Warehouse A',
      threshold: 50,
      status: 'normal'
    },
    {
      id: '2',
      name: 'Chairs',
      category: 'Furniture',
      quantity: 30,
      unit: 'piece',
      location: 'Warehouse B',
      threshold: 50,
      status: 'low'
    }
  ],
  
  'inventory/alerts': [
    {
      id: '1',
      itemId: '2',
      itemName: 'Chairs',
      alertType: 'low',
      message: 'Stock running low',
      createdAt: '2023-06-01T10:30:00',
      isRead: false
    }
  ],
  
  'deliveries': [
    {
      id: '1',
      orderId: 'ORD-001',
      customerId: 'CUST-001',
      customerName: 'Acme Corp',
      items: [
        {
          id: '1',
          name: 'Event Equipment',
          quantity: 3,
          weight: 500,
          dimensions: {
            length: 100,
            width: 50,
            height: 30
          }
        }
      ],
      pickupLocation: {
        street: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
        country: 'USA',
        coordinates: {
          latitude: 37.7749,
          longitude: -122.4194
        }
      },
      dropoffLocation: {
        street: '456 Market St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94103',
        country: 'USA',
        coordinates: {
          latitude: 37.7833,
          longitude: -122.4167
        }
      },
      status: 'inTransit',
      assignedVehicleId: '1',
      assignedDriverId: '2',
      estimatedDeliveryTime: '2023-06-15T14:00:00',
      currentLocation: {
        latitude: 37.7800,
        longitude: -122.4180
      }
    }
  ],
  
  'deliveries/active': [
    {
      id: '1',
      orderId: 'ORD-001',
      customerId: 'CUST-001',
      customerName: 'Acme Corp',
      items: [
        {
          id: '1',
          name: 'Event Equipment',
          quantity: 3,
          weight: 500,
          dimensions: {
            length: 100,
            width: 50,
            height: 30
          }
        }
      ],
      pickupLocation: {
        street: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
        country: 'USA',
        coordinates: {
          latitude: 37.7749,
          longitude: -122.4194
        }
      },
      dropoffLocation: {
        street: '456 Market St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94103',
        country: 'USA',
        coordinates: {
          latitude: 37.7833,
          longitude: -122.4167
        }
      },
      status: 'inTransit',
      assignedVehicleId: '1',
      assignedDriverId: '2',
      estimatedDeliveryTime: '2023-06-15T14:00:00',
      currentLocation: {
        latitude: 37.7800,
        longitude: -122.4180
      }
    }
  ],
  
  'dashboard/metrics': {
    totalEvents: 15,
    onTimeDeliveryRate: 95,
    tasksCompleted: 28,
    activeDeliveries: 3,
    lowStockItems: 2,
    vehiclesInUse: 2
  }
};