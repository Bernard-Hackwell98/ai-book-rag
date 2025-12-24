<!--
SYNC IMPACT REPORT
- Version: 0.0.0 -> 1.0.0 (Initial Creation)
- Added Principles:
  - I. Spec-Driven Development
  - II. Technical Accuracy and Verifiability
  - III. Modular, Runnable, and Integrated Systems
  - IV. Standardized Tooling and Deployment
  - V. High-Quality, Reproducible Output
- Added Sections:
  - Content and AI Standards
  - Development Workflow
- Removed Sections: None
- Templates requiring updates:
  - [ ] .specify/templates/plan-template.md (verification pending)
  - [ ] .specify/templates/spec-template.md (verification pending)
  - [ ] .specify/templates/tasks-template.md (verification pending)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Determine the official project start or adoption date.
-->
# Unified AI-Native Book with Embedded RAG Chatbot Constitution

## Core Principles

### I. Spec-Driven Development
All content, features, and architecture MUST be generated from structured specifications. Spec-Kit Plus (`/sp.specify`, `/sp.plan`) is the authoritative tool for all planning. This ensures every component is deliberate, traceable, and aligned with project goals before implementation begins.

### II. Technical Accuracy and Verifiability
All technical content MUST be accurate and verifiable. Code examples must be runnable or clearly specified as conceptual. There shall be no hallucinated APIs, libraries, or fabricated references. All conceptual systems must be explicitly marked as such. Plagiarism is strictly forbidden.

### III. Modular, Runnable, and Integrated Systems
The project (book and chatbot) MUST be composed of clear, modular components with well-defined separation of concerns (e.g., Ingestion, Embedding, Retrieval, Generation). Code examples and system components must be runnable and testable. The final output must feature tight integration between the documentation and the AI systems.

### IV. Standardized Tooling and Deployment
The project will adhere to a standardized stack: Docusaurus for the book, FastAPI for the backend, Qdrant for vector storage, and Neon Serverless Postgres for metadata. Claude is the designated model for implementation and writing. The book is to be deployed via GitHub Pages, with clear instructions for all deployment processes.

### V. High-Quality, Reproducible Output
All outputs—whether documentation or software—MUST be clear, reproducible, and of high quality. The RAG chatbot must cite sources for its answers. The repository must be fully reproducible by a third party, with clear setup instructions and no committed secrets.

### 

## Content and AI Standards

Content must be written for an intermediate-to-advanced software engineer audience using Docusaurus. The RAG chatbot must answer questions using only the book's content or user-selected text, using OpenAI Agents/ChatKit SDKs. It must cite its sources in its responses.

## Development Workflow

All architecture and process flows MUST be defined in a specification before coding begins. The GitHub repository will be the single source of truth, containing the book source, backend code, and deployment instructions. All work must be reviewable and testable end-to-end.

## Governance

This constitution is the supreme governing document for this project. All development artifacts (specs, plans, code) and processes (reviews, commits) must comply with its principles. Amendments require a documented proposal, review, and a migration plan for affected components.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-12-19