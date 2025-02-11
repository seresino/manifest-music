# Manifest Music

A modern web application built with Next.js and Sanity CMS for managing and showcasing music content.

## 🛠️ Tech Stack

- **Frontend**: Next.js
- **CMS**: Sanity Studio
- **Package Manager**: pnpm
- **Architecture**: Monorepo (using pnpm workspaces)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd manifest-music
   ```

2. **Install dependencies**

   ```bash
   pnpm i-all
   ```

   This will install dependencies for both the Next.js frontend and Sanity Studio.

## 🏃‍♂️ Development

You can run the development servers in different ways:

- **Run both Next.js and Sanity Studio**

  ```bash
  pnpm dev
  ```

- **Run Next.js frontend only**

  ```bash
  pnpm dev:next
  ```

- **Run Sanity Studio only**
  ```bash
  pnpm dev:studio
  ```

The applications will be available at:

- Next.js frontend: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3333](http://localhost:3333)

## 📁 Project Structure

```
manifest-music/
├── nextjs/           # Next.js frontend application
├── studio/          # Sanity Studio CMS
└── package.json     # Root package.json for workspace management
```

## 📝 Available Scripts

- `pnpm dev` - Run both Next.js and Sanity Studio in development mode
- `pnpm dev:next` - Run only Next.js in development mode
- `pnpm dev:studio` - Run only Sanity Studio in development mode
- `pnpm i-all` - Install dependencies for all workspaces

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## 📄 License

[Add your license information here]
