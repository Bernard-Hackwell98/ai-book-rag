# Quickstart Guide: Module 2 – The Digital Twin (Gazebo & Unity) Documentation

This guide provides instructions for contributors who wish to work on the "Module 2 – The Digital Twin (Gazebo & Unity)" documentation within the existing Docusaurus project.

## 1. Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: Version 20 or higher.
*   **npm** (Node Package Manager) or **Yarn**: npm comes bundled with Node.js.

## 2. Setting up the Development Environment

1.  **Clone the Repository**:
    If you haven't already, clone the main project repository:
    ```bash
    git clone [repository-url]
    cd ai-book-rag # Or the root directory of your project
    ```

2.  **Navigate to the Docusaurus Project**:
    The documentation for Module 2 resides within the main `docs` Docusaurus project.
    ```bash
    cd docs
    ```

3.  **Install Dependencies**:
    Install all required Node.js packages for the Docusaurus project:
    ```bash
    npm install
    # or
    yarn install
    ```

## 3. Running the Local Development Server

To see your changes in real-time as you edit the documentation:

1.  **Start the Docusaurus development server**:
    ```bash
    npm run start
    # or
    yarn start
    ```
    This will open a new browser tab with the local documentation site, typically at `http://localhost:3000`. The browser will automatically refresh as you make changes to the Markdown files.

## 4. Locating and Editing Module 2 Content

The content for "Module 2 – The Digital Twin" is located at:
`docs/docs/module2/`

Within this directory, you will find:
*   `chapter1-physics-simulation-gazebo.md`
*   `chapter2-high-fidelity-simulation-unity.md`
*   `chapter3-sensor-simulation.md`
*   `_category_.json` (for sidebar metadata)

You can edit these Markdown (`.md`) files directly using your preferred text editor.

## 5. Adding New Content or Pages

To add a new page to a chapter:

1.  Create a new Markdown (`.md`) or MDX (`.mdx`) file within the relevant chapter's directory (e.g., `docs/docs/module2/chapter1-physics-simulation-gazebo/new-topic.md`).
2.  Update the `sidebars.js` file located at `docs/sidebars.js` to include your new page in the appropriate chapter's section. You may need to adjust the `_category_.json` in the chapter folder if you are using auto-generated sidebar categories with specific `items` configurations.

## 6. Building the Documentation Site

To generate a static build of the documentation (e.g., for deployment):

```bash
cd docs
npm run build
# or
yarn build
```
The static files will be generated in the `docs/build` directory.

## 7. Contributing Guidelines

*   Ensure your Markdown is clean, well-formatted, and adheres to the project's style guide.
*   Use bullet points for readability wherever possible.
*   Avoid unnecessary "fluff" and keep content concise and direct.
*   Test your changes locally using `npm run start` before committing.
*   Follow standard Git workflow (branch, commit, pull request).