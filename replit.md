# Surya Mitra Solar - Project Documentation

## Overview

Surya Mitra Solar is a modern, responsive single-page website for a solar energy company. The application showcases solar energy solutions with sections for services, projects, benefits, and contact information. Built as a marketing/landing page with a clean, professional aesthetic inspired by professional solar energy websites.

The project is a full-stack TypeScript application using React for the frontend and Express for the backend, though currently functioning primarily as a static website with minimal backend logic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for UI components
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for data fetching and state management
- **Tailwind CSS** for styling with custom design system

**UI Component Library:**
- **shadcn/ui** components built on Radix UI primitives
- Custom theme using "new-york" style variant
- Consistent design tokens for colors, spacing, and typography
- Comprehensive component library including buttons, cards, forms, dialogs, and more

**Design System:**
- Solar-themed color palette: Primary green (#2E7D32), Accent amber/orange (#FF6F00)
- Typography: Poppins font family from Google Fonts
- Responsive layout with mobile-first approach
- Consistent spacing using Tailwind's spacing scale

**Page Structure:**
- Single-page application with smooth scroll navigation
- Fixed header with navigation links
- Sections: Hero, Services, Why Choose Us, Projects, Contact CTA, Footer
- Mobile-responsive with hamburger menu

### Backend Architecture

**Technology Stack:**
- **Express.js** server with TypeScript
- **Node.js** runtime environment
- Separate development and production server configurations

**Server Configuration:**
- Development mode: Vite middleware integration for HMR (Hot Module Replacement)
- Production mode: Serves static built files from dist/public
- Custom logging middleware for request tracking
- JSON body parsing with raw body capture capability

**Storage Layer:**
- In-memory storage implementation (MemStorage class)
- Storage interface defined for user management (future database integration)
- Prepared for database migration with existing user schema

**API Structure:**
- Routes registered through `registerRoutes` function
- API endpoints prefixed with `/api`
- Currently minimal backend logic (prepared for future expansion)

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map data structure
- User schema defined with Drizzle ORM

**Database Schema (Prepared):**
- Users table with id (UUID), username, password fields
- Schema validation using Drizzle-Zod integration
- PostgreSQL dialect configured via Drizzle Kit

**Migration Strategy:**
- Drizzle Kit configured for PostgreSQL migrations
- Migration files output to `./migrations` directory
- Schema defined in `shared/schema.ts` for type sharing between client/server
- Database URL expected via environment variable

**Design Decision:** The application currently uses in-memory storage for simplicity but is architected to easily swap to PostgreSQL using Drizzle ORM. This allows rapid development while maintaining a clear migration path to persistent storage.

### External Dependencies

**Core Dependencies:**
- **@neondatabase/serverless**: PostgreSQL client for serverless environments
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-zod**: Schema validation integration
- **express**: Web server framework
- **react**: UI library
- **vite**: Build tool and dev server

**UI Component Libraries:**
- **@radix-ui/***: Unstyled, accessible UI primitives (20+ packages)
- **lucide-react**: Icon library
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Variant-based component styling
- **cmdk**: Command menu component

**Development Tools:**
- **TypeScript**: Type safety across the stack
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development enhancements

**External Services:**
- **Google Fonts**: Poppins font family
- **Font Awesome**: Icon library (via CDN)
- **PostgreSQL**: Database (configured but not actively used)

**Design Decision:** The application uses a comprehensive shadcn/ui component library built on Radix UI to ensure accessibility and consistency. This provides a professional, polished UI while maintaining flexibility for customization. The Replit plugins enhance the development experience with runtime error overlays and dev banners.