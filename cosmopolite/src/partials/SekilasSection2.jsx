import React from 'react';
import home from '../assets/images/laptopcw.svg';


const TextImageSectionSekilas2 = () => {
  return (
    <div className=' mt-0.5'>
        <section className="container mx-10 flex flex-col md:flex-row  items-center justify-between p-8">
            <div className="md:w-1/2 flex relative">
                <img src={home} alt="home" className="w-full h-auto max-w-md" style={{ width: "50%"}} />
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 relative">
                <div className="mb-10">
                <h1 className="text-black font-bold mb-4">P E N D A F T A R A N</h1>
                </div>
                <p className="text-black mb-4 font-bold ml-10" style={{ fontFamily : "Roboto"}}>
                Daftarkan akun anak dengan mudah. Cukup dengan
                langkah sederhana untuk memberikan akses aman dan 
                terkelola bagi anak Anda. Dengan antarmuka yang intuitif, 
                pengalaman pendaftaran akun anak menjadi lebih praktis 
                dan efisien.
                </p>
            </div>
        </section>
    </div>
  );
};

export default TextImageSectionSekilas2;
