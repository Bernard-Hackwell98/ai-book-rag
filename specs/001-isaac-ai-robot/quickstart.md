# Quickstart: Building the Module 3 Documentation

This guide provides the steps to build and view the Docusaurus documentation for Module 3 locally.

## Prerequisites

- Node.js (v20+) and npm installed.
- You are in the root directory of the `ai-book-rag` repository.

## Installation

1.  Navigate to the `docs` directory:
    ```bash
    cd docs
    ```

2.  Install the Docusaurus project dependencies:
    ```bash
    npm install
    ```

## Running the Development Server

1.  From the `docs` directory, run the following command:
    ```bash
    npm run start
    ```

2.  This will start a local development server. Most changes to the Markdown files will be reflected live without needing to restart the server. The site will typically be available at `http://localhost:3000`.

## Building the Static Site

1.  From the `docs` directory, run the following command:
    ```bash
    npm run build
    ```

2.  This command generates static HTML content into the `docs/build` directory, which can be served using any static content hosting service.
