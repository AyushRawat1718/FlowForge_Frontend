import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}>
      <div>This is a LLM node.</div>
    </BaseNode>
  );
};
