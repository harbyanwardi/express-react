import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faUser, faMusic } from '@fortawesome/free-solid-svg-icons';

const MusicIconsSection = () => {
  const icons = [
    {
      icon: faMobile,
      description: 'Visual',
      subdesc: 'Visualisasi cerah memikat, memudahkan anak memahami dunia dengan imajinasi riang'
    },
    {
      icon: faUser,
      description: 'Pendaftaran Mudah',
      subdesc: 'Cukup 60 detik untuk bergabung dan merasakan aplikasi Cosmopolite'
    },
    {
      icon: faMusic,
      description: 'Suara',
      subdesc: 'Suara berwarna, buku dan video menarik, aplikasi penuh cerita pendidikan anak'
    },
  ];

  return (
    <section className="flex flex-col items-center p-8 justify-center">
      <div className="text-center rounded-md p-4 mb-8" style={{ fontFamily: "Roboto" }}>
        <h1 className="font-bold text-3xl mb-4">Membaca Semakin Mudah</h1>
        <p>Baca buku, berbagi koleksi bacaan, dan bersosialisasi secara bersamaan.</p>
        <p>Di mana pun, kapan pun, dengan nyaman bersama setiap orang.</p>
      </div>
      <div className="flex justify-center mb-5">
        {icons.map((item, index) => (
          <div key={index} className="text-center bg-white rounded-md p-4 shadow-md mb-4 mx-2">
            <FontAwesomeIcon icon={item.icon} className="text-3xl mb-4 text-yellow-500" />
            <p className='font-bold'>{item.description}</p>
            <p>{item.subdesc}</p>
          </div>
        ))}
      </div>
      <button className='font-bold'>Selengkapnya</button>
    </section>
  );
};

export default MusicIconsSection;
