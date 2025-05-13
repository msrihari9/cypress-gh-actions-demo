# Cypress GitHub Actions Demo

This project demonstrates how to set up and run Cypress end-to-end (E2E) tests using GitHub Actions CI/CD.

## 🧪 What’s Included

- Cypress for E2E test automation
- Sample test visiting `https://example.cypress.io`
- GitHub Actions CI pipeline to run tests on every push

## 🚀 Quick Start

### 1. Clone this repository

```bash
git clone https://github.com/msrihari9/cypress-gh-actions-demo.git
cd cypress-gh-actions-demo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run tests locally
```bash
npx cypress open     # for interactive mode
# or
npx cypress run      # headless mode
```


## ⚙️ Project Structure
```perl
cypress-gh-actions-demo/
├── .github/
│   └── workflows/
│       └── cypress.yml          # GitHub Actions workflow file that defines CI steps
├── cypress/
│   ├── e2e/
│   │   └── sample.cy.js         # Sample Cypress test specification
│   └── support/
│       └── e2e.js               # Empty support file required by Cypress
├── cypress.config.js            # Cypress configuration (e.g. test file pattern, base URL)
├── package.json                 # Project metadata and list of dependencies/scripts
├── package-lock.json            # Automatically generated file to lock dependencies' versions
└── README.md                    # Project overview and setup instructions
```

---

## 📁 Project Structure Explained

- **`.github/workflows/cypress.yml`**  
  This file defines the CI pipeline using GitHub Actions. It installs dependencies and runs Cypress tests on each push to `main`.

- **`cypress/e2e/sample.cy.js`**  
  A basic test that visits [example.cypress.io](https://example.cypress.io), clicks a link, and verifies the URL.

- **`cypress/support/e2e.js`**  
  A required Cypress support file. Even if unused, Cypress expects it to exist unless explicitly disabled.

- **`cypress.config.js`**  
  Cypress configuration file — defines test locations, base URL, and other settings.

- **`package.json`**  
  Lists project dependencies (like Cypress), defines scripts, and includes metadata.

- **`package-lock.json`**  
  Locks exact versions of dependencies to ensure consistent installs.

- **`README.md`**  
  This documentation — explains project purpose, usage, structure, and CI setup.

---

## 🧪 Features

- ✅ Cypress E2E test setup
- ✅ Basic sample test against [example.cypress.io](https://example.cypress.io)
- ✅ GitHub Actions workflow to run tests on push to `main` branch

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/msrihari9/cypress-gh-actions-demo.git
cd cypress-gh-actions-demo
```

## 🤖 GitHub Actions
Every push to the main branch triggers the Cypress test run using GitHub Actions.

.github/workflows/cypress.yml
```bash
name: Run Cypress Tests

on:
  push:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        run: npx cypress run
```

## ✅ Sample Test
File: cypress/e2e/sample.cy.js
```js
describe('My First Cypress Test', () => {
  it('visits the example page', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });
});
```

## 📦 Requirements
```bash
Node.js ≥ 14
GitHub account
Basic knowledge of Cypress
```

## 📬 Feedback or Issues?

## 📝 License
MIT
```bash

---
```
