import { useMemo, useState } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  /*
    Extract variables from text
    Example:
    {{name}} -> name
  */
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const matches = [...currText.matchAll(regex)];

    return matches.map((match) => match[1]);
  }, [currText]);

  /*
    Convert variables into input handles
  */
  const inputHandles = variables.map((variable) => ({
    id: variable,
  }));

  /*
    Dynamic sizing
  */
  const nodeWidth = 280;

  const nodeHeight = Math.max(
    160,
    120 + currText.split("\n").length * 20 + variables.length * 10,
  );

  return (
    <BaseNode
      id={id}
      title="Text"
      width={nodeWidth}
      height={nodeHeight}
      inputs={inputHandles}
      outputs={[
        {
          id: "output",
        },
      ]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          overflow: "hidden",
          lineHeight: "1.5",
        }}>
        <label>Text</label>

        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            minHeight: "80px",
            resize: "none",
          }}
        />
      </div>
    </BaseNode>
  );
};
