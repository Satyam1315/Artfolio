import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import ProjectCard from "../components/ProjectCard";
import { projectAPI } from "../utils/api";

const Explore = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [totalProjects, setTotalProjects] = useState(0);

  const categories = [
    { value: "all", label: "All" },
    { value: "illustration", label: "Illustration" },
    { value: "design", label: "Design" },
    { value: "photography", label: "Photography" },
    { value: "digital-art", label: "Digital Art" },
    { value: "3d-modeling", label: "3D Modeling" },
    { value: "animation", label: "Animation" },
    { value: "other", label: "Other" },
  ];

  // Fetch the first page of projects
  const fetchProjects = async () => {
    try {
      setLoading(true);

      const params = {
        category: activeCategory,
        search: searchQuery.trim(),
        page: 1,
        limit: 12,
      };

      const response = await projectAPI.getAllProjects(params);

      setProjects(response.data.projects);
      setPage(response.data.pagination.page);
      setHasMore(response.data.pagination.hasMore);
      setTotalProjects(response.data.pagination.total);
    } catch (error) {
      console.error("Error fetching projects:", error);

      setProjects([]);
      setPage(1);
      setHasMore(false);
      setTotalProjects(0);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  // Fetch page 1 whenever category or search changes
  // Debounce search requests by 400ms
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProjects();
    }, 400);

    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  // Load the next page and append it to the existing projects
  const loadMoreProjects = async () => {
    if (!hasMore || loadingMore) return;

    try {
      setLoadingMore(true);

      const nextPage = page + 1;

      const params = {
        category: activeCategory,
        search: searchQuery.trim(),
        page: nextPage,
        limit: 12,
      };

      const response = await projectAPI.getAllProjects(params);

      setProjects((prevProjects) => [
        ...prevProjects,
        ...response.data.projects,
      ]);

      setPage(response.data.pagination.page);
      setHasMore(response.data.pagination.hasMore);
    } catch (error) {
      console.error("Error loading more projects:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  // Show full-page loader only during the first request
  if (initialLoading) {
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
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Explore Creative Work
          </h1>

          <p className="text-xl text-gray-600">
            Discover amazing portfolios from talented artists around the world
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project, artist name, or skills..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-gray-900 focus:border-transparent text-lg"
            />
          </div>

          {searchQuery && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              Searching projects, artists, skills, and tags
            </p>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.value
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        {totalProjects > 0 && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Found{" "}
              <span className="font-semibold">{totalProjects}</span>{" "}
              {totalProjects === 1 ? "project" : "projects"}

              {searchQuery && (
                <span>
                  {" "}
                  matching{" "}
                  <span className="font-medium">
                    "{searchQuery}"
                  </span>
                </span>
              )}
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {loading ? (
          <div className="py-20 flex justify-center">
            <LoadingSpinner size="lg" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />

            <p className="text-xl text-gray-600 mb-4">
              {searchQuery || activeCategory !== "all"
                ? "No projects found matching your criteria"
                : "No projects available yet"}
            </p>

            <p className="text-gray-500">
              {searchQuery
                ? "Try different keywords or browse all categories"
                : activeCategory === "all"
                  ? "Check back soon for amazing creative work!"
                  : "Try another category"}
            </p>
          </div>
        ) : (
          <>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMoreProjects}
                  disabled={loadingMore}
                  className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loadingMore ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Explore;
