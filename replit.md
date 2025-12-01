# DIMESHIA Brand Identity Showcase

## Overview
This project is a high-end brand identity showcase for DIMESHIA, an AI automation agency specializing in 3D production pipelines. Built with React, Vite, TypeScript, and Tailwind CSS, its purpose is to demonstrate DIMESHIA's capabilities in 3D AI optimization and automated studio pipelines through interactive and visually rich demonstrations. The project aims to attract leading 3D studios and creative agencies by showcasing innovative solutions and a futuristic aesthetic.

## User Preferences
- Wants to showcase Buoy Model in Experience Our Technology section
- Prefers to see real 3D models with optimization statistics displayed

## System Architecture
The application is a frontend-only, static showcase built with React 18.3.1, Vite 5.4.2, and TypeScript 5.5.3. Styling is managed with Tailwind CSS 3.4.1. 3D graphics are handled by Three.js, integrated via `@react-three/fiber` and `@react-three/drei`. The UI/UX features a high-tech, futuristic aesthetic with a clean, minimal interface, incorporating gradient overlays, blur effects, and animations.

**Key Features:**
- **Automated Studio Pipeline Demo**: A real-time, interactive demonstration of a 6-stage 3D production workflow, featuring a realistic 3D character model, dynamic metrics, and professional UI elements (e.g., glassmorphism, neon accents).
- **AI Automation Lab (R&D Section)**: Core R&D showcase with 3 experiment cards:
  - Intelligent Naming Engine (94% accuracy, 12 sec per scene)
  - Automated Scene Cleaning (78% file size reduction)
  - Polygon Reduction Engine (91% poly reduction, 8x faster render)
  - Real-time beta result simulation with concrete KPI metrics
- **Experience Our Technology**: Real 3D model upload with live statistics (polygon count, mesh count, material count) and before/after optimization comparison with AI Analysis Report export
- **AMAO Product Launch**: Premium hero section with clear headline + subheadline + main CTA ("Try AMAO Demo"), followed by How-It-Works 4-step workflow (Upload → AI Analysis → Optimize → Download/Export) with visual flow and production-ready indicators
- **AI 3D Optimization Tool**: Interactive tool for model optimization with real-time statistics.
- **Professional Pricing Section**: 4-tier pricing model ($29, $79, $199, Custom) with per-tier feature sets for 3D Artists, Freelancers, Studios, and Creative Agencies.
- **Interactive Color System**: Clickable color palette.
- **Responsive Design**: Mobile-first approach with smooth animations.

**Design Principles:**
- High-tech aesthetic with AI/3D focus, futuristic workspace simulations.
- Clean, minimal interface with gradient overlays and blur effects.
- **Color Palette**: Primary Electric Blue (#3B82F6), Accent Violet (#8B5CF6), Neutral Black to White grayscale.
- **Typography**: Inter (Google Fonts) with weights 400-900.

## Recent Updates (December 2024)

### Latest Changes:
- **AI Automation Lab Enhanced**: Premium redesign with visual improvements:
  - Color-coded experiment cards (Blue/Cyan, Purple/Pink, Emerald/Teal)
  - Structured metric grids with gradient text for each experiment
  - Enhanced hover effects, icon animations, and visual depth
  - Premium beta results section with live badge and visual stats grid
  - Improved CTA button with better animations and visibility
  - Better typography hierarchy and spacing
- **AI-Powered 3D Optimization Enhanced**: Real metrics based on uploaded model data:
  - Real-time optimization metric calculation (88% polygon reduction, 85% file size reduction, 18x faster rendering)
  - Live metrics display showing before/after comparison with gradient progress bars
  - Mesh and material optimization metrics (40% mesh reduction, 65% material reduction)
  - Memory savings and quality retention indicators (89% memory reduction, 96% quality retention)
  - Enhanced Key Insights section with gradient backgrounds and proven stats
  - Production-ready quality assurance badges
  - **Export AI Analysis Report**: Download comprehensive JSON report with all optimization metrics and analysis details
- **AI Automation Lab**: New R&D section with 3 experiment cards showcasing concrete automation results (removed futuristic studio v3.0)
- **Professional Pricing Section**: 4-tier pricing model for different user types
- **3D Model Upload System**: Fixed critical bug - real models now display with live statistics instead of default cube
- **Multi-Format Support**: OBJ, GLB, GLTF, FBX files fully functional with geometry validation and NaN detection
- **Before/After Visualization**: Original vs Optimized model comparison working correctly

## External Dependencies
- **React**: Frontend framework.
- **Vite**: Build tool.
- **TypeScript**: Programming language.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide React**: Icon library.
- **Three.js**: 3D graphics rendering with OBJLoader, GLTFLoader, FBXLoader.
- **npm**: Package manager.
- **Google Fonts (Inter)**: Typography.