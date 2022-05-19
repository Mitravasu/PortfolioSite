
function WorkCard(props) {
    const techList = props.experience.tech.map((t) => {
        return (<li className='max-w-fit font-bold bg-dark shadow-md p-2 rounded-lg'>{t}</li>)
    })

    const descriptionList = props.experience.description.map((desc) => {
        return (<li className="">{desc}</li>)
    })
  
    return (
      <div className='flex w-4/5 shadow-2xl rounded-lg bg-gradient-to-r from-dark1 to-dark1'>
          <div className="w-10 flex items-center p-1 rounded-l-lg bg-gradient-to-b from-highlight to-highlight2">
            {/* <img className='rounded-l-lg' src={props.experience.image}></img> */}
          </div>
          <div className='inline-flex flex-col content-start w-1/2 p-3'>
              <p className='font-bold text-2xl max-w-fit'>{props.experience.role}</p>
              <a className='max-w-fit font-bold text-xl text-highlight hover:text-highlight2' href={props.experience.link}>{props.experience.company}</a>
              <ul className='flex flex-wrap gap-2 py-2'>
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
  