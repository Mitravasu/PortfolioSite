import SkillsCard from "./SkillsCard";

function Skills() {
    const skillset = [
        {
            type: 'Languages',
            skills: ['Java', 'Python', 'C', 'PHP', 'HTML', 'CSS', 'JavaScript', 'SQL', 'GraphQL']
        },
        {
            type: 'Frameworks and Libraries',
            skills: ['Node.js', 'Express.js', 'React', 'Vue.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Pandas', 'NumPy', 'Scikit-learn', 'ChartJS']
        },
        {
            type: 'Databases',
            skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Neo4j', 'MS Access']
        },
        {
            type: 'Concepts',
            skills: ['RESTful APIs', 'Object Oriented Programming', 'MVC Architecture', 'Microservices Architecture', 'Agile Scrum']
        },
        {
            type: 'Tools',
            skills: ['Git', 'Jira', 'Heroku', 'Docker', 'WordPress', 'Netlify', 'Postman']
        }
    ]

    const skills_div = skillset.map((skill) => {
        return (
            <SkillsCard skill={skill}/>
        )
    });

    return (
        <div className="flex flex-col items-center text-left space-y-6">
            <div className='w-4/5 flex justify-center'>
              <p className='font-bold text-4xl max-w-fit'>Skills</p>
            </div>
            {skills_div}
        </div>
    )
}

export default Skills;