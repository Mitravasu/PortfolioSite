import WorkCard from "./WorkCard";

function Experience() {
    const experiences = [
        {
            role: 'Software Engineer',
            company: 'University of Toronto Hatchery',
            dates: 'September 2021 - Present',
            link: 'https://hatchery.engineering.utoronto.ca/',
            image: 'hatchery.png',
            tech: ['PHP', 'SQL', 'JavaScript', 'jQuery', 'AJAX', 'Wordpress', 'Tailwind'],
            description: [
                'Built an email scheduling portal to allow administrators to schedule and maintain emails to be sent to the specified startups',
                'Refactored SQL queries to reduce page load times for the administrator dashboard by 41%',
                'Restructured application forms to reflect updated requirements and refactored code to eliminate redundancies'
            ]
        },
        {
            role: 'Software Engineer, Automation',
            company: 'Basis Technologies',
            dates: 'June 2023 - August 2023',
            link: 'https://basis.net/',
            image: 'basis.png',
            tech: ['Java', 'Selenium', 'Cucumber', 'JUnit 5', 'JIRA', 'JavaScript'],
            description: [
                'Designed and refactored automated tests using JUnit 5 to speed up test execution.',
            ]
        },
        {
            role: 'Software Engineer, Platform',
            company: 'Basis Technologies',
            dates: 'June 2022 - August 2022',
            link: 'https://basis.net/',
            image: 'basis.png',
            tech: ['Java', 'Redis', 'JUnit', 'SQL', 'MongoDB', 'Kafka', 'Docker'],
            description: [
                'Enhanced testing environment to accurately simulate real-time bidding in a mock environment',
                'Designed software architecture documents for a business intelligence project aiming to provide insight on why client ad campaigns went offline',
                'Built API endpoints for the above business intelligence project to allow programmatic access to insights'
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
                'Created a payroll portal to automate the timesheet submission process which is used by 50 employees bi-weekly to submit their work hours',
                'Implemented automatic reminder and summary emails to increase transparency between employees and their project managers',
                'Reduced database redundancies by 31% by conducting audits and normalizing research data in a MS Access database',
                'Created reports and forms on MS Access using research data on kidney patients and the barriers preventing them from receiving treatment'
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
  