import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/mp1.svg'
const ImageSection = () => {
    const navigate = useNavigate()
    const handlePenggunaan = () => {
        navigate('/penggunaan')
    }
    
  return (
    <section className="flex flex-col items-center p-8 justify-center">
      <div className="text-center rounded-md p-4 mb-8" style={{ fontFamily: "Roboto" }}>
        <h1 className="font-bold text-3xl mb-4 ">Fitur Cosmopolite</h1>
        <p className="text-yellow-500 font-bold">
          Telusuri dan temukan bacaan yang kamu inginkan. Jalin pertemanan dan saling berbagi buku yang kamu rekomendasikan
        </p>
      </div>
      <div className="flex justify-center mb-5">
        <img src={image} alt="" />
      </div>
      <button className="font-bold " onClick={handlePenggunaan}>Cara Penggunaan</button>
    </section>
  );
};

export default ImageSection;
