import { PROJECTS } from '@/data/projects';
import type { Project } from '@/types/types';
import Card from './Card';

const Projects = () => {
  return (
    <section className='mb-10'>
      <h2 className='text-principal font-bold text-3xl my-8 mb-8 text-left underline '>
        Projects
      </h2>

      {/* <p>Filtros</p>

      <Button>Hello World</Button> */}

      <div className='grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3  gap-4  place-items-center '>
        {PROJECTS.map((project: Project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
