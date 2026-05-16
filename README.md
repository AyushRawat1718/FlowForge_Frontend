# FlowForge Frontend

Frontend application for FlowForge — an AI workflow pipeline builder built with React and React Flow.

## Features

- Drag-and-drop pipeline builder
- Reusable node abstraction system
- Dynamic TextNode variable parsing
- Automatic handle generation
- DAG analysis integration
- Custom modal-based pipeline insights
- Node deletion and pipeline reset
- Responsive dark-themed UI

## Tech Stack

- React
- React Flow
- Zustand
- JavaScript
- CSS

## Core Functionality

### Node Abstraction

All nodes are built using a reusable `BaseNode` component that centralizes:

- Layout
- Styling
- Handle rendering
- Shared functionality

This allows new nodes to be created quickly with minimal repeated code.

---

### Dynamic TextNode

The TextNode supports:

- Auto-resizing text areas
- Variable parsing using double curly braces

Example:

```text id="jlmwg1"
{{input}}
{{username}}
```

Detected variables automatically generate input handles dynamically.

---

### Backend Integration

The frontend connects to a FastAPI backend to:

- Analyze pipelines
- Count nodes and edges
- Detect whether the graph is a Directed Acyclic Graph (DAG)

---

## Local Development

### Install Dependencies

```bash id="jlmwg2"
npm install
```

### Start Development Server

```bash id="jlmwg3"
npm start
```

Frontend runs at:

```text id="jlmwg4"
http://localhost:3000
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env id="jlmwg5"
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

---

## Deployment

Frontend is designed for deployment on:

- Vercel

Backend is deployed separately using FastAPI on Render.
