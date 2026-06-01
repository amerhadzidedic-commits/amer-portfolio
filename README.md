# Amer Hadžidedić — Portfolio Website

A modern, editorial-style personal CV/portfolio website built with React.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm start
```
The site will open at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```
This creates a `build/` folder you can deploy anywhere.

---

## 📁 Project Structure

```
amer-portfolio/
├── public/
│   └── index.html          ← HTML entry point (add favicon here)
├── src/
│   ├── components/
│   │   ├── Header.jsx      ← Hero / top section
│   │   ├── Header.module.css
│   │   ├── Section.jsx     ← Reusable section wrapper
│   │   ├── Section.module.css
│   │   ├── Experience.jsx  ← Work history
│   │   ├── Experience.module.css
│   │   ├── Education.jsx
│   │   ├── Education.module.css
│   │   ├── Languages.jsx   ← Animated language bars
│   │   ├── Languages.module.css
│   │   ├── Skills.jsx      ← Skill tags
│   │   ├── Skills.module.css
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── hooks/
│   │   └── useInView.js    ← Scroll-animation hook
│   ├── data.js             ← ⭐ ALL YOUR CV CONTENT IS HERE
│   ├── App.js              ← Main layout
│   ├── index.css           ← Global styles & CSS variables
│   └── index.js            ← React entry point
└── package.json
```

---

## ✏️ How to Edit Your Content

**All your CV data lives in one file: `src/data.js`**

- Update your name, contact info → `personal` object
- Add/edit jobs → `experience` array
- Add/edit schools → `education` array
- Add languages → `languages` array
- Add skills → `skills` array

No need to touch any other file for content changes!

---

## 🌐 Deploying to Netlify (Free)

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) and sign up
3. Drag and drop the `build/` folder onto the Netlify dashboard
4. Your site is live! Connect `amerha.com` in Site Settings → Domain Management.

---

## 🎨 Customising the Design

Colors are defined as CSS variables in `src/index.css`:

```css
:root {
  --cream: #f5f1eb;   /* background */
  --ink:   #1a1612;   /* dark panels */
  --rust:  #b84a2e;   /* accent color — change this to your preferred color */
  --muted: #7a7065;   /* secondary text */
  --line:  #d4cfc8;   /* borders */
}
```
