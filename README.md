---

# UI Automation using Cypress + Cucumber + BDD

This project is a solution for the UI automation challenge, using [Cypress](https://www.cypress.io/) for end-to-end web application testing.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Description

This project aims to automate UI tests for website. The tests cover critical scenarios to ensure the application's quality and functionality.

## Technologies Used

- [Cypress](https://www.cypress.io/): End-to-end testing framework.
- [Node.js](https://nodejs.org/): JavaScript runtime environment.

## Prerequisites

Before starting, make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can verify the installation by running:

```bash
node -v
npm -v
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GabrielllSilva/1Global_UI_Automation_Challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 1Global_UI_Automation_Challenge
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Tests

You can run the tests using one of the following approaches:

- **Cypress UI Mode**:

  ```bash
  npx cypress open
  ```

  This will open the Cypress Test Runner, where you can select and run tests individually.

- **Headless Mode**:

  ```bash
  npx cypress run
  ```

  Runs all tests in headless mode (without UI), ideal for CI/CD pipelines.

## Project Structure

The project follows the standard Cypress directory structure:

```
1Global_UI_Automation_Challenge/
├── cypress/
│   ├── fixtures/
│   │   └── example.json
│   ├── integration/
│   │   └── [test_name].spec.js
│   ├── plugins/
│   │   └── index.js
│   └── support/
│       ├── commands.js
│       └── index.js
├── .gitignore
├── cypress.json
└── package.json
```

- `cypress/fixtures/`: Contains JSON files with static test data.
- `cypress/integration/`: Contains the test files.
- `cypress/plugins/`: Files to configure or extend Cypress functionality.
- `cypress/support/`: Support files, such as custom commands and global configurations.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---
