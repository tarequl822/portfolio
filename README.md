# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring day/night mode, smooth animations, and a clean design.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Day/Night Mode**: Toggle between light and dark themes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dynamic Content**: Content loaded from JSON files for easy customization
- **Interactive Elements**: Project filtering, testimonials slider, contact form
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile-First**: Responsive navigation with hamburger menu
- **Accessibility**: Proper semantic HTML and focus management

## 📁 Project Structure

```
portfolio/
├── Information/
│   └── portfolio-data.json    # Portfolio content and data
├── Photos/
│   ├── profilePic.png         # Profile picture
│   ├── coverPhoto.jpg         # Hero background image
│   ├── project1.jpg           # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── testimonial1.jpg       # Testimonial avatars
│   ├── testimonial2.jpg
│   └── testimonial3.jpg
├── src/
│   ├── index.html             # Main HTML file
│   ├── styles.css             # CSS styles with theme switching
│   └── script.js              # JavaScript functionality
├── package.json               # Project configuration
└── README.md                  # This file
```

## 🎨 Design Features

### Color Schemes
- **Dark Mode**: Modern dark theme with blue accents
- **Light Mode**: Clean light theme with blue accents
- **Accent Colors**: Blue gradients for highlights and buttons

### Typography
- **Font**: Inter (Google Fonts) - Clean, modern sans-serif
- **Hierarchy**: Clear visual hierarchy with proper spacing
- **Readability**: Optimized for all screen sizes

### Layout
- **Grid System**: CSS Grid for responsive layouts
- **Flexbox**: Flexible component layouts
- **Spacing**: Consistent spacing using CSS custom properties

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern CSS features, custom properties, Grid/Flexbox
- **JavaScript (ES6+)**: Modern JavaScript with classes and async/await
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local development server (optional, for JSON loading)

### Installation
1. Clone or download the project
2. Open `src/index.html` in your browser
3. For full functionality, serve files from a local server

### Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

## 📝 Customization

### Updating Content
1. **Personal Information**: Edit `Information/portfolio-data.json`
2. **Photos**: Replace images in the `Photos/` folder
3. **Styling**: Modify `src/styles.css`
4. **Functionality**: Update `src/script.js`

### JSON Data Structure
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your Tagline",
    "bio": "Your Bio",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your Location"
  },
  "skills": {
    "frontend": ["React", "Vue.js", "Angular"],
    "backend": ["Node.js", "Python", "Java"],
    "database": ["MongoDB", "PostgreSQL", "MySQL"],
    "devops": ["Docker", "AWS", "Git"]
  },
  "experience": [...],
  "projects": [...],
  "testimonials": [...],
  "social": {...}
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add CSS styles in `styles.css`
3. Add JavaScript functionality in `script.js`
4. Update navigation if needed

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

## 🌙 Theme System

### CSS Custom Properties
The theme system uses CSS custom properties for easy customization:

```css
:root {
  --bg-primary-light: #ffffff;
  --bg-secondary-light: #f8f9fa;
  --text-primary-light: #212529;
  --accent-light: #007bff;
  
  --bg-primary-dark: #0d1117;
  --bg-secondary-dark: #161b22;
  --text-primary-dark: #f0f6fc;
  --accent-dark: #58a6ff;
}
```

### Theme Toggle
- Click the sun/moon icon in the top-right corner
- Theme preference is saved in localStorage
- Smooth transitions between themes

## 🎯 Key Components

### Navigation
- Fixed header with backdrop blur
- Smooth scrolling to sections
- Mobile hamburger menu
- Active section highlighting

### Hero Section
- Large profile picture with badge
- Call-to-action buttons
- Scroll indicator animation

### Skills Grid
- Categorized skill display
- Interactive skill tags
- Responsive grid layout

### Experience Timeline
- Vertical timeline design
- Alternating left/right layout
- Technology tags for each role

### Projects Gallery
- Filterable project cards
- Image hover effects
- Live demo and GitHub links

### Testimonials
- Auto-rotating slider
- Navigation controls
- Smooth transitions

### Contact Form
- Form validation
- Success/error notifications
- Social media links

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Grid, Flexbox, Custom Properties, Backdrop Filter
- **JavaScript**: ES6+ features, async/await, Intersection Observer

## 📊 Performance Features

- **Lazy Loading**: Images load as they come into view
- **Smooth Animations**: CSS transitions and transforms
- **Optimized CSS**: Efficient selectors and minimal repaints
- **Debounced Events**: Optimized scroll and resize handlers

## 🎨 Customization Tips

### Colors
- Update CSS custom properties in `:root`
- Maintain contrast ratios for accessibility
- Use consistent color schemes across themes

### Typography
- Adjust font sizes in CSS variables
- Maintain readable line heights
- Consider mobile readability

### Layout
- Use CSS Grid for complex layouts
- Flexbox for component alignment
- Maintain consistent spacing

### Animations
- Keep animations subtle and purposeful
- Use CSS transforms for performance
- Provide reduced motion alternatives

## 🚀 Deployment

### Static Hosting
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **Firebase Hosting**: Google's hosting solution

### Custom Domain
1. Purchase domain from registrar
2. Configure DNS settings
3. Update hosting provider settings
4. Add SSL certificate

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have questions or need help:
- Check the documentation
- Review the code comments
- Open an issue on GitHub
- Contact the maintainer

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] Portfolio filters
- [ ] Dark mode preference detection
- [ ] PWA capabilities
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] SEO optimization
- [ ] Analytics integration

---

**Happy Coding! 🎉**

This portfolio template provides a solid foundation for showcasing your skills and projects. Customize it to match your personal brand and add your own creative touches! 