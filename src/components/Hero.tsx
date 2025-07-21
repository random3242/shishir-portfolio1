import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, User } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center py-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
            {/* Left Side - Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-slate-900">Hello, I'm</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Shishir Kandel
                  </span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Creative Graphic Designer crafting exceptional visual experiences with modern design tools and innovative creative solutions.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToContact}
                  className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg text-lg"
                >
                  Get In Touch
                </Button>
                <Button 
                  onClick={scrollToProjects}
                  variant="outline" 
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  View My Work
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-8 justify-center lg:justify-start">
                <a 
                  href={profile.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 text-slate-600 hover:text-purple-600"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={profile.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 text-slate-600 hover:text-purple-600"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href={`mailto:shishirkandel98@gmail.com`}
                  className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 text-slate-600 hover:text-purple-600"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-yellow-400 rounded-full opacity-80 animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-400 rounded-full opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
                
                {/* Main profile image */}
                <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-3 animate-float shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                    {profile?.profileImageUrl ? (
                      <img
                        src={profile.profileImageUrl}
                        loading="eager"
                        alt="Shishir Kandel Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-32 h-32 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}