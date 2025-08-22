# 🍽️ RestroWorks - Modern Restaurant Website

A beautiful, modern restaurant website built with **Next.js 15**, **Payload CMS**, and **Framer Motion**. Features a dark theme, responsive design, and stunning animations.

## 🚀 Live Demo

**[View Live](https://restroworks.vercel.app/)**

## ✨ Features

- 🎨 **Modern Dark Theme** - Beautiful dark mode design with gradient accents
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- ☁️ **Cloud Storage** - Cloudinary integration for media management
- 🌐 **Multi-language** - English and Hindi support
- 🔍 **SEO Optimized** - Built-in SEO and sitemap generation
- 📝 **Rich Content** - Advanced content blocks and forms
- ⚡ **Fast Performance** - Optimized for speed and user experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **CMS**: Payload CMS 3.52.0
- **Styling**: Tailwind CSS, CSS Variables
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Storage**: Cloudinary
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.20.2 or >=20.9.0)
- **npm** or **pnpm**
- **MongoDB** (local or cloud instance)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/neerabhjha/restroworks.git
cd restroworks-assignment
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URI=your_mongodb_connection_string

# Payload
PAYLOAD_SECRET=your_payload_secret_key

# Preview (optional)
PREVIEW_SECRET=your_preview_secret

# App URLs
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 4. Database Setup

Ensure your MongoDB instance is running and accessible. The app will automatically create collections on first run.

### 5. Run the Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 6. Access Admin Panel

Visit [http://localhost:3000/admin](http://localhost:3000/admin) to access the Payload CMS admin panel.

## 🏗️ CMS Modeling Choices

### Content Architecture

The CMS is structured around **Pages** and **Blocks** for maximum flexibility:

#### **Pages Collection**
- **Hero Section**: High-impact, medium-impact, or low-impact hero layouts
- **Layout Blocks**: Flexible content blocks that can be reordered
- **SEO Fields**: Built-in SEO optimization with meta tags
- **Slug Management**: Automatic slug generation with locking capability

#### **Blocks System**
- **Content Blocks**: Rich text with multiple column layouts
- **Media Blocks**: Image and video integration
- **Testimonial Blocks**: Customer reviews with author information
- **Call-to-Action Blocks**: Promotional sections with links
- **Form Blocks**: Contact forms with email notifications
- **Archive Blocks**: Dynamic content listing
- **Feature Blocks**: Highlighted features with icons

#### **Media Management**
- **Image Optimization**: Automatic resizing and optimization
- **Focal Points**: Precise image cropping control
- **Alt Text**: SEO-friendly image descriptions

#### **User Management**
- **Role-based Access**: Admin and editor roles
- **Authentication**: Secure login system
- **Session Management**: Persistent user sessions

## 📝 Creating and Editing Content

### Managing Pages

1. **Access Admin Panel**: Go to `/admin` and log in
2. **Navigate to Pages**: Click "Pages" in the sidebar
3. **Create New Page**:
   - Click "Create New"
   - Fill in the title and slug
   - Choose hero type (High/Medium/Low Impact)
   - Add hero content (text, media, links)
   - Add layout blocks as needed
   - Configure SEO settings
   - Publish or save as draft

### Working with Blocks

#### **Content Blocks**
- **Column Layouts**: Choose from full, half, one-third, or two-thirds width
- **Rich Text**: Use the Lexical editor for formatted content
- **Links**: Add internal or external links with custom styling

#### **Media Blocks**
- **Upload Media**: Drag and drop or click to upload
- **Image Settings**: Set focal points and alt text
- **Responsive Images**: Automatic sizing for different screen sizes

#### **Form Blocks**
- **Field Types**: Text, email, textarea, select, checkbox
- **Validation**: Built-in form validation
- **Email Notifications**: Configure recipient emails
- **Success Messages**: Custom confirmation messages

#### **Testimonial Blocks**
- **Quote Content**: Rich text for testimonials
- **Author Information**: Name, title, and avatar
- **Styling**: Automatic dark theme styling

### Content Workflow

1. **Draft Mode**: Create and edit content in draft mode
2. **Preview**: Use the preview feature to see changes
3. **Publish**: Make content live when ready
4. **Version Control**: Automatic versioning of content changes

## 🎨 Customization

### Theme Customization

The dark theme can be customized by modifying:

- **CSS Variables**: `src/cssVariables.js`
- **Tailwind Config**: `tailwind.config.mjs`
- **Component Styles**: Individual component files

### Adding New Blocks

1. Create a new block component in `src/blocks/`
2. Add block configuration
3. Register the block in the CMS
4. Update TypeScript types

### Animation Customization

Framer Motion animations can be customized in:

- **Hero Components**: `src/heros/`
- **Block Components**: `src/blocks/`
- **Navigation**: `src/Header/Nav/`

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add all required environment variables
3. **Build Settings**: Vercel will auto-detect Next.js settings
4. **Deploy**: Click deploy and wait for build completion

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Node.js buildpack
- **Railway**: Direct deployment from GitHub
- **DigitalOcean**: App Platform deployment
- **AWS**: Elastic Beanstalk or ECS

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# CMS
npm run generate:types    # Generate TypeScript types
npm run generate:importmap # Generate import map

# Testing
npm run test         # Run tests
npm run test:e2e     # Run end-to-end tests

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
```

### Project Structure

```
src/
├── app/                 # Next.js app router
├── blocks/             # Content blocks
├── collections/        # CMS collections
├── components/         # React components
├── heros/             # Hero section components
├── Header/            # Header components
├── Footer/            # Footer components
├── providers/         # React context providers
├── utilities/         # Utility functions
└── payload.config.ts  # Payload CMS configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/neerabhjha/restroworks/issues) page
2. Create a new issue with detailed information

## 🙏 Acknowledgments

- **Payload CMS** for the excellent headless CMS
- **Next.js** for the amazing React framework
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Cloudinary** for media management

---

**Built with ❤️ for modern restaurant websites**
