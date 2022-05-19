import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Intro() {
    return (
      <div className="flex flex-col items-center justify-center h-screen font-sans">
        <div className='object-cover h-72 w-72 bg-no-repeat bg-profile bg-contain rounded-full'>
        </div>
        <div className='text-5xl font-bold'>
          Mitravasu Prakash
        </div>
        <div className="text-3xl font-bold p-1">
          Software Engineer
        </div>
        <div className='text-2xl p-1'>
          Statistics Machine Learning and Data Science Co-op at University of Toronto
        </div>
        <div className='text-xl p-1'>
          Toronto, ON | (647) 947-5052 | <a className='text-link hover:text-linkhover' href='mailto:mitravasu.prakash@mail.utoronto.ca'>mitravasu.prakash@mail.utoronto.ca</a>
        </div>
        <div className='text-xl p-1 font-bold'>
          <a className='text-link hover:text-linkhover' href='MitravasuPrakash_Resume.pdf'>Resume PDF</a>
        </div>
        <div className='flex p-1'>
          <FontAwesomeIcon class='h-16 w-16 m-1 cursor-pointer fill-current text-link hover:text-linkhover' icon={faGithub} />
          <FontAwesomeIcon class='h-16 w-16 m-1 cursor-pointer fill-current text-link hover:text-linkhover' icon={faLinkedin} />
        </div>
      </div>
    );
  }
  export default Intro;
  