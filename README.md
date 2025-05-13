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
```bash
cypress-gh-actions-demo/
├── .github/
│   └── workflows/
│       └── cypress.yml         # GitHub Actions config
├── cypress/
│   └── e2e/
│       └── sample.cy.js        # Sample test case
│
│── cypress.config.js           # Cypress config
├── package.json
├── package-lock.json
└── README.md
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

Let me know if you'd like me to tailor the README to a specific test scenario, project goal, or CI environment.
```
