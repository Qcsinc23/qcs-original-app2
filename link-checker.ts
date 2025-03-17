import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { glob } from 'glob';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m'
};

// Application routes defined in the app
const VALID_ROUTES = [
  '/', 
  '/dashboard',
  '/events-details',
  '/create-new-event',
  '/events-list',
  '/route-planning',
  '/vehicle-management',
  '/event-calendar',
  '/task-assignment',
  '/logistics-overview',
  '/add-alert-modal',
  '/inventory-details',
  '/inventory-alerts-notifications',
  '/add-inventory',
  '/live-tracking-map',
  '/vehicle-details-modal',
  '/delivery-details-modal',
  '/proof-of-delivery',
  '/status-updates',
  '/proof-details-modal',
  '/add-proof-of-delivery',
  '/reports'
];

// Map to track processed links to avoid duplicates
const processedLinks = new Map<string, string>();
const brokenLinks: Array<{ file: string, link: string, status: string }> = [];

/**
 * Checks if an external URL is reachable
 */
async function checkExternalLink(url: string): Promise<string> {
  try {
    const response = await axios.head(url, {
      timeout: 5000,
      validateStatus: () => true, // Don't throw on any status code
      maxRedirects: 5
    });
    
    if (response.status >= 400) {
      return `Broken: HTTP ${response.status}`;
    }
    return `OK: ${response.status}`;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return `Broken: ${error.message}`;
    }
    return 'Broken: Unknown error';
  }
}

/**
 * Checks if a local asset exists in the public directory
 */
function checkLocalAsset(assetPath: string): string {
  // Remove leading slash and convert to filesystem path
  const normalizedPath = assetPath.startsWith('/') 
    ? assetPath.substring(1) 
    : assetPath;
  
  const fullPath = path.join('public', normalizedPath);
  
  if (fs.existsSync(fullPath)) {
    return 'OK';
  }
  return 'Broken: File not found';
}

/**
 * Checks if an internal route exists in the application
 */
function checkInternalRoute(route: string): string {
  if (VALID_ROUTES.includes(route)) {
    return 'OK';
  }
  return 'Broken: Route not defined in application';
}

/**
 * Analyzes a TypeScript/TSX file for links
 */
async function processFile(filePath: string): Promise<void> {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Find links in various patterns
    
    // 1. React Router Links: <Link to="/path">
    const routerLinkPattern = /\<Link\s+to=["']([^"']+)["']/g;
    let match;
    
    while ((match = routerLinkPattern.exec(content)) !== null) {
      const link = match[1];
      
      // Skip if already processed
      if (processedLinks.has(link)) continue;
      
      let status: string;
      
      if (link.startsWith('http')) {
        // External URL
        status = await checkExternalLink(link);
      } else if (link.startsWith('#')) {
        // Anchor link, skip
        continue;
      } else {
        // Internal route
        status = checkInternalRoute(link);
      }
      
      processedLinks.set(link, status);
      
      if (!status.startsWith('OK')) {
        brokenLinks.push({ file: filePath, link, status });
      }
    }
    
    // 2. Image src attributes: src="/path/to/image.png"
    const srcPattern = /src=["']([^"']+)["']/g;
    
    while ((match = srcPattern.exec(content)) !== null) {
      const link = match[1];
      
      // Skip if already processed or data URLs
      if (processedLinks.has(link) || link.startsWith('data:')) continue;
      
      let status: string;
      
      if (link.startsWith('http')) {
        // External URL
        status = await checkExternalLink(link);
      } else {
        // Local asset
        status = checkLocalAsset(link);
      }
      
      processedLinks.set(link, status);
      
      if (!status.startsWith('OK')) {
        brokenLinks.push({ file: filePath, link, status });
      }
    }
    
    // 3. useNavigate calls: navigate("/path")
    const navigatePattern = /navigate\(["']([^"']+)["']\)/g;
    
    while ((match = navigatePattern.exec(content)) !== null) {
      const link = match[1];
      
      // Skip if already processed
      if (processedLinks.has(link)) continue;
      
      const status = checkInternalRoute(link);
      processedLinks.set(link, status);
      
      if (!status.startsWith('OK')) {
        brokenLinks.push({ file: filePath, link, status });
      }
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

/**
 * Main function to run the link checker
 */
async function main() {
  console.log(`${colors.bold}${colors.cyan}🔍 Quiet Craft Solutions Link Checker${colors.reset}`);
  console.log(`${colors.cyan}⏳ Scanning for links in React components...${colors.reset}`);
  
  // Get all TypeScript and TSX files
  const files = await glob('src/**/*.{ts,tsx}', { ignore: ['**/node_modules/**', '**/dist/**'] });
  console.log(`Found ${files.length} TypeScript files to scan`);
  
  // Process each file
  for (const file of files) {
    await processFile(file);
  }
  
  // Check public directory for missing files referenced by components
  console.log(`${colors.cyan}⏳ Validating public assets...${colors.reset}`);
  const referencedAssets = Array.from(processedLinks.keys())
    .filter(link => !link.startsWith('http') && !link.startsWith('/'))
    .map(link => link);

  // Report results
  console.log(`\n${colors.bold}${colors.cyan}📊 Link Check Results:${colors.reset}`);
  console.log(`${colors.white}Total unique links found: ${colors.bold}${processedLinks.size}${colors.reset}`);
  console.log(`${colors.green}Working links: ${colors.bold}${processedLinks.size - brokenLinks.length}${colors.reset}`);
  console.log(`${colors.red}Broken links: ${colors.bold}${brokenLinks.length}${colors.reset}`);
  
  if (brokenLinks.length > 0) {
    console.log(`\n${colors.bold}${colors.red}🚨 Broken Links Found:${colors.reset}`);
    
    // Print table header
    console.log(`${colors.bold}+${'─'.repeat(20)}+${'─'.repeat(30)}+${'─'.repeat(25)}+${colors.reset}`);
    console.log(`${colors.bold}| ${'File'.padEnd(18)} | ${'Link'.padEnd(28)} | ${'Status'.padEnd(23)} |${colors.reset}`);
    console.log(`${colors.bold}+${'─'.repeat(20)}+${'─'.repeat(30)}+${'─'.repeat(25)}+${colors.reset}`);
    
    // Print table rows
    brokenLinks.forEach(({ file, link, status }) => {
      // Format filepath to be shorter
      const shortFile = file.length > 18 
        ? '...' + file.substring(file.length - 15) 
        : file.padEnd(18);
      
      // Format link to fit in column
      const shortLink = link.length > 28 
        ? link.substring(0, 25) + '...' 
        : link.padEnd(28);
      
      console.log(`| ${shortFile} | ${shortLink} | ${colors.red}${status.padEnd(23)}${colors.reset} |`);
    });
    
    console.log(`${colors.bold}+${'─'.repeat(20)}+${'─'.repeat(30)}+${'─'.repeat(25)}+${colors.reset}`);
  } else {
    console.log(`\n${colors.green}${colors.bold}✅ All links are valid!${colors.reset}`);
  }
}

main().catch(console.error);
