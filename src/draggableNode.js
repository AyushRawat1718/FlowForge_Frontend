// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "90px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "12px",
        backgroundColor: "#1E293B",
        border: "1px solid #334155",
        color: "#F8FAFC",
        fontWeight: "500",
        transition: "0.2s ease",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
      draggable>
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
