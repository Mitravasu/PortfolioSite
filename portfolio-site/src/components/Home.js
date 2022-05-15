import Projects from './Projects';
import Intro from './Intro';

function Home() {
    return (
      <div className="Home">
        <div id='intro' style={{height: "100vh"}}>
            <Intro />
        </div>
        <div id='projects' style={{height: "100vh"}}>
            <Projects />
        </div>
      </div>
    );
  }
  
  export default Home;
  