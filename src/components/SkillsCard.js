function SkillsCard(props) {

    const skillsList = props.skill.skills.map((t) => {
        return (<li className='max-w-fit font-bold bg-dark shadow-md p-2 rounded-lg'>{t}</li>)
    })

    return (
        <div className='flex w-4/5 shadow-2xl rounded-lg bg-gradient-to-r from-dark1 to-dark1'>
          <div className="w-10 flex items-center p-1 rounded-l-lg bg-gradient-to-b from-highlight to-highlight2">
          </div>
          <div className='inline-flex flex-col content-start w-1/2 p-3'>
              <p className='font-bold text-2xl max-w-fit text-highlight'>{props.skill.type}</p>
              <ul className='flex flex-wrap gap-2 py-2'>
                  {skillsList}
              </ul>
          </div>
      </div>
    )
}

export default SkillsCard;