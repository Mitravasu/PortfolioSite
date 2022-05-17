
function WorkCard(props) {
    const techList = props.experience.tech.map((t) => {
        return (<li className='max-w-fit font-bold bg-navbg p-2 rounded-lg text-navtext'>{t}</li>)
    })

    const descriptionList = props.experience.description.map((desc) => {
        return (<li className="">{desc}</li>)
    })
  
    return (
      <div className='flex bg-cards w-4/5 shadow-xl rounded-lg p-2'>
          <div className="w-32 h-32 p-1 flex items-center">
            <img className='rounded-lg' src={props.experience.image}></img>
          </div>
          <div className='inline-flex flex-col content-start w-1/2 p-2'>
              <p className='font-bold text-2xl max-w-fit'>{props.experience.role}</p>
              <a className='max-w-fit font-bold text-xl text-secondary hover:text-secondaryhover' href={props.experience.link}>{props.experience.company}</a>
              <ul className='flex flex-wrap gap-2'>
                  {techList}
              </ul>
              <ul className='list-disc flex flex-col ml-8 text-left text-md'>
                  {descriptionList}
              </ul>
          </div>
          <div className='inline-flex flex-col w-1/2 p-2 text-right'>
            <p className='font-bold text-xl'>{props.experience.dates}</p>
          </div>
      </div>
    );
  }
  
  export default WorkCard;
  