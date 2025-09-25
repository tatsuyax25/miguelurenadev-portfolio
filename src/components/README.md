# Components Documentation

## Component Structure

### Core Components

#### Header.js
**Navigation component with responsive design and active section detection**

Key Features:
- Mobile hamburger menu (< 1024px breakpoint)
- Active section highlighting using intersection observer
- Dark mode toggle with localStorage persistence
- Smooth scroll navigation between sections

```javascript
// Active section detection logic
const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    });
  };
}, []);
```

#### Home.js
**Hero section with typewriter animation and animated background**

Key Features:
- Typewriter effect using interval-based character revelation
- Matrix rain animation with 20 staggered elements
- Geometric floating elements for visual interest
- Terminal-style command display for tech aesthetic

```javascript
// Typewriter implementation
useEffect(() => {
  let index = 0;
  const timer = setInterval(() => {
    setText(fullText.slice(0, index)); // Reveal characters progressively
    index++;
    if (index > fullText.length) {
      clearInterval(timer); // Stop when complete
    }
  }, 100); // Adjust speed here

  return () => clearInterval(timer); // Cleanup
}, [fullText]);
```

#### About.js
**Personal information and skills showcase with categorized layout**

Key Features:
- Three-category skills grid (Frontend, Backend, Tools & Cloud)
- Glassmorphism card design with hover effects
- GitHub statistics integration
- Responsive grid layout (2-6 columns based on screen size)

Skills Categories:
- **Frontend**: React ecosystem, styling frameworks, build tools
- **Backend**: Server technologies, databases, APIs
- **Tools & Cloud**: Version control, deployment platforms, development tools

#### Projects.js
**Two-tier project showcase with featured and regular projects**

Key Features:
- Featured projects in large, detailed cards
- Regular projects in compact grid layout
- Interactive code snippet toggles
- External links to live demos and repositories
- Hover animations and visual feedback

#### Contact.js
**Contact form with Nodemailer integration**

Key Features:
- Form validation and error handling
- Email submission via API route
- Success/error feedback messages
- Responsive form layout

#### Footer.js
**Simple footer with social links and copyright**

Key Features:
- Social media icon links
- Copyright information
- Consistent styling with overall theme

### Utility Components

#### GitHubStats.js
**GitHub repository statistics display**

Fetches and displays:
- Repository count
- Total stars
- Most used languages
- Recent activity

## Styling Patterns

### Glassmorphism Design
```css
/* Common glassmorphism pattern */
.glass-card {
  @apply bg-gradient-to-br backdrop-blur-sm border border-white/20 dark:border-gray-700/50;
  @apply hover:border-white/40 dark:hover:border-gray-600;
  @apply transition-all duration-300 hover:scale-110 hover:shadow-2xl;
}
```

### Responsive Breakpoints
- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

### Dark Mode Implementation
```javascript
// Dark mode toggle pattern
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkMode(true);
    document.documentElement.classList.add('dark');
  }
}, []);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  if (!darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
```

## Animation Patterns

### Hover Effects
```css
/* Scale and glow on hover */
.hover-effect {
  @apply transform transition-all duration-300;
  @apply hover:scale-105 hover:shadow-xl;
}

/* Gradient shift on hover */
.gradient-hover {
  @apply bg-gradient-to-r from-blue-500 to-purple-600;
  @apply hover:from-blue-600 hover:to-purple-700;
}
```

### Loading States
```javascript
// Loading state pattern
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  try {
    // API call
  } finally {
    setLoading(false);
  }
};
```

## Performance Considerations

### Image Optimization
```javascript
// Next.js Image component usage
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
  priority // For above-the-fold images
/>
```

### Code Splitting
- Automatic route-based splitting with Next.js
- Dynamic imports for heavy components
- Lazy loading for non-critical content

### Bundle Optimization
- Tree shaking for unused code elimination
- Minimal external dependencies
- Optimized icon imports from react-icons

## Accessibility Features

### Keyboard Navigation
- Tab order management
- Focus indicators
- Skip links for screen readers

### Screen Reader Support
- Semantic HTML structure
- ARIA labels and descriptions
- Alt text for images

### Color Contrast
- WCAG AA compliant color combinations
- High contrast mode support
- Color-blind friendly palette