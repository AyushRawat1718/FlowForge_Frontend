import { useState } from "react";
import { BaseNode } from "./baseNode";

export const EmailNode = ({ id, data }) => {
  const [recipient, setRecipient] = useState(data?.recipient || "");

  const [subject, setSubject] = useState(data?.subject || "");

  return (
    <BaseNode
      id={id}
      title="Email"
      inputs={[{ id: "message" }]}
      outputs={[{ id: "status" }]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
        <label>
          To:
          <input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </label>

        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
