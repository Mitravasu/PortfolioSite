import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: 'Spotify Recommendations',
      description: 'An e-learning web-app developed to help the African Impact Initiative educate African entrepreneurs',
      extralinks: '',
      code: 'https://github.com/UTSCC09/project-bestestc09group',
      demo: 'https://bestestc09group.ml/',
      image: 'spotifyrecs.png',
      tech: ['React', 'MongoDB', 'Express', 'GraphQL', 'Bootstrap', 'Axios', 'Spotify API', 'Apollo', 'Docker', 'ChartJS'],
    },
    {
      title: 'AfriConnect',
      description: 'An e-learning web-app developed to help the African Impact Initiative educate African entrepreneurs',
      extralinks: '',
      code: 'https://github.com/team-nov/team-nov-production',
      demo: 'https://africonnect.netlify.app/',
      image: 'africonnect.png',
      tech: ['React', 'MongoDB', 'Express', 'Netlify'],
    },
    {
      title: 'ManageU',
      description: 'A discord bot that helps you organize your time.',
      extralinks: '',
      code: 'https://github.com/l3n0ire/pythonDiscordBot',
      demo: '',
      image: 'manageu.png',
      tech: ['Python', 'MongoDB', 'Heroku', 'discord.py'],
    },
    {
      title: 'CourierU',
      description: 'A management tool for food banks and charities to coordinate deliveries to those in need. Read more at',
      extralinks: 'https://stories.mlh.io/5-awesome-hacks-you-can-make-with-radar-1b3f76dc7ea9',
      code: 'https://github.com/l3n0ire/courieru',
      demo: 'https://courieru.herokuapp.com/',
      image: 'courieru.png',
      tech: ['Bootstrap', 'MongoDB', 'Radar', 'Heroku'],
    },
    {
      title: 'Physics Playground',
      description: 'A tool that allows highschool students to experience physics lab while unable to go to school due to the Covid19 pandemic',
      extralinks: '',
      code: 'https://github.com/l3n0ire/PhysicsPlaygroundUnity',
      demo: 'https://physicsplaygroundu.netlify.app/',
      image: 'physicplaygroundu.png',
      tech: ['Unity', 'C#', 'React', 'Netlify'],
    },
    {
      title: 'CookingU',
      description: 'A website for sharing recipes',
      image: 'cookingu.png',
      extralinks: '',
      code: 'https://github.com/l3n0ire/CookingU',
      demo: 'https://cookingu.netlify.app/',
      tech: ['React', 'Netlify'],
    },
    {
      title: 'BeatStar',
      description: 'A music rythmn game made in Java to showcase OOP principles',
      extralinks: '',
      code: 'https://github.com/Mitravasu/BeatStar',
      demo: '',
      image: 'beatstar.png',
      tech: ['Java', 'OOP', 'GUI'],
    },
  ]

  const project_div = projects.map((project) => {
    return (
        <ProjectCard project={project}/>
    )
})
  
  return (
    <div className="flex flex-col items-center text-left space-y-6 pb-6">
        <div className='w-4/5 flex justify-center'>
          <p className='font-bold text-4xl max-w-fit'>Projects</p>
        </div>
        <div className='flex w-4/5 flex-wrap gap-6 justify-center'>
          {project_div}
        </div>
    </div>
  );
}
  
export default Projects;
  