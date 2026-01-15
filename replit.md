# The Event™ - Invitation Website

## Overview

A fun, brutalist-styled event invitation website built with React and Express. The application displays event details with sarcastic captions, photo slideshows, and interactive elements like a "Devayan Jumpscare" feature. It uses a neo-brutalism design theme with bold colors (hot pink, acid green) and no rounded corners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom neo-brutalism theme
- **UI Components**: shadcn/ui component library (new-york style)
- **Animations**: Framer Motion for transitions and effects
- **Carousel**: Embla Carousel for image slideshows
- **Fonts**: Space Grotesk (display) and JetBrains Mono (body)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **Development**: tsx for TypeScript execution
- **Static Serving**: Express serves built frontend in production

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Current Storage**: In-memory storage (`MemStorage` class) as default
- **Database Ready**: Drizzle config expects `DATABASE_URL` environment variable

### Project Structure
```
client/           # React frontend application
  src/
    components/ui/  # shadcn/ui components
    pages/          # Route components
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
server/           # Express backend
  index.ts        # Entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface
  static.ts       # Static file serving
  vite.ts         # Vite dev server integration
shared/           # Shared types and schemas
  schema.ts       # Drizzle database schema
```

### Build System
- Development: Vite dev server with HMR proxied through Express
- Production: Vite builds to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Database migrations: `drizzle-kit push` command

## External Dependencies

### Database
- **PostgreSQL**: Expected via `DATABASE_URL` environment variable
- **Session Store**: connect-pg-simple for session persistence

### UI/Frontend Libraries
- Radix UI primitives (extensive component library)
- Lucide React icons
- class-variance-authority for component variants
- tailwind-merge and clsx for class management

### Development Tools
- Replit-specific Vite plugins (cartographer, dev-banner, runtime-error-modal)
- Custom meta images plugin for OpenGraph tags

### Optional Integrations (bundled but not actively used)
- OpenAI and Google Generative AI SDKs
- Stripe for payments
- Passport for authentication
- Nodemailer for emails