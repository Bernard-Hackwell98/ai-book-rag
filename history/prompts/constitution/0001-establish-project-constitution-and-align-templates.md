<!-- ---
id: 0001
title: Establish Project Constitution and Align Templates
stage: constitution
date: 2025-12-19
surface: agent
model: gemini-cli-agent
feature: none
branch: master
user: Bernard-Hackwell98
command: /sp.constitution
labels: ["constitution", "governance", "templates"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/spec-template.md
 - .specify/templates/tasks-template.md
 - history/prompts/constitution/0001-establish-project-constitution-and-align-templates.md
tests:
 - none
--- -->

## Prompt

/sp.constitution

Project:
Unified AI-Native Book with Embedded RAG Chatbot

Scope:
Create a technical book using Docusaurus, written via Claude Code and Spec-Kit Plus,
deployed on GitHub Pages, with an integrated Retrieval-Augmented Generation (RAG)
chatbot capable of answering questions about the book and user-selected text.

Core Principles:
- Spec-driven authorship (all content generated from structured specs)
- Technical accuracy and traceability
- Clarity for developers and AI engineers
- Reproducibility of content and system architecture
- Tight integration between documentation and AI systems

Content Standards (Book):
- Written using Docusaurus (Markdown, sidebar-structured)
- Clear modular chapters and sections
- Technically accurate explanations
- Code examples must be runnable or clearly specified
- No hallucinated APIs, libraries, or architectures
- Writing level: intermediate–advanced software engineers

AI & RAG Standards (Chatbot):
- Uses OpenAI Agents / ChatKit SDKs
- Backend implemented with FastAPI
- Vector storage: Qdrant Cloud (Free Tier)
- Metadata + relational storage: Neon Serverless Postgres
- RAG must:
  - Answer questions using book content only
  - Support answering based solely on user-selected text
  - Cite the source section or page when responding
- Clear separation of:
  - Ingestion
  - Embedding
  - Retrieval
  - Generation

Spec & Tooling Constraints:
- Spec-Kit Plus used for all structured planning (/sp.specify, /sp.constitution)
- Claude Code used for implementation and writing
- All architecture and flows must be spec-defined before coding
- GitHub repository must contain:
  - Book source
  - Backend code
  - Deployment instructions

Deployment Standards:
- Book deployed via GitHub Pages
- RAG API deployed separately (documented setup)
- Environment variables documented (no secrets committed)
- Clear local + production setup instructions

Quality & Verification:
- No plagiarism
- No fabricated references or tools
- All technical imagined systems must be explicitly marked as conceptual
- End-to-end flow must be reviewable and testable

Success Criteria:
- Book builds and deploys successfully on GitHub Pages
- RAG chatbot answers questions accurately from book content
- Selected-text-only question answering works correctly
- Repository is reproducible by a third party
- Spec-to-implementation alignment is clear and complete

## Response snapshot

I have successfully created the project constitution and aligned the relevant project templates.

## Outcome

- ✅ Impact: A new project constitution (`constitution.md`) was created from the user's detailed input. Key templates (`plan-template.md`, `spec-template.md`, `tasks-template.md`) were updated to enforce the new constitutional principles, ensuring a consistent, spec-driven workflow across the project.
- 🧪 Tests: none
- 📁 Files: 
  - `.specify/memory/constitution.md` (Created)
  - `.specify/templates/plan-template.md` (Modified)
  - `.specify/templates/spec-template.md` (Modified)
  - `.specify/templates/tasks-template.md` (Modified)
  - `history/prompts/constitution/0001-establish-project-constitution-and-align-templates.md` (Created)
- 🔁 Next prompts: `/sp.specify "Feature Name"` to start a new feature specification.
- 🧠 Reflection: The process requires synthesizing high-level principles into a formal document and then propagating those principles into developer workflow templates. This ensures governance is not just a document but an active part of the development process. The fallback for the PHR script was necessary.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script referenced in command docs does not exist; the path points to a `bash` directory while scripts are in `powershell`. Had to use the documented fallback manual creation method.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Correct the script path and provide the `create-phr.ps1` script to automate PHR creation.
