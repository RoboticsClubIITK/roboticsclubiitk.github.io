# Robotics Club IIT Kanpur - Official Website

Welcome to the source code of the official Robotics Club IIT Kanpur website. This project is built using **Next.js 15**, **Tailwind CSS**, and **Framer Motion** for a modern, high-performance, and modular experience.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/RoboticsClubIITK/roboticsclubiitk.github.io.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ How to Update Content

The website is designed to be **data-driven**, meaning you can update most of the content without ever touching the UI components or layout logic.

### 1. Updating Team, Events, or Competitions
All major site data is centralized in `src/data/`.

- **Team Members**: Edit `src/data/team.ts`. You can add new faculty, coordinators, or secretaries here.
- **Timeline Events**: Edit `src/data/events.ts`. Add new sessions, workshops, or competitions to the chronological list.
- **Major Competitions**: Edit `src/data/competitions.ts`. Update competition descriptions or official links.

**Format Example (Team Member):**
```typescript
{
  name: "John Doe",
  role: "Coordinator",
  image: "/Team/John.jpg",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  email: "johndoe@iitk.ac.in",
  contact: "+91 9876543210"
}
```

### 2. Writing Blog Posts
Blog posts are stored as **Markdown** files in `src/content/blogs/`.

- To add a new post, create a `.md` file in that directory.
- Use the following frontmatter at the top:
  ```markdown
  ---
  title: "My Amazing Robot"
  date: "2024-03-04"
  description: "A brief summary of the blog post."
  image: "/Blog/my-image.jpg"
  author: "Robot Master"
  ---
  Your blog content goes here...
  ```

### 3. Updating Learning Resources & Roadmaps
Learning roadmaps are stored in `src/content/resources/`.

- These are also Markdown files.
- To update the **Electronics**, **Mechanical**, **Software**, or **Computer Vision** roadmaps, simply edit the corresponding `.md` file.

### 4. Managing Images
All static assets (images, PDFs, SVGs) should be placed in the `public/` directory.

- **Recommended paths:**
  - `public/Team/`: Team headshots.
  - `public/Blog/`: Cover images for blogs.
  - `public/backgrounds/`: Page background images.
  - `public/projects/`: Project showcase images.

> [!IMPORTANT]
> Since this project is deployed on the root domain, always use absolute paths starting with `/` (e.g., `/Team/photo.jpg`).

---

## 🏗️ Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (Pages & Layouts)
│   ├── components/     # Reusable UI Components
│   │   ├── team/       # Team-specific components
│   │   ├── events/     # Timeline components
│   │   └── ui/         # Base UI elements (Buttons, Cards, PageHero)
│   ├── content/        # Markdown content (Blogs & Resources)
│   ├── data/           # Centralized site data (TS files)
│   └── lib/            # Utility functions & content fetching
├── public/             # Static assets (Images, Documents)
└── tailwind.config.ts  # Design tokens and themes
```

---

## 📡 Deployment

The site is configured for automatic deployment via **GitHub Actions**.

1. Commit your changes to the `main` branch.
2. The `deploy.yml` workflow will automatically build and push the site to the `gh-pages` branch.
3. The live site is available at: [https://roboticsclubiitk.github.io/2025/03/09/To-future-coordies/](https://roboticsclubiitk.github.io/2025/03/09/To-future-coordies/) (or your configured custom domain).

---

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`.
2. Make your changes and verify with `npm run build`.
3. Push to your fork and submit a Pull Request.

**Note:** For UI changes, please use the shared components in `src/components/ui/` to ensure visual consistency across the entire site.
