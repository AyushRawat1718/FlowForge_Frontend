import { useState } from "react";
import { BaseNode } from "./baseNode";

export const DatabaseNode = ({ id, data }) => {
  const [dbName, setDbName] = useState(data?.dbName || "");

  const [query, setQuery] = useState(data?.query || "");

  return (
    <BaseNode
      id={id}
      title="Database"
      inputs={[{ id: "query" }]}
      outputs={[{ id: "results" }]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
        <label>
          DB Name:
          <input
            type="text"
            value={dbName}
            onChange={(e) => setDbName(e.target.value)}
          />
        </label>

        <label>
          Query:
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={3}
          />
        </label>
      </div>
    </BaseNode>
  );
};
