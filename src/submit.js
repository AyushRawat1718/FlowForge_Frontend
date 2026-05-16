import { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/pipelines/parse`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        },
      );

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);

      alert("Failed to analyze pipeline.");
    }
  };

  return (
    <>
      {/* SUBMIT BUTTON */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}>
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#38BDF8",
            color: "#0F172A",
            border: "none",
            padding: "12px 24px",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(56,189,248,0.3)",
          }}>
          Submit Pipeline
        </button>
      </div>

      {/* RESULT MODAL */}
      {result && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}>
          <div
            style={{
              backgroundColor: "#1E293B",
              padding: "28px",
              borderRadius: "16px",
              minWidth: "320px",
              color: "#F8FAFC",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              border: "1px solid #334155",
            }}>
            <h2
              style={{
                marginTop: 0,
                color: "#38BDF8",
              }}>
              Pipeline Analysis
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "20px",
                fontSize: "15px",
              }}>
              <div>
                <strong>Nodes:</strong> {result.num_nodes}
              </div>

              <div>
                <strong>Edges:</strong> {result.num_edges}
              </div>

              <div>
                <strong>Is DAG:</strong> {result.is_dag ? "Yes" : "No"}
              </div>
            </div>

            <button
              onClick={() => setResult(null)}
              style={{
                marginTop: "24px",
                width: "100%",
                backgroundColor: "#38BDF8",
                color: "#0F172A",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.2s ease",
              }}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
