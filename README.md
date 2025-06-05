# ilib-mono

This repository is a monorepo for the [iLib-js project](https://github.com/iLib-js).
It aims to contain all the packages that are part of the iLib-js, even though every package is published to npm as a separate package.

The monorepo is managed using pnpm workspaces and Turborepo.

All packages are placed in the `packages/` directory.
Each package has its own `README.md` and `package.json`, which are located in the package root directory.


## Table of Contents
- [Project Status](#project-status)
- [Project Structure](#project-structure)
- [Targeted Node.js Versions](#targeted-nodejs-versions)
- [Usage](#usage)
- [Setup](#setup)
- [Contributing](#contributing)
- [Publishing](#publishing)
- [License](#license)
- [Documentation](#documentation)


## Project Status
This project is currently in development.

iLib-js packages are now being migrated to this monorepo.
All the packages that are moved to the monorepo are marked as 'archived' in their original GitHub repositories.


## Project Structure
The project is structured as follows:
- `packages/` - Contains all the packages that are part of the monorepo. Each package is a separate directory containing its own `package.json` file. Each package is published to npm as a separate package.
- `package.json` - Contains the root project configuration.
- `pnpm-workspace.yaml` - Contains the configuration for pnpm workspaces.
- `turbo.json` - Contains the configuration for Turborepo.
- `pnpm-lock.yaml` - Contains the lockfile for pnpm.


## Targeted Node.js Versions
`ilib-mono` aim to target Node.js versions >=12.0.0 when building packages for npm registry.


## Usage
To use packages in this monorepo, import them as any other npm package.
For example, to use the `ilib-common` package from within any other package in the `/packages` directory, import it like this:
```javascript
import { JSUtils, Utils, Path } from 'ilib-common';
```


## Setup
For detailed setup instructions to get the project running on local machine, please refer to the [SETUP.md](./SETUP.md) file.


## Contributing
Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to contribute to this project.


## Publishing
For publishing instructions, please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file.


## License
This project is licensed under the Apache 2.0 License. See the [LICENSE](./LICENSE) file for details.


## Documentation

This monorepo uses a centralized documentation approach with GitHub Pages. Documentation is automatically generated from:

1. JSDoc comments in source code
2. Markdown files in each package

### Documentation Structure

The documentation is organized as follows:
- All documentation is generated to the `docs/` directory at the root level
- Each package's documentation is available under its own subdirectory (e.g., `/docs/ilib-common/`)
- Documentation is automatically:
  - Regenerated on each commit via a pre-commit hook
  - Published to GitHub Pages when changes are pushed to the main branch

### Configuration

We use a centralized JSDoc configuration (`jsdoc.config.js` in the root directory) that:
- Handles all packages uniformly
- Enables markdown support
- Provides consistent styling and navigation
- Uses the docdash theme for a clean, modern look

### Local Development

To work with documentation locally:

```bash
# Generate documentation
pnpm run doc         # Generates documentation for all packages

# Clean and regenerate documentation
pnpm run doc:full    # Cleans docs directory and regenerates all documentation

# Clean only
pnpm run doc:clean   # Removes generated documentation
```

#### Available Documentation Scripts

The following npm scripts are available for documentation management:

- `doc`: Generates documentation using the root config
- `doc:clean`: Cleans the docs directory
- `doc:full`: Full documentation regeneration (clean + generate)
- `clean:jsdoc`: Removes individual jsdoc.json files from packages

### Documentation Publishing

Documentation is automatically published to GitHub Pages when changes are pushed to the main branch. The generated documentation is committed to the repository to ensure versioning and availability.

Note: Package documentation is not included in the npm packages to keep them lightweight. Instead, all documentation is available on our GitHub Pages site.
