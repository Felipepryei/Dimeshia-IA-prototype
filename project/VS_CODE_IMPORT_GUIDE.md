# 📘 Visual Studio Code - Complete Import Guide

## How to Import This Project into VS Code

### Method 1: Clone and Copy Files

1. **Open VS Code**
2. **Open Terminal** (Ctrl+` or View → Terminal)
3. **Run these commands:**

```bash
# Create new project
npm create vite@latest dimeshia-brand -- --template react-ts
cd dimeshia-brand

# Install all dependencies
npm install lucide-react @supabase/supabase-js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Open in VS Code
code .
```

4. **Copy all files from the source code documents into your project**

### Method 2: Direct File Creation

Open VS Code and create each file manually using the File → New File option, then copy the code from the documentation.

---

## VS Code Recommended Extensions

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
2. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
3. **TypeScript Importer** (pmneo.tsimporter)
4. **Prettier** (esbenp.prettier-vscode)
5. **ESLint** (dbaeumer.vscode-eslint)

### Install Command:
```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension bradlc.vscode-tailwindcss
code --install-extension pmneo.tsimporter
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
```

---

## VS Code Settings (Optional)

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

---

## All Terminal Commands

```bash
# 1. Initial Setup
npm create vite@latest dimeshia-brand -- --template react-ts
cd dimeshia-brand

# 2. Install Dependencies
npm install
npm install lucide-react @supabase/supabase-js
npm install -D tailwindcss postcss autoprefixer

# 3. Initialize Tailwind
npx tailwindcss init -p

# 4. Development
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Check TypeScript types

# 5. Open in VS Code
code .
```

---

## File Structure in VS Code

```
dimeshia-brand/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── LogoShowcase.tsx
│   │   ├── BrandEssence.tsx
│   │   ├── StudioEnvironment.tsx
│   │   ├── ColorSystem.tsx
│   │   ├── Typography.tsx
│   │   ├── Footer.tsx
│   │   ├── InteractiveDemo.tsx
│   │   └── AppSimulation.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── DEVELOPMENT_GUIDE.md
├── COMPLETE_SOURCE_CODE.md
└── COMPLETE_SOURCE_CODE_PART2.md
```

---

## Quick Copy-Paste Checklist

### ✅ Step-by-Step File Creation

1. **Create config files:**
   - [ ] `package.json`
   - [ ] `vite.config.ts`
   - [ ] `tsconfig.json`
   - [ ] `tsconfig.app.json`
   - [ ] `tailwind.config.js`
   - [ ] `postcss.config.js`
   - [ ] `index.html`

2. **Create main app files:**
   - [ ] `src/main.tsx`
   - [ ] `src/App.tsx`
   - [ ] `src/index.css`
   - [ ] `src/vite-env.d.ts`

3. **Create all components:**
   - [ ] `src/components/Hero.tsx`
   - [ ] `src/components/LogoShowcase.tsx`
   - [ ] `src/components/BrandEssence.tsx`
   - [ ] `src/components/StudioEnvironment.tsx`
   - [ ] `src/components/ColorSystem.tsx`
   - [ ] `src/components/Typography.tsx`
   - [ ] `src/components/Footer.tsx`
   - [ ] `src/components/InteractiveDemo.tsx`
   - [ ] `src/components/AppSimulation.tsx`

4. **Run commands:**
   - [ ] `npm install`
   - [ ] `npm run dev`

---

## Keyboard Shortcuts (VS Code)

| Action | Shortcut (Windows/Linux) | Shortcut (Mac) |
|--------|-------------------------|----------------|
| Open Terminal | Ctrl + ` | Cmd + ` |
| New File | Ctrl + N | Cmd + N |
| Save File | Ctrl + S | Cmd + S |
| Find in Files | Ctrl + Shift + F | Cmd + Shift + F |
| Command Palette | Ctrl + Shift + P | Cmd + Shift + P |
| Toggle Sidebar | Ctrl + B | Cmd + B |
| Split Editor | Ctrl + \ | Cmd + \ |

---

## Troubleshooting

### Issue: Module not found
```bash
npm install
```

### Issue: TypeScript errors
```bash
npm run typecheck
```

### Issue: Tailwind classes not working
```bash
npx tailwindcss init -p
# Then restart VS Code
```

### Issue: Port 5173 already in use
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

---

## Live Preview

1. Start dev server: `npm run dev`
2. Open browser: `http://localhost:5173`
3. View demo mode: `http://localhost:5173/?demo=true`

---

## Git Commands (Version Control)

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: DIMESHIA brand identity"

# Add remote (replace with your repo)
git remote add origin https://github.com/yourusername/dimeshia-brand.git

# Push to GitHub
git push -u origin main
```

---

## Production Deployment

### Build for production:
```bash
npm run build
```

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify:
```bash
npm install -g netlify-cli
netlify deploy
```

---

## Performance Tips

1. **Use React DevTools** for debugging
2. **Enable source maps** in development
3. **Use Lighthouse** to check performance
4. **Optimize images** (already using SVG only)
5. **Code splitting** (automatic with Vite)

---

**🚀 Ready to Start!**

Follow the steps above and you'll have the complete DIMESHIA brand identity running in VS Code in minutes!
