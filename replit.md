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
│   │   ├── StudioDemo.tsx   # Automated pipeline demo with 3D models
│   │   ├── StudioEnvironment.tsx # Workspace simulation
│   │   ├── PipelineModelViewer.tsx # 3D pipeline stage visualizer
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
1. **Automated Studio Pipeline Demo**: Real-time demonstration of the complete 3D production workflow
   - Interactive play/pause controls
   - 4 distinct pipeline stages with unique 3D models for each stage:
     * Stage 1: 3D Model Input (High-poly wireframe, 245K polygons)
     * Stage 2: Pipeline Processing (Mid-poly with processing effects, 156K polygons)  
     * Stage 3: Render Optimization (Optimized model, 45K polygons)
     * Stage 4: Output Delivery (Final polished assets, 12K polygons)
   - Live metrics showing polygon count reduction and quality improvement
   - Animated transitions between stages
   - Real 3D models using Three.js that rotate and scale
2. **AI 3D Optimization Tool**: Interactive demonstration of AI-powered 3D model optimization
   - Real-time 3D model visualization using Three.js
   - Simulated file upload and processing
   - Before/after comparison with animated models
   - Metrics dashboard showing optimization statistics
   - Live progress tracking during AI processing
3. **Demo Mode**: Accessible via `?demo=true` URL parameter
4. **Interactive Color System**: Click-to-copy color values
5. **Responsive Design**: Mobile-first approach
6. **Smooth Animations**: Custom CSS keyframes and transitions
7. **SVG Logo**: Programmatically generated hexagonal logo

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
- **2024-11-25**: Full 3D Model Upload Support with Real-time Statistics
  - ✅ **Experience Our Technology Section**: Upload 3D models to see real optimization demo
  - ✅ **Multi-format Support**: OBJ, GLB, GLTF, FBX files load directly with real geometry
  - ✅ **Live Model Statistics**: Display actual polygon count, mesh count, and material count
  - ✅ **FBXLoader Integration**: Added professional FBX file support
  - ✅ **Geometry Validation**: NaN detection and fallback cube for invalid models
  - ⚠️ **BLEND/MAX Files**: Require conversion to GLB/FBX/OBJ format first
  - **How to Convert Buoy Model (BLEND to GLB)**:
    1. Open Buoy Model in Blender
    2. Go to File > Export As > Export as GLB
    3. Upload the .glb file to Experience Our Technology
    4. See your real model with polygon/mesh/material statistics

