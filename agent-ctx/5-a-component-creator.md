# Task 5-a: Careers & Engagement Models Sections

## Work Completed

### 1. Careers Section (`/src/components/careers.tsx`)
- **Header**: Inline section header with decorative dash lines, "Careers" label, "Join Our Team" heading, descriptive subtext
- **Perks Bar**: 4 company benefits (Remote First, Competitive Pay, Health & Wellness, Learning Budget) with icons in blue circles
- **Job Listings**: 5 position cards in responsive grid (1/2/3 columns):
  1. Senior Full-Stack Developer - Remote
  2. Cloud Solutions Architect - Remote/Hybrid
  3. UI/UX Designer - Remote
  4. DevOps Engineer - Remote
  5. Project Manager - Hybrid
- Each card: title, location badge (MapPin), department tag, technology pills, "Apply Now" button with hover animation
- Hover: card lifts with shadow-xl shadow-blue-500/5
- AnimatedSection (stagger-children) + AnimatedItem (fade-up) for scroll animations
- Bottom CTA: resume email link to careers@codesquad.dev

### 2. Engagement Models Section (`/src/components/engagement-models.tsx`)
- **Header**: Inline section header with "Engagement Models" label, "How We Work Together" heading
- **3 Pricing Cards** in responsive grid (1/3 columns):
  1. Fixed Price Projects ($25K) - Target icon, 4 features
  2. Dedicated Teams ($15K/mo) - Featured with "Most Popular" badge, scale-[1.02], border-[#0066FF]/20, shadow-lg
  3. Time & Material ($120/hr) - Clock icon, outline button style
- Each card: gradient icon, description, feature checklist (CheckCircle), price, CTA button
- Hover: shadow-xl with smooth transition
- AnimatedSection (stagger) + AnimatedItem (fade-up)

### 3. Page Integration (`/src/app/page.tsx`)
- Added imports for both new components
- Placed between Team and CTASection sections
- EngagementModels → Careers → CTASection order

### Verification
- `bun run lint`: Zero ESLint errors
- Dev log: Successful compilations, 200 responses, no runtime errors
