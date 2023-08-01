function Education() {
    return (
        <div className="flex flex-col items-center text-left space-y-6">
          <div className='w-4/5 flex justify-center'>
            <p className='font-bold text-4xl max-w-fit'>Education</p>
          </div>
          <div className='flex w-4/5 shadow-2xl rounded-lg bg-gradient-to-r from-dark1 to-dark1'>
            <div className="w-10 flex items-center p-1 rounded-l-lg bg-gradient-to-b from-highlight to-highlight2">
            </div>
            <div className='inline-flex flex-col content-start w-1/2 p-3'>
                <p className='font-bold text-2xl max-w-fit'>Honours Bachelor of Science</p>
                <a className='max-w-fit font-bold text-xl text-highlight hover:text-highlight2' href='https://www.utoronto.ca/'>University of Toronto</a>
                <p className='max-w-fit text-xl'>Computer Science, Software Engineering Specialist</p>
                <p className='max-w-fit text-lg'>GPA: 3.10</p>
            </div>
            <div className='inline-flex flex-col w-1/2 p-2 text-right'>
                <p className='font-bold text-xl'>September 2019 - June 2023</p>
            </div>
        </div>
      </div>
    )
}

export default Education;