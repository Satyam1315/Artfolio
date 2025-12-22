import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authAPI = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  logout: () => api.post("/auth/logout"),
  getMe: () => api.get("/auth/me"),
};

export const userAPI = {
  getUser: (userId) => api.get(`/user/${userId}`),
  updateProfile: (data) => api.put("/user/profile", data),
  uploadProfileImage: (formData) =>
    api.post("/user/profile-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  deleteProfile: () => api.delete("/user/profile"),
};

export const projectAPI = {
  getAllProjects: (params) => api.get("/projects/explore", { params }),
  getUserProjects: (userId) => api.get(`/projects/user/${userId}`),
  getMyProjects: () => api.get("/projects"),
  getProject: (projectId) => api.get(`/projects/${projectId}`),
  createProject: (formData) =>
    api.post("/projects", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  updateProject: (projectId, formData) =>
    api.put(`/projects/${projectId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  deleteProject: (projectId) => api.delete(`/projects/${projectId}`),
};

export default api;
