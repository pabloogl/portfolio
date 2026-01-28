# Data Science Portfolio

A professional, minimalist portfolio website for Data Science and Data Engineering professionals. Built with React, Vite, Tailwind CSS, and i18next for multi-language support.

## ✨ Features

- 🌍 **Multi-language Support**: English, German, and Spanish
- 🌓 **Dark/Light Mode**: Automatic theme switching with user preference persistence
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern Design**: Clean, minimalist, data-driven aesthetic
- 🔗 **GitHub Integration**: Ready for manual or API-based project loading

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pabloogl/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/
│   └── projects.json          # Project data
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation with language selector
│   │   ├── Hero.jsx           # Hero section with animated background
│   │   ├── Skills.jsx         # Tech stack display
│   │   ├── Projects.jsx       # Projects grid
│   │   ├── ProjectCard.jsx    # Individual project card
│   │   └── Contact.jsx        # Contact section
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json
│   │   ├── de/
│   │   │   └── translation.json
│   │   └── es/
│   │       └── translation.json
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   ├── i18n.js                # i18next configuration
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── GITHUB_INTEGRATION.md      # GitHub integration guide
└── README.md
```

## 🎨 Customization

### Personal Information

1. **Update translations**: Edit files in `src/locales/[lang]/translation.json`
2. **Contact information**: Modify `src/components/Contact.jsx`
3. **Hero section**: Update your name and title in `src/components/Hero.jsx`

### Projects

#### Manual Method (Current)
Edit `public/projects.json` to add/modify your projects:

```json
{
  "id": 1,
  "title": "Your Project",
  "description": {
    "en": "English description",
    "es": "Descripción en español",
    "de": "Deutsche Beschreibung"
  },
  "technologies": ["Python", "React", "AWS"],
  "githubUrl": "https://github.com/username/repo",
  "demoUrl": "https://demo-url.com",
  "image": null
}
```

#### GitHub API Method
See `GITHUB_INTEGRATION.md` for detailed instructions on automatic project fetching.

### Skills

Update the skills in `src/components/Skills.jsx`:
- Modify `skillCategories` array
- Add/remove technologies in the "Also experienced with" section

### Styling

- **Colors**: Edit `tailwind.config.js` to change the color palette
- **Fonts**: Update the Google Fonts import in `src/index.css`
- **Dark mode**: Tailwind's dark mode classes are used throughout

## 🌐 Multi-language Support

The portfolio supports three languages out of the box:
- 🇬🇧 English (en)
- 🇩🇪 German (de)
- 🇪🇸 Spanish (es)

To add more languages:

1. Create a new translation file: `src/locales/[lang]/translation.json`
2. Add the language to `src/i18n.js`
3. Add the language option to `src/components/Navbar.jsx`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: react-i18next
- **Language**: JavaScript (ES6+)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Pablo - [GitHub](https://github.com/pabloogl)

---

**Note**: Remember to update all placeholder content (name, email, GitHub links, etc.) with your actual information before deploying!