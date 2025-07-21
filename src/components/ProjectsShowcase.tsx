import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/data/portfolio";

export default function ProjectsShowcase() {
  const [isScrolling, setIsScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const featuredProjects = projects.filter(project => project.featured);
  
  // Triple projects array for better seamless scrolling with touch support
  const duplicatedProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];

  // Touch/Mouse handlers for manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsScrolling(false);
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsScrolling(false);
    startXRef.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsScrolling(true), 2000); // Resume scrolling after 2 seconds
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsScrolling(true), 2000); // Resume scrolling after 2 seconds
  };

  // Handle mouse enter/leave for pausing animation
  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => {
    if (!isDragging) setIsScrolling(true);
  };

  if (featuredProjects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover my latest work and creative solutions</p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-slate-500">No featured projects available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover my latest work and creative solutions</p>
        </div>

        {/* Mobile Instructions */}
        <div className="text-center mb-8 lg:hidden">
          <p className="text-sm text-slate-500">👆 Swipe to browse projects</p>
        </div>

        {/* Horizontal Scrolling Projects */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className={`flex cursor-grab active:cursor-grabbing select-none ${
              isScrolling ? 'animate-scroll-left' : 'animate-scroll-left-paused'
            }`}
            style={{ width: "300%" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedProjects.map((project, index) => (
              <Link
                key={`${project.id}-${index}`}
                href={`/project/${project.id}`}
                className="flex-shrink-0 w-80 mx-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                  }
                }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      loading="lazy"
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <p className="text-slate-400">No image</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-purple-100 text-purple-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg text-lg">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}