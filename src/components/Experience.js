import WorkCard from "./WorkCard";

function Experience() {
    const experiences = [
        {
            role: 'Software Engineer (Backend)',
            company: 'Basis Technologies',
            dates: 'June 2022 - September 2022',
            link: 'https://basis.net/',
            image: 'basis.png',
            tech: [],
            description: []
        },
        {
            role: 'Software Engineer',
            company: 'University of Toronto Hatchery',
            dates: 'September 2021 - Present',
            link: 'https://hatchery.engineering.utoronto.ca/',
            image: 'hatchery.png',
            tech: ['PHP', 'SQL', 'JavaScript', 'jQuery', 'AJAX', 'Wordpress', 'Tailwind'],
            description: [
                'Developed a portal that allows administrators to schedule automatic emails sent to different startups by using Wordpress Cron',
                'Enhanced existing application forms by making them look consistent across the site using Tailwind'
            ]
        },
        {
            role: 'Software Engineer',
            company: 'University Health Network',
            dates: 'January 2021 - August 2021',
            link: 'https://www.uhn.ca/',
            image: 'uhn.png',
            tech: ['PHP', 'SQL', 'JavaScript', 'Wordpress', 'MS Access', 'Visual Basic', 'Python'],
            description: [
                'Developed a payroll portal used by 50 employees bi-weekly to submit their work hours',
                'Implemented automatic reminder and summary emails to add transparency between employees and their project managers',
                'Reduced database redundancies by 31% by conducting audits and normalizing research data in a MS Access database'
            ]
        },
        {
            role: 'Research Support',
            company: 'Municipal Property Assessment Corporation',
            dates: 'August 2019 - September 2019',
            link: 'https://www.mpac.ca/en',
            image: 'mpac.jpg',
            tech: ['MS Excel', 'Visual Basic'],
            description: [
                'Verified correctness of informatiion by highlighting discrepancies for an invoice management project',
                'Reduced information retrieval times by using Visual Basic to create a search box feature in the spreadsheet',
                'Ensured project was on track by sending daily progress reports and discussing future steps with the project manager',
                'Implemented feedback and made changes promptly',
                'Demonstrated excellent time management and organizational skills by finishing tasks on time'
                
            ]

        }
    ]

    const work_div = experiences.map((experience) => {
        return (
            <WorkCard experience={experience}/>
        )
    })

    return (
      <div className="flex flex-col items-center text-left space-y-6">
          <div className='w-4/5 flex justify-center'>
            <p className='font-bold text-4xl max-w-fit'>Work Experience</p>
          </div>
          {work_div}
      </div>
    );
  }
  
  export default Experience;
  