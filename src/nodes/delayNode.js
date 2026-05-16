import { useState } from "react";
import { BaseNode } from "./baseNode";

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1);

  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}>
      <div>
        <label>
          Delay (sec):
          <input
            type="number"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
