import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Gamepad2, 
  ChevronRight,
  ExternalLink,
  Download
} from "lucide-react";

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-blue-600 rounded-lg text-white">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-slate-800">{title}</h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const contactInfo = {
    email: "Brandonkaiser04@gmail.com",
    phone: "(636)-439-3495",
    linkedin: "linkedin.com/in/BrandonKaiser10",
    location: "O'Fallon, Missouri"
  };

  return (
    <div className="min-h-screen">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter text-blue-600">BK</span>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#activities" className="hover:text-blue-600 transition-colors">Activities</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 border border-blue-500/30">
              Aspiring CPA
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Brandon <span className="text-blue-500">Kaiser</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Master of Accountancy student at the University of Missouri with a passion for financial accuracy, operational efficiency, and leadership.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-slate-700"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        
        {/* Quick Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-10">
          <Card className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Location</p>
              <p className="font-medium">{contactInfo.location}</p>
            </div>
          </Card>
          <Card className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Phone</p>
              <p className="font-medium">{contactInfo.phone}</p>
            </div>
          </Card>
          <Card className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Email</p>
              <p className="font-medium truncate max-w-[180px]">{contactInfo.email}</p>
            </div>
          </Card>
        </div>

        {/* Education Section */}
        <section id="education">
          <SectionHeader title="Education" icon={GraduationCap} />
          <Card className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">University of Missouri Columbia</h3>
                <p className="text-blue-600 font-medium">Master of Accountancy and CPA Certification</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="font-bold text-slate-900">GPA: 3.64/4.00</p>
                <p className="text-sm text-slate-500">Expected: Spring 2028</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 italic text-slate-600 text-sm">
              Currently pursuing advanced studies in accountancy with a focus on preparing for the CPA exam and developing professional expertise in financial reporting and auditing.
            </div>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeader title="Work Experience" icon={Briefcase} />
          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Manager</h3>
                  <p className="text-blue-600 font-medium">Country Club Car Wash</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-900 font-medium">O’Fallon, Missouri</p>
                  <p className="text-sm text-slate-500">October 2022 – Present</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Promoted from washer to manager in 1 year after demonstrating operational oversight and accountability for daily revenue activities.",
                  "Increasing location revenue by selling memberships and add-ons.",
                  "Supervising 10-12 workers per shift, while improving operational efficiency and maintaining productive staffing levels."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <ChevronRight size={18} className="text-blue-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dining Service Associate</h3>
                  <p className="text-blue-600 font-medium">Mizzou Dining Services</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-900 font-medium">Columbia, Missouri</p>
                  <p className="text-sm text-slate-500">September 2025 – Present</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Handling daily point-of-sale transactions, ensuring accuracy and proper reconciliation of customer payments.",
                  "Balanced academic coursework with part-time employment while maintaining strong reliability, organization, and communication skills.",
                  "Cross-trained across multiple positions and locations to support operational efficiency and staffing needs during shifts."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <ChevronRight size={18} className="text-blue-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Activities & Awards */}
        <section id="activities">
          <SectionHeader title="Activities & Rewards" icon={Award} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Phi Sigma Epsilon</h3>
                <p className="text-blue-600 font-medium">Business Fraternity</p>
                <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Spring 2025 – Present</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Attending professional development workshops and networking events focused on business, leadership, and career preparation.",
                  "Connecting with alumni and industry professionals through mentorship opportunities.",
                  "Developing foundational knowledge of financial decision-making and business operations."
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Gamepad2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Mizzou Collegiate Esports</h3>
                    <p className="text-sm text-slate-500">Fall 2024 – Present</p>
                    <p className="text-sm text-slate-600 mt-1">Traveling and competing against other Collegiate teams across the U.S.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Dean’s List</h3>
                    <p className="text-sm text-slate-500">Fall 2024 – Present</p>
                    <p className="text-sm text-slate-600 mt-1">Recognized for academic excellence and maintaining a high GPA.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="bg-blue-600 rounded-2xl p-10 text-center text-white shadow-xl shadow-blue-600/20">
            <h2 className="text-3xl font-bold mb-4">Looking for a dedicated accounting professional?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              I am actively seeking opportunities to apply my financial skills and leadership experience in a professional accounting environment.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-white tracking-tighter text-lg">Brandon Kaiser</p>
            <p className="text-sm">© 2026 • Aspiring CPA Portfolio</p>
          </div>
          <div className="flex gap-6">
            <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
