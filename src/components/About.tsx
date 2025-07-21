import { User } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 accent-gradient mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="w-full h-[500px] max-w-lg mx-auto rounded-2xl shadow-2xl overflow-hidden">
              {profile?.aboutImageUrl ? (
                <img
                  src={profile.aboutImageUrl}
                  loading="lazy"
                  alt="Shishir Kandel - Creative Designer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <User className="w-24 h-24 text-slate-400" />
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Creative Designer & Visual Strategist
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {profile.aboutDescription}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I specialize in visual design, branding, and SEO optimization, ensuring every project delivers both aesthetic appeal and functional excellence. Based in Kathmandu, I work with clients globally to create designs that not only look stunning but also drive results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {profile.yearsExperience}+
                </div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {profile.projectsCompleted}+
                </div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {profile.happyClients}+
                </div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}