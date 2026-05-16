// toolbar.js

import { DraggableNode } from "./draggableNode";
import { useStore } from "./store";

export const PipelineToolbar = () => {
  const clearPipeline = useStore((state) => state.clearPipeline);

  return (
    <div
      style={{
        padding: "16px 20px",
        borderBottom: "1px solid #1E293B",
        backgroundColor: "#111827",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}>
      {/* TITLE */}
      <div
        style={{
          color: "#F8FAFC",
          fontSize: "18px",
          fontWeight: "600",
        }}>
        Pipeline Nodes
      </div>

      {/* NODE LIST */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="api" label="API" />
        <DraggableNode type="database" label="Database" />
        <DraggableNode type="email" label="Email" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="delay" label="Delay" />
      </div>

      {/* CLEAR BUTTON */}
      <button
        onClick={clearPipeline}
        style={{
          marginTop: "10px",
          backgroundColor: "#EF4444",
          color: "#F8FAFC",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          width: "fit-content",
        }}>
        Clear Pipeline
      </button>
    </div>
  );
};
