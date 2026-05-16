import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F172A",
      }}>
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
