# VR Tech Labs - Corporate Website

A premium, high-performance corporate website for VR Tech Labs, built with Next.js 16, Tailwind CSS, and Framer Motion. Featuring an interactive AI chatbot, professional service showcases, and automated lead generation.

## 🚀 Key Features

- **Interactive AI Chatbot**: Intelligent assistant powered by Google Gemini AI with a standalone knowledge base.
- **Service Showcases**: Dedicated sections for Web Development, App Development, and Content Promotion.
- **Dynamic Projects Page**: Premium "browser mockup" project display with interactive hover effects.
- **Lead Generation**: Integrated Contact and Careers forms powered by EmailJS.
- **Tech Stack**:
  - **Framework**: Next.js 16 (App Router)
  - **Styling**: Tailwind CSS (Premium Design System)
  - **Animations**: Framer Motion
  - **Integrations**: Google Gemini API, EmailJS

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- NPM / PNPM / Yarn

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI components (Navbar, Footer, Chatbot, etc.).
- `src/lib`: Logic and service integrations (Gemini AI).
- `src/data`: Static content and knowledge bases.
- `public`: Optimized assets and site icons.

---
*Created with Excellence by the VR Tech Labs Team.*

