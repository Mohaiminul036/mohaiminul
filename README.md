# Md Mohaiminul Islam Emon - Portfolio Website

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://mohaiminul036.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive portfolio website showcasing my work as a Research and Data Analyst, featuring projects in machine learning, real estate analytics, sports performance analysis, and healthcare AI.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Dynamic typing effect, smooth scrolling, fade-in animations, and parallax effects
- **Project Showcase**: Detailed case studies with problem-solution-impact format
- **Publications Section**: Complete list of peer-reviewed research papers with DOI links
- **Skills Visualization**: Animated skill bars and categorized technical competencies
- **Work Experience Timeline**: Professional experience with achievements and technologies used
- **Contact Section**: Multiple ways to connect with social media integrations
- **Performance Optimized**: Lazy loading, debounced scroll events, and optimized animations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## 🚀 Quick Start

### View Locally

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/Mohaiminul036/EmonsPortfolio.git
   cd EmonsPortfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open http://localhost:8000 in your browser
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   
   # Then open http://localhost:8000 in your browser
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/Mohaiminul036/EmonsPortfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"
   - Your site will be live at: `https://mohaiminul036.github.io/EmonsPortfolio/`

### Deploy to Netlify

1. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

2. **Using Netlify Web Interface**
   - Go to [Netlify](https://www.netlify.com/)
   - Drag and drop the project folder
   - Your site will be live instantly

### Deploy to Vercel

1. **Using Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Using Vercel Web Interface**
   - Go to [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Deploy with one click

## 📁 Project Structure

```
EmonsPortfolio/
│
├── index.html          # Main HTML file with complete portfolio structure
├── styles.css          # Complete styling with responsive design
├── script.js           # Interactive features and animations
├── README.md           # This file
└── .gitignore         # Git ignore file
```

## 🎨 Customization Guide

### Update Personal Information

**Edit `index.html`:**

1. **Hero Section** (Lines 44-95):
   - Update name, title, description
   - Modify statistics (publications, projects, experience)
   - Update social media links

2. **About Section** (Lines 98-145):
   - Update bio and background
   - Modify awards and achievements
   - Update language proficiency

3. **Experience Section** (Lines 148-280):
   - Add/remove job positions
   - Update company names, dates, and achievements
   - Modify technology tags

4. **Projects Section** (Lines 283-545):
   - Add new projects or remove existing ones
   - Update project descriptions and impact metrics
   - Modify GitHub links

5. **Publications Section** (Lines 548-695):
   - Add new publications
   - Update DOI links and publication details

6. **Skills Section** (Lines 698-870):
   - Adjust skill levels (change width percentage in CSS)
   - Add new skills or technologies
   - Update domain expertise tags

7. **Contact Section** (Lines 934-1026):
   - Update email, phone, location
   - Modify social media profile links

### Customize Colors

**Edit `styles.css` (Lines 8-25):**

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade */
    --primary-light: #3b82f6;      /* Lighter shade */
    --accent-color: #10b981;       /* Accent color */
    /* Modify these values to match your brand */
}
```

### Customize Fonts

**Edit `index.html` (Line 9):**

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update in `styles.css`:

```css
--font-primary: 'YourFont', sans-serif;
```

### Add Your Photo

1. Add your photo to the project folder (e.g., `profile.jpg`)
2. Add this code to the hero section in `index.html`:

```html
<div class="hero-image">
    <img src="profile.jpg" alt="Mohaiminul Islam Emon">
</div>
```

3. Add styling in `styles.css`:

```css
.hero-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter)

## ✨ Key Features Explained

### Responsive Design
- Mobile-first approach
- Breakpoints at 968px and 640px
- Flexible grid layouts

### Animations
- Fade-in on scroll using Intersection Observer
- Smooth scrolling navigation
- Typing effect for hero subtitle
- Animated skill progress bars
- Parallax effect on hero section

### Performance
- Lazy loading for images
- Debounced scroll events
- Optimized animations using CSS transforms
- Minimal dependencies

### SEO Optimization
- Semantic HTML5 elements
- Meta tags for social sharing
- Descriptive alt text
- Clean URL structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🤝 Contributing

This is a personal portfolio, but if you'd like to suggest improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - feel free to use it as a template for your own portfolio.

## 📞 Contact

**Md Mohaiminul Islam Emon**

- **Email**: [mohaiminul100@hotmail.com](mailto:mohaiminul100@hotmail.com)
- **Phone**: +47 46 24 69 32
- **Location**: Oslo, Norway

**Connect with me:**
- GitHub: [@Mohaiminul036](https://github.com/Mohaiminul036)
- Kaggle: [@mohaiminul101](https://www.kaggle.com/mohaiminul101)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=r8AzDS0AAAAJ&hl=en)
- ResearchGate: [Profile](https://www.researchgate.net/profile/Mohaiminul-Islam)

## 🙏 Acknowledgments

- Inspired by top data analyst portfolios from David Venturi, Alex The Analyst, and Kelly Adams
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Color palette inspired by Tailwind CSS

## 📊 Portfolio Statistics

- **7+** Published Research Papers
- **10+** Machine Learning Projects
- **2+** Years Professional Experience
- **4** Programming Languages
- **Multiple** Data Analytics Tools

---

**Built with ❤️ by Md Mohaiminul Islam Emon**

*Last Updated: January 2026*

