import axios from "axios";

const API_BASE = "http://localhost:8080";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_BASE}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.url;
  } catch (error) {
    console.error("File upload failed", error);
    return null;
  }
};
