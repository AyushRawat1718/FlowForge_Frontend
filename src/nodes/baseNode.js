import { Handle, Position } from "reactflow";
import { useStore } from "../store";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 260,
  height = 120,
}) => {
  const deleteNode = useStore((state) => state.deleteNode);

  return (
    <div
      style={{
        width,
        minHeight: height,
        border: "1px solid #2B384E",
        borderRadius: "16px",
        backgroundColor: "#1E293B",
        padding: "14px",
        position: "relative",
        color: "#F8FAFC",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}>
      {/* DELETE BUTTON */}
      <button
        onClick={() => deleteNode(id)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          color: "#94A3B8",
          cursor: "pointer",
          fontSize: "14px",
          transition: "0.2s ease",
        }}>
        ✕
      </button>

      {/* INPUT HANDLES */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            background: "#38BDF8",
            width: "10px",
            height: "10px",
            border: "2px solid #0F172A",
          }}
        />
      ))}

      {/* OUTPUT HANDLES */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            background: "#38BDF8",
            width: "10px",
            height: "10px",
            border: "2px solid #0F172A",
          }}
        />
      ))}

      {/* HEADER */}
      <div
        style={{
          fontWeight: "600",
          fontSize: "16px",
          paddingBottom: "8px",
          borderBottom: "1px solid #334155",
          color: "#38BDF8",
          paddingRight: "20px",
        }}>
        {title}
      </div>

      {/* NODE CONTENT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
        {children}
      </div>
    </div>
  );
};
