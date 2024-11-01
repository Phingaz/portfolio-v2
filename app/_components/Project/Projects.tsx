import ProjectCard from "./ProjectCard";
import SectionHead from "../Utils/SectionHead";
import { projects } from "../../constants";

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <SectionHead first="My" second="Projects" />
        <div className="grid md:grid-cols-2 gap-10 w-full">
          {projects.map((project, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <ProjectCard
                key={project.title}
                isOdd={isOdd}
                project={project}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
