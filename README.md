# Lab4 - Next.js Interactive Components

Live Demo: [https://hjoseph777.github.io/my-event-nextjs-lab4/](https://hjoseph777.github.io/my-event-nextjs-lab4/)

This project demonstrates various interactive components and state management techniques in Next.js, implementing five key requirements:

## Project Requirements

1. **Button Click Event** - Toggle visibility of content
2. **Form Submission** - Form with validation and feedback
3. **Conditional Rendering** - Filtering list items based on status
4. **Hover Interaction** - Dynamic styling on hover
5. **Client-side State Management** - Various state management implementations

## Project Structure

### Components (`/src/app/components`)

Contains reusable UI components:
- `ToggleContent.tsx` - Button click event demonstration
- `ValidationForm.tsx` - Form handling with validation
- `FilteredList.tsx` - Conditional rendering implementation
- `HoverCard.tsx` - Hover interaction example
- `ClientWrapper.tsx` - Client-side rendering wrapper

View code: [https://github.com/hjoseph777/my-event-nextjs-lab4/tree/main/src/app/components](https://github.com/hjoseph777/my-event-nextjs-lab4/tree/main/src/app/components)

### Pages (`/src/app`)

Main application pages and layouts:
- `page.tsx` - Main page with all requirements implemented
- `layout.tsx` - Root layout with providers
- `providers.tsx` - Client-side provider setup

View code: [https://github.com/hjoseph777/my-event-nextjs-lab4/tree/main/src/app](https://github.com/hjoseph777/my-event-nextjs-lab4/tree/main/src/app)

### Styles (`/src/app/globals.css`)

Manages application styling:
- Global styles and theme configuration
- Tailwind CSS integration
- Dark mode support

View code: [https://github.com/hjoseph777/my-event-nextjs-lab4/blob/main/src/app/globals.css](https://github.com/hjoseph777/my-event-nextjs-lab4/blob/main/src/app/globals.css)

## Technologies Used

- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- GitHub Pages for deployment

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/hjoseph777/my-event-nextjs-lab4.git
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build and deploy:
```bash
npm run build
```

## Features

- **Interactive Components**: Multiple examples of user interaction handling
- **Form Validation**: Client-side validation with error messaging
- **Dynamic Filtering**: List filtering with active/inactive states
- **Hover Effects**: Smooth transitions and hover state management
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS

## Deployment

The project is configured for GitHub Pages deployment with:
- Static export configuration
- Proper base path and asset prefixing
- Image optimization settings

View deployment configuration: [next.config.js](https://github.com/hjoseph777/my-event-nextjs-lab4/blob/main/next.config.js)
