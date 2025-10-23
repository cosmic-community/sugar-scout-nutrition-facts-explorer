# 🍬 Sugar Scout - Nutrition Facts Explorer

![App Preview](https://imgix.cosmicjs.com/f13d5880-b05a-11f0-81b9-c9cceef2f467-photo-1581636625402-29b2a704ef13-1761256508595.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive web application that helps users discover nutritional information and sugar content in popular foods and beverages. Built with Next.js 15 and powered by Cosmic CMS.

## ✨ Features

- 🔍 **Category-Based Browsing** - Filter by Beverages, Snacks, and Fast Food
- 📊 **Detailed Nutrition Labels** - Complete nutritional breakdown for each item
- 🍭 **Sugar Content Visualization** - See sugar amounts in both grams and teaspoon equivalents
- 🖼️ **Optimized Food Images** - Fast-loading images via imgix CDN
- 📱 **Fully Responsive** - Beautiful experience on mobile, tablet, and desktop
- 🎨 **Modern UI** - Clean, health-focused design with Tailwind CSS
- ⚡ **Fast Performance** - Server-side rendering with Next.js 15

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fa8a6092c9229c30fe24e3&clone_repository=68faa4f592c9229c30fe2c3f)

## 📝 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "how much sugar in a large mountain dew"

### Code Generation Prompt

> Based on the content model I created for "how much sugar in a large mountain dew", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Cosmic (https://www.cosmicjs.com)
- **Language**: TypeScript
- **Image Optimization**: imgix
- **Package Manager**: Bun

## 📋 Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account and bucket with the nutrition facts content model

## 🔧 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd sugar-scout
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. **Run the development server**
```bash
bun dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Nutrition Facts with Categories

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all nutrition facts with category relationships
const { objects: nutritionFacts } = await cosmic.objects
  .find({ type: 'nutrition-facts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Access category information
nutritionFacts.forEach(item => {
  console.log(item.metadata.food_name)
  console.log(item.metadata.category?.metadata?.category_name)
})
```

### Filtering by Category

```typescript
// Get only beverages
const { objects: beverages } = await cosmic.objects
  .find({ 
    type: 'nutrition-facts',
    'metadata.category': categoryId 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Food Categories

```typescript
const { objects: categories } = await cosmic.objects
  .find({ type: 'food-categories' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic as a headless CMS to manage all nutrition facts and food categories. The content model includes:

### Object Types

1. **Nutrition Facts** (`nutrition-facts`)
   - Food Name (text)
   - Serving Size (text)
   - Calories (number)
   - Sugar (number)
   - Protein (number)
   - Carbohydrates (number)
   - Total Fat (number)
   - Sodium (number)
   - Fiber (number)
   - Description (textarea)
   - Food Image (file)
   - Category (object relationship)

2. **Food Categories** (`food-categories`)
   - Category Name (text)
   - Description (textarea)

All content is fetched dynamically from your Cosmic bucket using the Cosmic SDK, with automatic relationship resolution for categories using the `depth` parameter.

## 🚢 Deployment Options

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy" button above
2. Connect your repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button
2. Connect your repository
3. Add environment variables in Netlify dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📖 Learn More

- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->