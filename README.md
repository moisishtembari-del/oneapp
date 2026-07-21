# OneApp Enterprise Monorepo

> Enterprise-grade monorepo for OneApp platform built with Next.js, NestJS, and TypeScript.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Frontend will be available at http://localhost:3000
# Backend will be available at http://localhost:3001
```

## 📦 Project Structure

```
oneapp/
├── apps/
│   ├── web           # Next.js 15 frontend application
│   └── api           # NestJS backend application
├── packages/
│   ├── ui            # Shared React components
│   ├── config        # Shared configuration files
│   ├── types         # Shared TypeScript types
│   ├── shared        # Shared utilities and helpers
│   ├── database      # Database schemas and migrations
│   └── utils         # Utility functions
├── docs/             # Project documentation
├── docker/           # Docker configuration
└── .github/          # GitHub workflows and templates
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Backend**: NestJS, TypeScript
- **Monorepo**: pnpm workspaces, Turborepo
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Documentation**: Markdown

## 📖 Documentation

- [Architecture](./docs/Architecture.md)
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/Database.md)
- [Roadmap](./docs/Roadmap.md)
- [Sprint 1.1 Details](./docs/Sprint-1.md)

## 🔄 Available Scripts

```bash
# Development
pnpm dev              # Start all development servers
pnpm dev:web          # Start frontend only
pnpm dev:api          # Start backend only

# Build
pnpm build            # Build all applications
pnpm build:web        # Build frontend only
pnpm build:api        # Build backend only

# Linting & Formatting
pnpm lint             # Run ESLint
pnpm format           # Run Prettier
pnpm format:check     # Check formatting

# Testing
pnpm test             # Run all tests
pnpm test:watch       # Run tests in watch mode

# Docker
docker-compose up -d  # Start all services with Docker
```

## 🤝 Contributing

Please follow the commit message conventions defined in our documentation and ensure all checks pass before submitting a PR.

## 📄 License

This project is proprietary and confidential.
