import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projectAPI } from "../utils/api";
import {
  Calendar,
  ExternalLink,
  User,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchProject();
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const response = await projectAPI.getProject(projectId);
      setProject(response.data);
    } catch (error) {
      console.error("Error fetching project:", error);
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Project not found</p>
          <Link to="/explore" className="text-gray-900 hover:underline">
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Explore
        </Link>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Image Gallery */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={project.images[currentImageIndex]?.url}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 text-white rounded-full text-sm">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {project.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? "border-gray-900 scale-105"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Project Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Title & Category */}
              <div>
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 mb-3">
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1).replace("-", " ")}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
              </div>

              {/* Artist Info */}
              <Link
                to={`/profile/${project.user._id}`}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                {project.user.profileImage ? (
                  <img
                    src={project.user.profileImage}
                    alt={project.user.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600">
                    {project.user.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {project.user.name}
                  </p>
                  {project.user.profession && (
                    <p className="text-sm text-gray-600">
                      {project.user.profession}
                    </p>
                  )}
                </div>
              </Link>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  About this project
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Tags
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                {project.client && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-sm">
                      Client: <strong>{project.client}</strong>
                    </span>
                  </div>
                )}

                {project.completionDate && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-sm">
                      Completed:{" "}
                      <strong>
                        {new Date(project.completionDate).toLocaleDateString()}
                      </strong>
                    </span>
                  </div>
                )}

                {project.projectUrl && (
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-900 hover:underline font-medium"
                    >
                      View Live Project
                    </a>
                  </div>
                )}
              </div>

              {/* Contact Artist */}
              {project.user.email && (
                <a
                  href={`mailto:${project.user.email}`}
                  className="block w-full py-3 bg-gray-900 text-white text-center rounded-lg font-semibold hover:bg-gray-800 transition-all"
                >
                  Contact Artist
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
