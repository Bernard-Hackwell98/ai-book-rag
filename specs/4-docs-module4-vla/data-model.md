# Data Model: Module 4 – Vision-Language-Action (VLA)

This document outlines the key conceptual entities that are the subject of the Module 4 documentation.

## Conceptual Entities

### 1. Module 4: Vision-Language-Action (VLA)
- **Description**: The top-level container for the documentation. It represents the complete set of knowledge for this module.
- **Attributes**:
    - `title`: "Vision-Language-Action (VLA)"
    - `chapters`: A collection of three chapter entities.

### 2. Chapter
- **Description**: A distinct section of the module that covers a major topic.
- **Attributes**:
    - `title`: The title of the chapter (e.g., "Voice to Intent").
    - `topics`: A list of specific concepts covered within the chapter.

### 3. VLA (Vision-Language-Action)
- **Description**: The core concept of the module. It represents the paradigm of integrating perception (vision), reasoning (language), and execution (action) in a robotic system.
- **Relationships**: It is the central theme that connects all chapters and topics.

### 4. LLM (Large Language Model)
- **Description**: A key technology used as the "cognitive planner" in the VLA architecture.
- **Relationships**: Discussed in detail in Chapter 2. It takes intents (from Chapter 1) and produces action plans.

### 5. Whisper
- **Description**: A key technology used for speech-to-text conversion.
- **Relationships**: Discussed in detail in Chapter 1 as the entry point for voice commands into the VLA system.
