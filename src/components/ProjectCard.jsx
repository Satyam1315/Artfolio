import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/project/${project._id}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={project.images[0]?.url}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end">
        <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-white w-full">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-200 line-clamp-2 mb-3">
            {project.description}
          </p>
          <div className="flex items-center gap-2">
            {project.user?.profileImage && (
              <img
                src={project.user.profileImage}
                alt={project.user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span className="text-sm font-medium">{project.user?.name}</span>
          </div>
        </div>
      </div>

      <div className="p-4 group-hover:opacity-0 transition-opacity duration-500">
        <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.user?.name}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
