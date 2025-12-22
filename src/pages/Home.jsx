import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Palette } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              Showcase Your
              <span className="block mt-2 bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-700 to-gray-900">
                Creative Vision
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create a stunning portfolio, connect with clients, and showcase
              your artistic journey all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/register"
                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/explore"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all"
              >
                Explore Portfolios
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mt-32 grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Beautiful Portfolios
              </h3>
              <p className="text-gray-600">
                Create stunning portfolios with our modern, customizable
                templates designed for artists.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Management
              </h3>
              <p className="text-gray-600">
                Upload, edit, and organize your projects with our intuitive
                dashboard interface.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Connect with Clients
              </h3>
              <p className="text-gray-600">
                Share your work with the world and attract potential clients
                with your unique style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to showcase your work?
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of artists building their online presence.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105"
          >
            Create Your Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
