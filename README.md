# Monorepo Starter with Preact Signals Firebase

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/arthurgubaidullin/monorepo-starter-with-preact-signals-firebase)

## About

A modern starter template for monorepos with [Preact Signals](https://preactjs.com/), [Firebase Functions](https://firebase.google.com/docs/functions), blazing fast builds, and trunk-based development support.

## Features

- ⚡ **Blazing fast build** with [Turborepo](https://turbo.build/)
- 🛠 **Instant development setup**: Dev Containers support
- 🚀 **Front-end & Functions examples**: ready-to-use Vite + Preact Signals app and Firebase Functions
- 🌳 **Bounded contexts architecture** for large-scale projects
- 🏷 **Full TypeScript coverage** from backend to frontend
- 🔬 **Vitest** for built-in unit testing
- 🔄 **Preconfigured CI/CD** with GitHub Actions (build, test, lint)
- 🌿 **Ready for trunk-based development**
- 🔥 **Single command deploy** with `npm run deploy`

## Requirements

- **Node.js** v22.x
- **Docker** (for Dev Containers)
- **VS Code** (recommended)
- **Firebase CLI** (`npm i -g firebase-tools`, for manual deploy if needed)

## Repository Structure

```
(root)
 ├── <bounded-context>/
 │    ├── business-rules/       # Pure business logic, no side effects
 │    ├── http-interfaces/      # API interfaces (browser ↔️ server)
 │    ├── functions/            # Firebase Functions backend
 │    └── service/
 │         ├── in-browser/      # Services for browser
 │         └── in-server/       # Services for server
 ├── factory/
 │    ├── in-browser/           # Factories for browser
 │    └── in-server/            # Factories for server
 └── web-app/                   # Vite + Preact web application
```

## Quick Start

### 1. Launch in Dev Container

1. Install Docker and VS Code.
2. Click the **Dev Containers** badge above or [this link](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/arthurgubaidullin/monorepo-starter-with-preact-signals-firebase).
3. VS Code will set up everything automatically in an isolated environment.

### 2. Local Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Preview app and Firebase emulator:

   ```sh
   npm run preview
   ```

   Open in browser: [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

3. Development mode for frontend only:

   ```sh
   npm run dev -w web-app
   ```

## Monorepo Workflow

### Creating Packages

- Organize your code by creating new packages (contexts) as needed.
- Use the provided examples as a basis for your own modules.

### Unit Testing

- [Vitest](https://vitest.dev/) is preinstalled in all packages.
- Run tests for all packages:
  ```sh
  turbo test
  ```

### Build and Test and Lint

To run build, test, and lint for all packages:

```sh
turbo build test lint
```

Or use VS Code default build task.

## CI/CD and Deployment

- The repository includes a GitHub Actions workflow for build, test, lint, and Firebase deployment on every push to the `main` branch.
- To deploy manually:
  ```sh
  npm run deploy
  ```
  _(make sure to configure environment variables and run `firebase login` beforehand)_

## Package Changes

If you add, modify, or remove packages in the monorepo:

1. Re-install dependencies:
   ```sh
   npm install
   ```
2. Then:
   ```sh
   turbo build test lint
   ```

## Troubleshooting

If you encounter any issues, feel free to open an issue in the repository. The author will try to help if time permits.

## Sponsorship

Project sponsorship is welcome. Contact the author for details.

## License

[MIT](LICENSE)
