// toolbar.js

import { DraggableNode } from "./draggableNode";
import { useStore } from "./store";
import { SubmitButton } from "./submit";

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
        gap: "18px",
      }}>
      {/* TOP ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        {/* TITLE */}
        <div
          style={{
            color: "#F8FAFC",
            fontSize: "20px",
            fontWeight: "700",
          }}>
          Pipeline Nodes
        </div>

        {/* ACTION BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}>
          {/* CLEAR BUTTON */}
          <button
            onClick={() => {
              const confirmed = window.confirm(
                "Are you sure you want to clear the entire pipeline?",
              );

              if (confirmed) {
                clearPipeline();
              }
            }}
            style={{
              backgroundColor: "#EF4444",
              color: "#F8FAFC",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}>
            Clear Pipeline
          </button>

          {/* SUBMIT BUTTON */}
          <SubmitButton />
        </div>
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
    </div>
  );
};