- **2024-11-25**: DIMESHIA AI Pipeline Complete Overhaul - Premium Automation Showcase (v3) with Realistic 3D Character
  - Completely rebuilt LiveTechShowcase with 6 immersive automation stages
  - **NOT rendering or product visuals** - showcases real AI automation workflow like production tool
  - **Realistic 3D Character Model** - High-quality procedurally-generated warrior character with:
    - Full body anatomy (head, torso, arms with hands, legs with boots)
    - Detailed facial features (eyes, mouth)
    - Shoulder armor (metallic)
    - Equipped with a sword (blade, crossguard, grip, pommel with gold accents)
    - Professional lighting (studio + directional + neon accent lights)
    - Interactive orbit controls with auto-rotation
    - 3D grid floor for depth perception
    - Real-time mesh with high polygon count for professional appearance
  - **6-Stage Pipeline Visualization:**
    1. **Model Scan & Validation** - Real 3D character with pulsing scan lines, diagnostic HUD overlays
       - Shows realistic model with full geometry and materials
       - Topology Analysis, Ngon Detection, Scale Check, Naming Validation, UV Scan
       - Each with real-time progress bars and green checkmarks
    2. **Mesh Cleanup (AI Fix Module)** - Before/After visualization showing n-gon removal and geometry rebuilding
       - Animated topology changes, topology heatmaps red→green transition
       - Processing metrics: "11.5M ops/sec"
    3. **UV & Texture Workflow** - UDIM tiles lighting up in sequence (1001-1005)
       - Auto UV Unwrap, UDIM Layout, UV Packing, Overlap Detection
       - Smooth animated transitions like puzzle snapping
    4. **Pipeline Integration & Export** - Format conversions (FBX→GLB→USDZ)
       - Folder structure generation, auto file renaming, texture validation
       - Smooth format conversion icon animations
    5. **Render Pipeline Prep** - Auto light rig, camera presets, scene organization
       - 3-point + Fill lighting setup, 35mm camera, Path Tracer settings
       - Animated progress tracking per element
    6. **Final Summary Report** - Professional SaaS-style completion screen
       - Workflow Acceleration: +63%, Tasks Automated: 17, Errors Fixed: 42
       - Download Pipeline Report button
  - **Section Timeline View** - All 6 stages visible with active/completed/pending indicators
  - **Real-Time Progress Tracking:**
    - Per-section progress bar with smooth animations
    - Overall pipeline progression across all stages
    - Current section display with live metrics
  - **Enhanced Controls:**
    - Start AI Pipeline button (gradient blue/cyan)
    - Pause Pipeline button (gradient yellow/orange)
    - Reset button for replay
    - Download Report button
    - Back Home navigation
  - **Premium Design Elements:**
    - Glassmorphism cards with backdrop blur effects
    - Blue, purple, cyan neon accents with glow effects
    - Animated scan lines over realistic 3D model
    - Pulsing-glow animations on active elements
    - Animated background grid and gradient orbs
    - Fully responsive layout (adjusts for mobile/tablet/desktop)
    - Professional AI SaaS dashboard aesthetic
    - Smooth micro-interactions and state transitions
  - **Visual Fidelity:**
    - Like Unreal Engine + NVIDIA Omniverse diagnostics UI
    - **Real procedurally-generated 3D character model** with sword equipment
    - High-quality WebGL rendering with studio lighting
    - Real-time HUD overlays with metrics
    - Heatmap color transitions (red→green)
    - Animated neural network visualizations
    - Before/After comparison panels
  - **Pure Frontend Simulation** - No backend required
  - **Timing:** Each stage has realistic duration (~39 seconds total pipeline)
  - Accessible via "Watch Live Demo" CTA button on hero homepage

- **2024-11-25**: Professional Hero CTA Section
  - Created agency-focused value proposition messaging
  - "Start Your Transformation" primary CTA button
  - "Watch Live Demo" secondary button with sparkles icon
  - Social proof text: "Join leading 3D studios optimizing their workflows"
  - Integrated CTAs with smooth scroll animations
  - Professional button styling with hover effects

- **2024-11-24**: Complete DIMESHIA Prototype with AMAO Product Launch
  - Created AmaoSection component showcasing AMAO - Automated Model Analysis & Optimization product
  - Built AmaoDemo component with 8-stage interactive analysis pipeline
  - Implemented real model selection (Character, Scene, Product models with realistic data)
  - Added live results dashboard showing AI analysis: health scores, ngon detection, UV coverage, topology issues
  - Created step-by-step pipeline visualization with progress tracking
  - Integrated AI-recommended fixes for detected geometry issues
  - Added performance metrics (render speed improvement 2.9-3.8x faster)
  - Built waitlist email capture for beta launch
  - Added DimeshiaServices section showcasing 3 departments: AI Lab, Creative Studio, Training & Consulting
  - Created ImplementationGuide section with DCC integration methods and ROI metrics
  - Enhanced TechnologyExperience with AutoPlayTechDemo for automatic pipeline showcase
  - All components follow premium, futuristic design with gradients, shadows, and modern UI

- **2024-11-09**: Enhanced Studio Demo with Real 3D Pipeline Visualization
  - Created PipelineModelViewer component showing different 3D models for each pipeline stage
  - Integrated real-time 3D models that change based on the active workflow step
  - Added dynamic polygon count display (245K → 156K → 45K → 12K)
  - Added quality score progression (65% → 78% → 92% → 98%)
  - Enhanced visual feedback with stage-specific colors and effects
  - Implemented smooth transitions between pipeline stages
  
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
- Wants to showcase Buoy Model in Experience Our Technology section
- Prefers to see real 3D models with optimization statistics displayed

## File Format Support
**✅ Directly Supported (No conversion needed)**:
- OBJ files (.obj)
- GLB files (.glb) 
- GLTF files (.gltf)
- FBX files (.fbx)

**⚠️ Requires Conversion First**:
- BLEND files → Export as GLB/FBX from Blender
- MAX files → Export as FBX from 3DS Max

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
