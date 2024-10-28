import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-4 md:px-0">
      <main className="max-w-3xl mx-auto py-20">
        {/* Hero Section */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Hassan Mohamed
          </h1>
          <p className="text-xl text-zinc-400">
            Full Stack Developer
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/hassan-mostafa" 
               className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
               target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/hassan-mostafa-profile" 
               className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
               target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hassan.mostafa.dev@gmail.com" 
               className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">About</h2>
          <p className="text-zinc-400 leading-relaxed">
            I'm a Full Stack Developer with expertise in building scalable web applications. 
            I specialize in both frontend and backend development, creating seamless user experiences 
            and robust server-side solutions.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid gap-6">
            <ProjectCard 
              title="E-Commerce Platform"
              description="A full-featured e-commerce solution with real-time inventory management."
              tech={['React', 'Node.js', 'MongoDB']}
              link="https://project-demo.com"
            />
            <ProjectCard 
              title="Task Management System"
              description="Collaborative task management tool with real-time updates."
              tech={['TypeScript', 'Express', 'PostgreSQL']}
              link="https://project-demo.com"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard title="Frontend" items={['React', 'TypeScript', 'Tailwind CSS']} />
            <SkillCard title="Backend" items={['Node.js', 'Express', 'MongoDB']} />
            <SkillCard title="Tools" items={['Git', 'Docker', 'AWS']} />
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({ title, description, tech, link }: {
  title: string;
  description: string;
  tech: string[];
  link: string;
}) {
  return (
    <div className="p-6 rounded-lg bg-zinc-800/50 hover:bg-zinc-800/70 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" 
           className="p-1 hover:bg-zinc-700 rounded transition-colors">
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-zinc-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="px-3 py-1 text-sm rounded-full bg-zinc-700/50 text-zinc-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-4 rounded-lg bg-zinc-800/50">
      <h3 className="font-medium mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-zinc-400">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
