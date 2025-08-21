// app/projects/page.jsx
import React from "react";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import Image from "next/image";

async function getProjects() {
  return [
    {
      id: 1,
      title: "AI Chat Application",
      description:
        "A real-time chat app with AI integration, built with React and WebSocket.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop&crop=center",
      demoUrl: "https://example.com/demo1",
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for managing products, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      demoUrl: "https://example.com/demo2",
    },
    {
      id: 3,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for managing products, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      demoUrl: "https://example.com/demo2",
    },
    {
      id: 4,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for managing products, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      demoUrl: "https://example.com/demo2",
    },
    {
      id: 5,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for managing products, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      demoUrl: "https://example.com/demo2",
    },
    {
      id: 6,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for managing products, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      demoUrl: "https://example.com/demo2",
    },
    {
      id: 7,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for managing products, orders, and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      demoUrl: "https://example.com/demo2",
    },
    // ...rest of your projects
  ];
}

// ✅ Page is now async
export default async function ProjectsPortfolioPage() {
  const projects = await getProjects();

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="relative z-10 pt-30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.06] backdrop-blur-xl rounded-full border border-white/15 shadow-2xl shadow-blue-500/20 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-slate-200 tracking-wide">
                Featured Work
              </span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
            </div>

            <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-[18px] md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light px-2">
              Discover{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                next-generation solutions
              </span>{" "}
              crafted with creativity, precision, and cutting-edge technology.
            </p>
          </div>

          {/* Projects Grid */}
          <main className="container mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="transform transition-all duration-700"
                >
                  <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        width={600}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex space-x-4">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transform hover:scale-110 transition-all duration-200 shadow-lg"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
