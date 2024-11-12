# Chann3l AI-Powered Writing Assistant

## Overview
Chann3l is an AI-powered web assistant that helps users draft, proofread, and edit documents. The assistant leverages LangChain’s ChatGroq model for suggestions and style-based improvements. To deploy the model to the web, we integrate **LangServe** with **FastAPI** as LangChain alone does not support direct deployment.

## Project Components
- **Frontend**: A React-based text editor for drafting, AI-assisted editing, and real-time collaboration.
- **Backend**: A FastAPI server with LangServe, connected to ChatGroq for real-time suggestions.
- **Database**: Storage for articles and document histories (MongoDB or PostgreSQL).
- **Fine-Tuning Pipeline**: Custom model fine-tuning for improved proofreading and style suggestions.

## Work in Progress

### 1. LLM Deployment with LangServe
   - **Goal**: Deploy ChatGroq model on the web via LangServe for production-ready LLM capabilities.
   - **Status**: In progress, high priority.

### 2. Frontend Text Editor
   - **Goal**: Create a React-based rich-text editor for drafting and AI-assisted editing.
   - **Status**: Planned, medium priority.

### 3. Article Storage Backend
   - **Goal**: Implement storage for drafts and document versions with MongoDB/PostgreSQL.
   - **Status**: Planned, low priority.

### 4. Model Fine-Tuning for Style
   - **Goal**: Set up a fine-tuning pipeline to adapt suggestions to specific writing styles.
   - **Status**: Conceptual phase, lower priority initially.

## Priority Summary

| Task                       | Priority          | Description                                               |
|----------------------------|-------------------|-----------------------------------------------------------|
| **LLM Deployment**         | High              | Serve ChatGroq model via LangServe and FastAPI            |
| **Frontend Editor**        | Medium            | Build AI-powered rich-text editor                         |
| **Backend Storage**        | Medium            | Set up database for article storage                       |
| **Fine-Tuning Pipeline**   | Low, then High    | Customize model for proofreading and style adaptation     |

## Getting Started

1. **Environment Setup**: Create a `.env` file with your API key:
   ```plaintext
   GROQ_API_KEY=your_api_key_here
