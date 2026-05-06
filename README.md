# 🐍 Astro + WordPress Starter Kit

> **Culebra Lab** - Headless CMS architecture experiment

Modern headless WordPress setup with Astro for blazing-fast static site generation.

![Culebra Lab](https://img.shields.io/badge/Culebra-Lab-04fb94?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-v6.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![WordPress](https://img.shields.io/badge/WordPress-REST_API-21759B?style=for-the-badge&logo=wordpress&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🚀 Features

- ⚡ **Astro v6.2** - High-performance static site generator
- 🔌 **WordPress REST API** - Headless CMS integration
- 🎨 **Tailwind CSS v3** - Utility-first styling
- 📱 **Responsive Design** - Cinematic tech aesthetic
- 🔍 **SEO Ready** - Meta tags, Open Graph, Twitter Cards
- 🐍 **Culebra Lab Branding** - Custom design system

---

## 📦 Tech Stack
Astro v6.2.2
├── WordPress REST API (Headless CMS)
├── Tailwind CSS v3
├── TypeScript
└── Node.js v18+

---

## 🛠️ Setup

### Prerequisites

- Node.js v18 or higher
- WordPress installation with REST API enabled

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/DhiviPanda/astro-wp-starter.git
cd astro-wp-starter
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure WordPress connection:**

Create `.env` file:
```env
WP_URL=https://your-wordpress-site.com
WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

4. **Start dev server:**
```bash
npm run dev
```

Open `http://localhost:4321` 🚀

---

## 📁 Project Structure
astro-wp-starter/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with SEO
│   ├── lib/
│   │   └── wordpress.ts          # WordPress API integration
│   ├── pages/
│   │   └── index.astro           # Homepage
│   └── styles/
│       └── global.css            # Global styles + Tailwind
├── .env                          # WordPress config (not in repo)
├── tailwind.config.mjs           # Tailwind configuration
└── astro.config.mjs              # Astro configuration

---

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

---

## 🌐 WordPress Setup

Your WordPress site needs:

1. **REST API enabled** (default in WP 4.7+)
2. **Posts published** (for content display)
3. **CORS configured** (if on different domain)

Test your API:
https://your-wordpress-site.com/wp-json/wp/v2/posts

---

## 🎨 Design System

**Color Palette:**
- Primary: `#04fb94` (Neon Green)
- Background: `#0a0a0a` (Deep Black)
- Surface: `#141414` (Dark Gray)

**Typography:**
- Headings: Space Grotesk
- Body: Inter
- Code: Space Grotesk Mono

---

## 📈 Performance

- ⚡ **<200ms** API response time
- 🚀 **Static generation** for instant page loads
- 📦 **Minimal bundle size** with Astro

---

## 🔮 Roadmap

- [ ] Deploy to Netlify/Vercel
- [ ] Image optimization
- [ ] Custom Post Types support
- [ ] Advanced SEO (sitemap, robots.txt)
- [ ] Contact forms
- [ ] Multi-language support

---

## 👩‍💻 Author

**Cris Culebras**  
Lead Tech Architect @ [Daruma](https://darumaproducciones.es)

🐍 **Culebra Lab** - Experimental web architecture projects

---

## 📄 License

MIT License - feel free to use this for your own projects!

---

## 🤝 Contributing

Issues and PRs welcome! This is an experimental learning project.

---

**Built with 🐍 by Culebra Lab**