import Projects from './Projects';
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

function Home() {
    return (
      <div className="Home space-y-5 w-auto bg-gradient-to-r from-dark1 via-dark2 to-dark1 text-light snap-mandatory snap-y">
        <div className='pt-48 sm:py-8 min-h-screen snap-center' id='intro'>
            <Intro />
        </div>
        <div className='min-h-screen snap-center' id='experience'>
            <div className='pt-48 sm:py-8'></div>
            <Experience />
        </div>
        <div className='min-h-screen snap-center' id='education'>
            <div className='pt-48 sm:py-8'></div>
            <Education />
        </div>
        <div className='min-h-screen snap-center' id='projects'>
          <div className='pt-48 sm:py-8'></div>
            <Projects />
        </div>
        <div className='min-h-screen snap-center' id='skills'>
          <div className='pt-48 sm:py-8'></div>
            <Skills />
        </div>
      </div>
    );
  }
  
  export default Home;
  