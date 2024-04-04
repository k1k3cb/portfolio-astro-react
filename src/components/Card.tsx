import type { Project } from '@/types/types';
import { v4 } from 'uuid';

const Card = ({ project }: { project: Project }) => {
  return (
    <div className='flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md max-w-[35rem] md:-h-[18rem]  md:h-50 flex-col md:flex-row md:min-w-[28rem]   '>
      <div className='md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-b-none  md:rounded-l-lg md:rounded-r-none bg-clip-border rounded-xl shrink-0 relative'>
        <img
          src={project.image}
          alt={`${project.title} Image`}
          className='object-cover w-full  h-40 md:h-full '
        />
      </div>
      <div className='p-2 w-full '>
        <div className=' flex py-2 gap-3  '>
          {project.technologies.map(technology => (
            <img src={technology} alt='' width={30} key={v4()} />
          ))}
        </div>

        <h4 className=' mb-2  text-xl  font-semibold leading-snug text-blue-gray- h-12'>
          {project.title}
        </h4>
        <p className='block mb-2 text-sm font-sans leading-relaxed text-gray-700 md:h-28 overflow-hidden'>
          {project.description}
        </p>
        <div className='flex gap-2'>
          {project.tags.map(tag => (
            <span className='text-xs bg-teal-200 rounded p-1  ' key={v4()}>
              {tag}
            </span>
          ))}
        </div>
        <div className='flex gap-2 justify-end'>
          <a href={project.github_url} className='inline-block'>
            <img src='icons/mdi--github.svg' alt='GitHub' width='30' />
          </a>
          <a href={project.live} className='inline-block'>
            <img src='icons/tabler--eye-check.svg' alt='Live icon' width='30' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
