import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { projectAPI, userAPI } from "../utils/api";
import { Plus, Edit, Trash2, ExternalLink, Share2, Check, Copy } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const { user, checkAuth } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [togglingWork, setTogglingWork] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (user) {
      setIsAvailable(user.isAvailableForWork || false);
    }
  }, [user]);

  const fetchProjects = async () => {
    try {
      const response = await projectAPI.getMyProjects();
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (projectId) => {
    setProjectToDelete(projectId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;

    try {
      setDeleting(true);
      await projectAPI.deleteProject(projectToDelete);
      setProjects(projects.filter((p) => p._id !== projectToDelete));
      setShowDeleteModal(false);
      setProjectToDelete(null);
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project");
    } finally {
      setDeleting(false);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProjectToDelete(null);
  };

  const handleShareProfile = async () => {
    const profileUrl = `${window.location.origin}/profile/${user?.id}`;
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = profileUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleToggleAvailability = async () => {
    if (togglingWork) return;
    
    const newValue = !isAvailable;
    setIsAvailable(newValue); // Optimistic update
    
    try {
      setTogglingWork(true);
      await userAPI.updateProfile({
        isAvailableForWork: newValue,
      });
      await checkAuth();
    } catch (error) {
      console.error("Error toggling availability:", error);
      alert("Failed to update availability status");
      setIsAvailable(!newValue); // Revert on error
    } finally {
      setTogglingWork(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}!</p>
            <div 
              onClick={handleToggleAvailability}
              className={`mt-3 flex items-center gap-3 cursor-pointer select-none ${togglingWork ? 'pointer-events-none' : ''}`}
            >
              <div className="relative">
                <div className={`block h-8 w-14 rounded-full transition-colors ${
                  isAvailable ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <div className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ${
                  isAvailable ? 'translate-x-6' : ''
                } ${togglingWork ? 'opacity-50' : ''}`}></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Available for work
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/dashboard/settings"
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all"
            >
              Edit Profile
            </Link>
            <Link
              to="/dashboard/project/new"
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Project
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-600 text-sm mb-1">Total Projects</p>
            <p className="text-3xl font-bold text-gray-900">
              {projects.length}
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-600 text-sm mb-1">Featured</p>
            <p className="text-3xl font-bold text-gray-900">
              {projects.filter((p) => p.isFeatured).length}
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-600 text-sm mb-1">Public Profile</p>
            <div className="flex items-center gap-3 mt-2">
              <Link
                to={`/profile/${user?.id}`}
                className="text-gray-900 hover:text-gray-700 flex items-center gap-2 font-semibold"
              >
                View Profile
                <ExternalLink className="w-4 h-4" />
              </Link>
              <button
                onClick={handleShareProfile}
                className="text-gray-600 hover:text-gray-900 transition-colors hover:cursor-pointer"
                title="Copy profile link"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Projects
          </h2>

          {projects.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 mb-4">No projects yet</p>
              <Link
                to="/dashboard/project/new"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                <Plus className="w-5 h-5" />
                Create Your First Project
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => {
                // Use thumbnailIndex if available, fallback to first image
                const thumbnailUrl = project.images[project.thumbnailIndex || 0]?.url || project.images[0]?.url;
                
                return (
                <div
                  key={project._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      <Link
                        to={`/dashboard/project/edit/${project._id}`}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2 hover:cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Delete Project?
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this project? This action cannot be undone and all project data will be permanently removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelDelete}
                disabled={deleting}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all disabled:opacity-50 hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:cursor-pointer"
              >
                {deleting ? (
                  "Deleting..."
                ) : (
                  <>
                    <Trash2 className="w-5 h-5" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;