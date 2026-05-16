import { useState } from "react";
import { BaseNode } from "./baseNode";

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "");

  const [method, setMethod] = useState(data?.method || "GET");

  return (
    <BaseNode
      id={id}
      title="API"
      inputs={[
        {
          id: "request",
        },
      ]}
      outputs={[
        {
          id: "response",
        },
      ]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>

        <label>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
