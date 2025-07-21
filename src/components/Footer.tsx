import { Mail, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/sk-logo.svg" 
                alt="SK Logo" 
                className="w-12 h-12 rounded-lg"
              />
            </div>
            <p className="text-slate-400 max-w-md">
              Creative Designer & Visual Strategist crafting exceptional visual experiences with modern design tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-purple-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-purple-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-purple-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href={profile.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-purple-600 transition-colors text-slate-400 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={profile.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-pink-600 transition-colors text-slate-400 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:shishirkandel98@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors text-slate-400 hover:text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Shishir Kandel. Designed with ❤️ by Shishir Kandel
          </p>
        </div>
      </div>
    </footer>
  );
}