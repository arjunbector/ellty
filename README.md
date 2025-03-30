# Ellty Checkbox Component

A modern Next.js application featuring a customizable checkbox list component with a clean, minimalist design.

## Features

- Responsive checkbox list component
- "Select All" functionality
- Custom styling with Tailwind CSS
- Built with TypeScript for type safety
- Montserrat font integration
- Modern Next.js 15.2 architecture

## Tech Stack

- **Framework:** Next.js 15.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Montserrat (Google Fonts)
- **UI Libraries:**
  - class-variance-authority
  - clsx
  - lucide-react
  - tailwind-merge

## Getting Started

### Prerequisites

- Node.js (version 18.18.0 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arjunbector/ellty
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with Montserrat font
│   ├── page.tsx         # Main page component
│   ├── options.tsx      # Checkbox list component
│   └── globals.css      # Global styles
├── components/
│   └── ui/
│       ├── button.tsx   # Reusable button component
│       └── select.tsx   # Reusable checkbox component
├── lib/
│   └── utils.ts         # Utility functions
└── public/
    └── ...             # Static assets
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Styling

The project uses Tailwind CSS with custom configuration:
- Custom color scheme
- Montserrat font integration
- Responsive design utilities