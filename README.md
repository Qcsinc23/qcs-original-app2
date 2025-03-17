# Quiet Craft Solutions Event Management and Logistics

A comprehensive platform for managing events, logistics, inventory, deliveries, and vehicle management.

## Overview

This application provides a robust set of tools for event management companies to:
- Track and plan events
- Manage inventory items for events
- Track vehicle locations and status
- Schedule and verify deliveries
- Generate comprehensive reports
- Monitor real-time dashboards

## Features

### User Authentication
- Secure login and registration
- Role-based access control
- Session management

### Event Management
- Create and edit events
- Add tasks to events
- Assign staff to tasks
- Track event status

### Logistics
- Real-time vehicle tracking on maps
- Delivery proof management
- Route planning
- Task assignment

### Inventory Management
- Track inventory levels
- Set up alerts for low stock
- Manage inventory locations
- Track inventory usage by event

### Reporting
- View delivery performance
- Monitor inventory levels
- Track staff efficiency
- Analyze event profitability

## Tech Stack

### Frontend
- React 18 with TypeScript
- Material UI for components
- React Router for navigation
- Leaflet for maps
- Chart.js for data visualization

### Development Tools
- Vite for build and development
- ESLint for code quality
- Vitest for testing
- TypeScript for type safety

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd event-management-logistics
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── context/       # React context for state management
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components for routes
│   ├── services/      # API and service integrations
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Application entry point
├── .eslintrc.js       # ESLint configuration
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── vite.config.mts    # Vite configuration
```

## Code Quality Tools

### Error Handling
- Error boundaries for React components
- Standardized error displays
- API error processing utilities

### Performance Optimization
- Asynchronous loading with React Suspense
- Memoized components and values
- Code splitting for routes

### Accessibility
- Semantic HTML elements
- ARIA attributes for interactive elements
- Keyboard navigation support

## Development Process

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Link Checking
Verify all app links are working correctly:
```bash
npm run check-links
```

## Contributing

1. Create a feature branch: `git checkout -b feature-name`
2. Commit your changes: `git commit -m 'Add feature'`
3. Push to the branch: `git push origin feature-name`
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries or support, please contact support@quietcraftsolutions.com
