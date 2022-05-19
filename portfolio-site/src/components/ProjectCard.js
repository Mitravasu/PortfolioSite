
function ProjectCard(props) {
//     title: 'BeatStar',
//     description: 'A music rythmn game made in Java to showcase OOP principles',
//     extralinks: '',
//     image: 'beatstar.png',
//     tech: ['Java', 'OOP', 'GUI'],

    const techList = props.project.tech.map((t) => {
        return (<li className='max-w-fit font-bold p-2 bg-dark rounded-lg shadow-md'>{t}</li>)
    })

    return (
      <div className='flex flex-col w-full lg:w-5/12 shadow-2xl rounded-lg bg-gradient-to-r from-dark1 to-dark1'>
          <div className='h-96 w-full rounded-t-lg'>
              <img className='h-full w-full rounded-t-lg' src={props.project.image}/>
          </div>
          <div className='p-4'>
            <p className='font-bold text-2xl text-highlight'>{props.project.title}</p>
            <p className='text-lg'>{props.project.description}</p>
            <ul className="flex flex-wrap gap-2 pt-3">
                {techList}
            </ul>
            <div className='flex pt-3 gap-5'>
                <a className='p-2 px-8 font-bold rounded-lg shadow-xl bg-highlight  hover:bg-highlight2' href='https://google.ca'>Code</a>
                <a className='p-2 px-8 font-bold rounded-lg shadow-xl bg-highlight hover:bg-highlight2' href='https://google.ca'>Demo</a>
            </div>
          </div>
      </div>
    );
  }
  
  export default ProjectCard;
  