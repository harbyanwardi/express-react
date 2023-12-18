import React from 'react';
import home from '../assets/images/cosmopilte-03.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';

const TextImageSectionSekilas = () => {
  return (
    <div className='bg-yellow-500 mt-0.5'>
        <section className="container mx-10 flex flex-col md:flex-row  items-center justify-between p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 relative">
        <div className=" pl-4">
          <h1 className="text-white font-bold mb-4">A P L I K A S I</h1>
        </div>
        <h1 className="text-white font-bold mb-4 ml-40" >M O B I L E</h1>
        <p className="text-white mb-4" style={{ fontFamily : "Roboto"}}>
        Sebuah Aplikasi Mobile yang dapat membantu 
        mengasah minat baca anak dengan menyediakan 
        visualisai karya sastra yang dapat menghibur dan  
        meningkatkan imajinasi anak. 
        </p>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src={home} alt="home" className="w-full h-auto max-w-md" style={{ width: "50%"}} />
      </div>
    </section>
    </div>
  );
};

export default TextImageSectionSekilas;
