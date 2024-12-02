import React, { useState } from "react";
import FileUploader from "./FileUploader";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");

  const handleImageUpload = (url) => {
    setMarkdown((prev) => `${prev}\n![Image](${url})`);
  };

  return (
    <div>
      <FileUploader onUpload={handleImageUpload} />
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        rows={10}
        cols={50}
      />
      <h3>Preview:</h3>
      <div>{markdown}</div>
    </div>
  );
}

export default MarkdownEditor;
