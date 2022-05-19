import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
      // style={{position: "fixed", width: "100%", backgroundColor: 'black', color: 'white'}}
      <div className="top-0 w-screen bg-dark1 text-light sticky py-4 flex flex flex-wrap justify-center font-sans">
          <div className='flex w-1/2 justify-center'>
            <FontAwesomeIcon class='h-16 w-16 m-1 cursor-pointer fill-current text-light hover:text-lighthover' icon={faGithub} />
            <FontAwesomeIcon class='h-16 w-16 m-1 cursor-pointer fill-current text-light hover:text-lighthover' icon={faLinkedin} />
          </div>
      </div>
    );
  }
  
  export default Footer;
  