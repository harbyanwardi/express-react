import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const MainFooter = ({ bg, bgtext, bgicon }) => {
  return (
    <div className={`flex flex-col mt-4 ${bg} ${bgtext} py-4`}>
      <div className="flex flex-col items-center mb-4 mt-4">
      <div className="flex mt-2 mb-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FontAwesomeIcon icon={faLinkedin} className={` text-2xl ${bgicon}`} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FontAwesomeIcon icon={faGithub} className={` text-2xl ${bgicon}`} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FontAwesomeIcon icon={faFacebook} className={` text-2xl ${bgicon}`} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className={` text-2xl ${bgicon}`} />
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold">© 2023 - Made by CP</p>
        </div>
        
      </div>
    </div>
  );
};

export default MainFooter;
