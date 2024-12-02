import React from "react";
import { uploadFile } from "../api/mediaService";

function FileUploader({ onUpload }) {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = await uploadFile(file);
      if (url) {
        onUpload(url);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default FileUploader;
