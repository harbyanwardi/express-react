import React from 'react';
import home from '../assets/images/Home1.svg';


const TextImageSectionSekilas3 = () => {
  return (
    <div className='bg-yellow-500 mt-0.5'>
        <section className="container mx-10 flex flex-col md:flex-row  items-center justify-between p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 relative">
        <div className="">
          <h1 className="text-white font-bold mb-4">V I S U A L I S A S I</h1>
        </div>
        <p className="text-white mb-4 ml-10" style={{ fontFamily : "Roboto"}}>
        Ciptakan pengalaman belajar yang memikat dan kreatif untuk 
        anak dengan visualisasi yang cerah dan menyenangkan. 
        Dengan gambar dan desain yang menarik,  pembelajaran 
        menjadi lebih menyenangkan dan memudahkan anak untuk 
        memahami konsep-konsep penting dengan gembira.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src={home} alt="home" className="w-full h-auto max-w-md" style={{ width: "50%"}} />
      </div>
    </section>
    </div>
  );
};

export default TextImageSectionSekilas3;
