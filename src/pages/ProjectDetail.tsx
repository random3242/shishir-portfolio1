import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, X } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const [showImageModal, setShowImageModal] = useState(false);
  
  const project = projects.find(p => p.id === parseInt(params?.id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">The project you're looking for doesn't exist.</p>
            <Button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-8 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          {/* Project Image - Large and Prominent */}
          <div className="mb-12">
            {project.imageUrl ? (
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100">
                  <img
                    src={project.imageUrl}
                    loading="eager"
                    alt={project.title}
                    className="w-full h-[600px] lg:h-[700px] object-contain p-8 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    onClick={() => setShowImageModal(true)}
                  />
                </div>
                
                {/* Image info bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <h2 className="font-semibold text-slate-800">{project.title}</h2>
                </div>
              </div>
            ) : (
              <div className="w-full h-[600px] lg:h-[700px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl flex items-center justify-center">
                <p className="text-slate-400 text-lg">No image available</p>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6">{project.title}</h1>
                <p className="text-xl text-slate-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies & Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-purple-100 text-purple-600 hover:bg-purple-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-slate-700">Category:</span>
                    <span className="ml-2 text-slate-600">{project.category}</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Skills Used:</span>
                    <span className="ml-2 text-slate-600">
                      {project.tags?.join(", ") || "Various design skills"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Category:</span>
                    <span className="text-slate-900 font-medium">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Status:</span>
                    <span className="text-green-600 font-medium">Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Featured:</span>
                    <span className="text-slate-900 font-medium">
                      {project.featured ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-purple-600 text-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Like this project?</h3>
                <p className="mb-4 text-purple-100">
                  Let's work together to bring your vision to life.
                </p>
                <Button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.back();
                  }}
                  className="w-full bg-white text-purple-600 hover:bg-purple-50"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {showImageModal && project.imageUrl && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Full Size Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <h3 className="font-bold text-slate-900 text-lg">{project.title}</h3>
              <p className="text-slate-600 mt-1">Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}