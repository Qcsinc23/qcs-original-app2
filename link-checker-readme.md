# Link Checker for Quiet Craft Solutions

This tool scans your React/TypeScript application for broken links, missing routes, and non-existent asset references.

## Features

- ✅ Checks internal navigation routes (React Router links)
- ✅ Validates local assets referenced in components (images, SVGs, etc.)
- ✅ Tests external URLs for accessibility
- ✅ Presents results in a formatted, easy-to-read table
- ✅ Color-coded terminal output for better readability

## Types of Links Checked

1. **React Router Links** - `<Link to="/some-route">`
2. **Image Sources** - `src="/path/to/image.svg"`
3. **Navigation Calls** - `navigate("/some-route")`

## How to Use

Run the link checker with:

```bash
npm run check-links
```

## Output Example

```
🔍 Quiet Craft Solutions Link Checker
⏳ Scanning for links in React components...
Found 156 TypeScript files to scan
⏳ Validating public assets...

📊 Link Check Results:
Total unique links found: 42
Working links: 40
Broken links: 2

🚨 Broken Links Found:
+--------------------+------------------------------+-------------------------+
| File               | Link                         | Status                  |
+--------------------+------------------------------+-------------------------+
| ...nt/LeftMenu.tsx | /settings                    | Broken: Route not defi… |
| ...mponents/Bar.ts | /vector-missing.svg          | Broken: File not found  |
+--------------------+------------------------------+-------------------------+
```

## Configuration

The tool automatically identifies all valid routes from your React Router configuration. If you add new routes to your application, update the `VALID_ROUTES` array in `link-checker.ts`.

## When to Use

- Before deployment to production
- After making significant changes to navigation
- When refactoring component structure
- After moving or renaming asset files

## Troubleshooting

### Common Issues

1. **False positives for dynamic routes**:
   - If you use dynamic routing (e.g., `/events/:id`), the checker will report these as broken.
   - Solution: Add these route patterns to the `VALID_ROUTES` array with their parameter patterns.

2. **Slow checks for external URLs**:
   - External URL validation may take time if there are many links.
   - Solution: Comment out the external URL validation code if you only want to check internal links.

3. **Missing assets that actually exist**:
   - Some assets might be loaded dynamically or through webpack.
   - Solution: Check your bundler configuration to ensure assets are properly referenced.
