# Design Guidelines for Surya Mitra Solar Website

## Design Approach
**Reference-Based Approach**: Inspired by professional solar energy websites, particularly the Zolar Solar Energy WordPress Theme aesthetic - clean, professional, modern with bold sections, clear visual hierarchy, and prominent CTAs.

## Core Design Elements

### Typography
- **Primary Font**: Poppins or Open Sans (Google Fonts)
- **Hierarchy**: 
  - Hero Headline: Bold, large (48-64px desktop, 32-40px mobile)
  - Section Headlines: Semi-bold (32-40px desktop, 24-28px mobile)
  - Subheadings: Medium weight (18-24px)
  - Body Text: Regular (16-18px)
  - CTAs: Semi-bold, uppercase

### Color Palette
**Solar-Themed Professional Colors:**
- **Primary Green**: #2E7D32 or #388E3C (trust, sustainability)
- **Accent Amber/Orange**: #FF6F00 or #FF8F00 (energy, warmth)
- **White**: #FFFFFF (clean backgrounds, text on dark)
- **Dark Gray**: #212121 or #333333 (text, footer)
- **Light Gray**: #F5F5F5 (section backgrounds for contrast)

### Layout System
- **Spacing**: Use consistent units - 16px (1rem), 24px (1.5rem), 32px (2rem), 48px (3rem), 64px (4rem)
- **Container**: Max-width 1200px for content, full-width for hero and sections
- **Section Padding**: 64-80px vertical (desktop), 40-48px (mobile)
- **Card Spacing**: 24-32px gaps between cards

## Page Structure & Components

### 1. Sticky Header
- Logo: "Surya Mitra Solar" as text (green primary color, bold)
- Navigation: Home, Services, Projects, Contact (horizontal, right-aligned)
- White background with subtle shadow on scroll
- Mobile: Hamburger menu

### 2. Hero Section
- **Full-width with background image** (https://www.suryaamitra.com/assets/images/solar_image.jpg)
- Dark overlay (rgba(0,0,0,0.5)) for text readability
- Content: Centered, white text
  - Headline: "Powering a Sustainable Future"
  - Subheading: "Reliable & Affordable Solar Energy Solutions"
  - Description paragraph
  - CTA Button: "Get Free Quote" (amber background with blur effect, white text, no hover effects needed)
- Height: 80-90vh

### 3. Services Section
- 4 service cards in responsive grid (2x2 on desktop, 1 column mobile)
- Each card: Icon (Font Awesome solar/energy related), title, brief description
- Services: Residential Solar, Commercial Solar, Installation & Maintenance, Consultation
- White cards with subtle shadow, green accent on hover

### 4. Why Choose Us Section
- Light gray background for visual separation
- 4 benefit cards with icons in horizontal grid (stack on mobile)
- Benefits: "10+ Years Experience", "Affordable EMI", "25-Year Warranty", "Certified Experts"
- Icons: Font Awesome (trophy, rupee, certificate, user-check)
- Centered layout with icons above text

### 5. Projects Gallery
- 2x2 grid of project images (all using solar image as placeholder)
- Responsive: 2 columns on tablet, 1 column on mobile
- Subtle hover effect (slight zoom or overlay)
- Equal height cards with image fill

### 6. Contact CTA Section
- Amber/orange background gradient
- Centered white text: "Ready to Go Solar?"
- CTA Button: "Schedule Free Assessment" (white background with blur, green text)
- Generous padding (80px vertical)

### 7. Footer
- Dark gray background (#212121), white text
- Three columns (stack on mobile):
  - Company info & logo
  - Contact: contact@suryaamitra.com | +91 XXXXXXXXXX
  - Social media icon placeholders (Facebook, Twitter, LinkedIn, Instagram)
- Copyright centered at bottom

## Component Library

### Buttons
- Primary CTA: Amber background, white text, rounded corners (6-8px), padding 14px 32px
- Secondary CTA: White background with blur, green text
- Smooth transitions (0.3s ease)

### Cards
- White background, border-radius 8-12px
- Box shadow: 0 2px 8px rgba(0,0,0,0.1)
- Hover: Lift effect (shadow increase, subtle translate up)
- Padding: 32px

### Icons
- Font Awesome CDN for all icons
- Size: 48-64px for feature icons
- Color: Primary green or amber depending on context

## Images
- **Hero Background**: Full-width solar panel installation image with dark overlay
- **Project Gallery**: 4 project showcase images (2x2 grid, equal dimensions)
- All images should be high-quality, professional solar installation photos

## Responsive Behavior
- Breakpoints: 768px (tablet), 1024px (desktop)
- Mobile-first approach
- Navigation collapses to hamburger menu below 768px
- Grid layouts stack to single column on mobile
- Hero text scales down proportionally
- Touch-friendly button sizes (min 44px height)

## Animation & Interactions
- Minimal, purposeful animations
- Smooth scroll for navigation links
- Hover effects on cards and buttons (transform: translateY(-4px))
- Sticky header shadow appears on scroll
- No distracting auto-playing elements