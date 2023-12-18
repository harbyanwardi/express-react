import React from 'react';
import home from '../assets/images/home.jpg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';

const TextImageSection = () => {
  return (
    <section className="container mx-10 flex flex-col md:flex-row items-center justify-between p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 relative">
        <div className="border-l-4 border-solid border-orange-500 pl-4">
          <p className="text-black font-bold text-xl mb-4">SELAMAT DATANG</p>
        </div>
        <h1 className="text-black font-bold mb-4" >Cosmo<span className="text-orange-500">polite</span></h1>
        <p className="text-black mb-4" style={{ fontFamily : "Roboto"}}>
          Implementasi teknologi dalam proses membantu pendampingan orang tua untuk
          menjaga perkembangan anak di usia dini melalui karya sastra literasi dan visualisasi
          yang menarik agar melatih membaca anak dan menambah wawasan pengetahuan.
        </p>
        <p className="text-black font-bold">UNDUH SEKARANG</p>
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faAndroid} className="text-black text-3xl" />
          <FontAwesomeIcon icon={faApple} className="text-black text-3xl" />
          <FontAwesomeIcon icon={faWindows} className="text-black text-3xl" />
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src={home} alt="home" className="w-full h-auto max-w-md" style={{ width: "50%"}} />
      </div>
    </section>
  );
};

export default TextImageSection;
