# FlowForge Frontend

`FlowForge` is an interactive AI workflow pipeline builder built using React, React Flow, Zustand, and integrated with a FastAPI backend. The application allows users to visually create and manage pipelines using drag-and-drop nodes connected through dynamic edges.

---

# Project Overview

The application provides a node-based visual workflow editor where users can:

* Drag and drop nodes onto a canvas
* Connect nodes using handles
* Dynamically create workflows
* Define variables inside text nodes
* Analyze pipelines using backend graph processing
* Validate whether a workflow forms a Directed Acyclic Graph (DAG)

The frontend communicates with a FastAPI backend which processes the graph structure and returns:

* Total number of nodes
* Total number of edges
* DAG validation result

---

# Key Features

## Reusable Node Abstraction

A reusable `BaseNode` component was created to eliminate duplicated logic between nodes.

The abstraction centralizes:

* Shared layout
* Styling
* Handle rendering
* Dynamic input/output configuration
* Node structure management

This allows new nodes to be created efficiently with minimal repeated code.

---

## Dynamic TextNode Logic

The TextNode includes:

* Auto-resizing text area
* Dynamic variable parsing
* Automatic input handle generation

Variables wrapped inside double curly braces are detected dynamically.

Example:

```text id="2twm4m"
{{input}}
{{username}}
```

Each detected variable automatically creates a corresponding input handle on the node.

---

## Backend Graph Analysis

The frontend integrates with a FastAPI backend that:

* Receives nodes and edges
* Counts graph components
* Detects graph cycles
* Validates DAG structure

The analysis results are displayed through a custom modal interface.

---

## Additional Enhancements

* Modern dark-themed UI
* Responsive workflow toolbar
* Node deletion functionality
* Pipeline reset functionality
* Action confirmations
* Custom modal-based analysis results
* Deployed frontend and backend

---

# Tech Stack

* React
* React Flow
* Zustand (State Management)
* JavaScript
* CSS

---

# Project Structure

```bash id="2zy7z7"
src/
│
├── nodes/
│   ├── BaseNode.js
│   ├── inputNode.js
│   ├── outputNode.js
│   ├── llmNode.js
│   ├── textNode.js
│   └── additional custom nodes
│
├── toolbar.js
├── ui.js
├── store.js
├── submit.js
└── App.js
```

---

# Running the Project Locally

## 1. Clone Repository

```bash id="8np4bg"
git clone https://github.com/AyushRawat1718/FlowForge_Frontend
```

---

## 2. Install Dependencies

```bash id="n10m6f"
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env id="7mw5uv"
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

---

## 4. Start Development Server

```bash id="u6j2s2"
npm start
```

Application runs at:

```bash id="bgphx2"
http://localhost:3000
```

---

# Backend Requirement

The frontend requires the FastAPI backend server to be running for pipeline analysis functionality.

---

# Live Deployment

Frontend:
https://flow-forge-1718.vercel.app

---

# Developed By

Ayush Rawat
