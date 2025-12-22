import { Link } from "react-router-dom";
import {
  Palette,
  Upload,
  Share2,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
  ArrowRight,
  Sparkles,
  Layout,
  Search,
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful Templates",
      description:
        "Choose from professionally designed templates that showcase your work in the best light. Fully customizable to match your brand.",
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Easy Upload",
      description:
        "Drag and drop your images, videos, and files. Our platform handles all the heavy lifting with cloud storage and optimization.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Custom Layouts",
      description:
        "Design your portfolio exactly how you want it. Grid, masonry, or full-screen layouts - the choice is yours.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Easy Sharing",
      description:
        "Share your portfolio with a single link. Optimized for all devices and social media platforms.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description:
        "Track views, engagement, and visitor insights. Understand how people interact with your work.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description:
        "Your work is protected with enterprise-grade security. Control who sees what with privacy settings.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed with CDN delivery worldwide",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Get discovered on search engines automatically",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Management",
      description: "Manage client projects and collaborations",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discoverability",
      description: "Be found in our global artist directory",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Enhancement",
      description: "Smart image optimization and tagging",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Backup & Recovery",
      description: "Automatic backups keep your work safe",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            Everything You Need to{" "}
            <span className="block mt-2">Showcase Your Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for artists, designers, and
            creative professionals.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-gray-900">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            And Much More...
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-gray-900">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlight Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for Creatives, By Creatives
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We understand the unique needs of artists and designers. That's why
              we've built a platform that puts your work first, with tools that
              make managing your portfolio effortless.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  No coding required - build stunning portfolios in minutes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Responsive design that looks great on all devices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Regular updates with new features and improvements
                </span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-20 h-20 text-gray-900 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">
                  Your Work,
                  <br />
                  Beautifully Presented
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-2xl bg-gray-50 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to showcase your creativity?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of artists building their online presence with ArtFolio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
