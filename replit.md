# DIMESHIA Brand Identity Showcase

## Project Overview
A high-end brand identity showcase for DIMESHIA - a next-generation AI automation agency specialized in 3D production pipelines. Built with React, Vite, TypeScript, and Tailwind CSS.

## Current State
- **Status**: Fully configured and running in Replit environment
- **Version**: 1.0.0
- **Last Updated**: November 9, 2024

## Technology Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.2
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **3D Graphics**: Three.js (via @react-three/fiber & @react-three/drei)
- **Package Manager**: npm

## Project Structure
```
project/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx         # Landing section with animated logo
│   │   ├── LogoShowcase.tsx # Logo variations
│   │   ├── BrandEssence.tsx # Brand philosophy
│   │   ├── StudioDemo.tsx   # Studio demonstration
│   │   ├── StudioEnvironment.tsx # Workspace simulation
│   │   ├── AIOptimizationTool.tsx # Interactive 3D AI tool
│   │   ├── ThreeDModelViewer.tsx # 3D model renderer
│   │   ├── ColorSystem.tsx  # Color palette
│   │   ├── Typography.tsx   # Typography system
│   │   ├── Footer.tsx       # Footer section
│   │   ├── InteractiveDemo.tsx # Device preview
│   │   └── AppSimulation.tsx # Window simulation
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── vite.config.ts           # Vite configuration (port 5000)
├── package.json             # Dependencies
└── tailwind.config.js       # Tailwind configuration
```

## Development Setup

### Running the Application
The application is configured to run on port 5000 with proper Replit proxy support:
- Development server: `npm run dev`
- Build for production: `npm run build`
- Type checking: `npm run typecheck`
- Linting: `npm run lint`

### Key Features
1. **AI 3D Optimization Tool**: Interactive demonstration of AI-powered 3D model optimization
   - Real-time 3D model visualization using Three.js
   - Simulated file upload and processing
   - Before/after comparison with animated models
   - Metrics dashboard showing optimization statistics
   - Live progress tracking during AI processing
2. **Demo Mode**: Accessible via `?demo=true` URL parameter
3. **Interactive Color System**: Click-to-copy color values
4. **Responsive Design**: Mobile-first approach
5. **Smooth Animations**: Custom CSS keyframes and transitions
6. **SVG Logo**: Programmatically generated hexagonal logo

## Replit Configuration

### Workflow
- **Name**: dev
- **Command**: `cd project && npm run dev`
- **Port**: 5000 (required for Replit webview)
- **Host**: 0.0.0.0 (configured for proxy support)

### Vite Configuration
The Vite server is configured to work with Replit's iframe proxy:
- Server host: 0.0.0.0
- Server port: 5000
- HMR client port: 443 (for secure WebSocket connections)

## Brand Identity

### Color Palette
- **Primary**: Electric Blue (#3B82F6)
- **Accent**: Violet (#8B5CF6)
- **Neutral**: Black to White grayscale

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800, 900

### Design Principles
- High-tech aesthetic with AI/3D focus
- Futuristic workspace simulations
- Clean, minimal interface
- Gradient overlays and blur effects

## Recent Changes
- **2024-11-09**: Added Interactive 3D AI Optimization Tool
  - Installed Three.js, @react-three/fiber, and @react-three/drei
  - Created ThreeDModelViewer component with WebGL-based 3D rendering
  - Created AIOptimizationTool component with file upload simulation
  - Implemented AI processing simulation with progress tracking
  - Added metrics dashboard showing polygon reduction, file size optimization, quality score, and processing time
  - Integrated interactive 3D models with rotation controls
  - Added WebGL fallback handling for headless environments
  
- **2024-11-09**: Initial Replit setup
  - Configured Vite for port 5000 and 0.0.0.0 host
  - Installed all npm dependencies
  - Set up development workflow
  - Created .gitignore for Node.js project
  - Removed unused imports from App.tsx

## Architecture Notes
- **Frontend-only application**: No backend required
- **Static showcase**: Content is hardcoded, not database-driven
- **Supabase dependency**: Included but not currently used
- **Component-based**: Each section is a separate React component

## User Preferences
- None documented yet

## Future Enhancement Ideas
1. Add Framer Motion for advanced animations
2. Implement dark/light mode toggle
3. Create downloadable brand assets
4. Add case study section
5. Implement contact form with Supabase
6. Add analytics tracking

## Notes
- The project includes comprehensive documentation in DEVELOPMENT_GUIDE.md
- Source code is documented in COMPLETE_SOURCE_CODE.md files
- All components use TypeScript for type safety
- Tailwind CSS provides utility-first styling
