import '../index.css';
import linkedin from '../images/linkedin-icon.png';
import github from '../images/github-icon.png';
import gitlab from '../images/gitlab.svg';

function SocialMedia() { 

  return (

    <div className='Social-media'>
    
        <div className="Box">

            <a href="https://www.linkedin.com/in/filipe-penna/" target="_blank">
                <img src={linkedin} alt="Linkedi icon" className='Social-media-icon'/>
                Linkedin
            </a>
            
        </div>

        <div className="Box">

            <a href="https://github.com/falheisen" target="_blank">
                <img src={github} alt="Github icon" className='Social-media-icon'/>
                Github
            </a>
            
        </div>

        <div className="Box">

            <a href="https://gitlab.ec-lyon.fr/fpennace" target="_blank">
                <img src={gitlab} alt="Gitlab icon" className='Social-media-icon'/>
                Gitlab
            </a>
            
        </div>


    </div>

  );
}

export default SocialMedia;