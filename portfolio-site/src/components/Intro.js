function Intro() {
    return (
      <div className="flex flex-col items-center justify-center h-screen font-sans">
        <div className='object-cover h-72 w-72 bg-no-repeat bg-profile bg-contain rounded-full border-2 border-secondary'>
        </div>
        <div className='text-5xl font-bold p-3'>
          Mitravasu Prakash
        </div>
        <div className="text-3xl p-1">
          Software Engineer
        </div>
        <div className='text-2xl p-1'>
          Statistics Machine Learning and Data Science Co-op at University of Toronto
        </div>
        <div className='text-xl p-1'>
          Toronto, ON | (647) 947-5052 | <a className='text-secondary hover:text-secondaryhover' href='mailto:mitravasu.prakash@mail.utoronto.ca'>mitravasu.prakash@mail.utoronto.ca</a>
        </div>
        <div className='text-xl p-1 font-bold'>
          <a className='text-secondary hover:text-secondaryhover' href='MitravasuPrakash_Resume.pdf'>Resume PDF</a>
        </div>
        <div className='flex p-1'>
          <img className='h-16 w-16 m-1 cursor-pointer' src='github.svg'/>
          <img className='h-16 w-16 m-1 cursor-pointer' src='linkedin.svg'/>
        </div>
      </div>
    );
  }
  export default Intro;
  