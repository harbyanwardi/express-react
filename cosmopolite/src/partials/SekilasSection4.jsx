import React from 'react';
import home from '../assets/images/Music Icon-fococlipping-standard 1.svg';


const TextImageSectionSekilas4 = () => {
  return (
    <div className=' mt-0.5'>
        <section className="container mx-10 flex flex-col md:flex-row  items-center justify-between p-8">
            <div className="md:w-1/2 flex relative">
                <img src={home} alt="home" className="w-full h-auto max-w-md" style={{ width: "50%"}} />
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 relative">
                <div className="mb-10">
                <h1 className="text-black font-bold mb-4">S U A R A</h1>
                <div className='flex'>
                <h1 className="text-black font-bold mb-4 mx-10">&</h1>
                <h1 className="text-black font-bold mb-4">V I D E O</h1>
                </div>
                </div>
                <p className="text-black mb-4 font-bold" style={{ fontFamily : "Roboto"}}>
                Nikmati pengalaman membaca yang hidup dan seru 
                dengan suara penuh warna dalam aplikasi kami untuk 
                anak-anak. Buku-buku dan tontonan video dengan tulisan 
                mendalam disertai dengan narasi yang menghibur, 
                menjadikan proses belajar menyenangkan dan interaktif 
                bagi mereka.
                </p>
            </div>
        </section>
    </div>
  );
};

export default TextImageSectionSekilas4;
