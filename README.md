# PreOwned Cars Website

A modern, responsive website for a pre-owned car dealership built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean and professional interface with smooth animations
- **Performance Optimized**: Fast loading times with Next.js
- **SEO Friendly**: Built-in SEO optimization
- **Contact Form**: Integrated contact form with validation
- **WhatsApp Integration**: Direct chat with the dealership
- **Car Listings**: Filterable and sortable car listings
- **Reviews Section**: Customer testimonials and ratings

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Form Handling**: React Hook Form
- **Animation**: Framer Motion
- **Linting**: ESLint
- **Code Formatting**: Prettier

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/preowned-cars.git
   cd preowned-cars
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
preowned-cars/
├── components/         # Reusable UI components
├── pages/              # Application pages and API routes
├── public/             # Static files
├── styles/             # Global styles and CSS modules
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore file
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── README.md           # Project documentation
└── tailwind.config.js  # Tailwind CSS configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key for location services
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp number for the contact button

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-docs) from the creators of Next.js.

### Netlify

You can also deploy to Netlify by connecting your GitHub repository and following the deployment instructions.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
