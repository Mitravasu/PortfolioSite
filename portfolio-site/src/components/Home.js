import Projects from './Projects';
import Intro from './Intro';
import Experience from './Experience';

function Home() {
    return (
      <div className="Home space-y-5">
        <div className='w-screen min-h-screen' id='intro'>
            <Intro />
        </div>
        <div className='w-screen min-h-screen' id='experience'>
            <div className='py-8'></div>
            <Experience />
        </div>
        <div className='w-screen min-h-screen' id='projects'>
          <div className='py-8'></div>
            <Projects />
        </div>
      </div>
    );
  }
  
  export default Home;
  