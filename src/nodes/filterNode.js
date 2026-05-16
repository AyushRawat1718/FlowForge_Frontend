import { useState } from "react";
import { BaseNode } from "./baseNode";

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "Equals");

  return (
    <BaseNode
      id={id}
      title="Filter"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "passed" }, { id: "failed" }]}>
      <div>
        <label>
          Condition:
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}>
            <option value="Equals">Equals</option>
            <option value="Contains">Contains</option>
            <option value="Greater">Greater Than</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
