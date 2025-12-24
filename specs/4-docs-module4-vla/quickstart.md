# Quickstart: Building the Documentation

This guide provides the steps to build and view the Docusaurus documentation locally.

## Prerequisites

- Node.js (v20+) and npm installed.
- You are in the `docs` directory of this repository.

## Installation

1.  Navigate to the `docs` directory:
    ```bash
    cd docs
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Development Server

1.  From the `docs` directory, run the following command:
    ```bash
    npm run start
    ```

2.  This will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Building the Static Site

1.  From the `docs` directory, run the following command:
    ```bash
    npm run build
    ```

2.  This command generates static content into the `build` directory and can be served using any static contents hosting service.
