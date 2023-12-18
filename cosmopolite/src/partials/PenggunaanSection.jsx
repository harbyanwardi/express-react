import React from 'react';
import image1 from '../assets/images/1.svg';
import image2 from '../assets/images/2.svg';
import image3 from '../assets/images/3.svg';
import image4 from '../assets/images/4.svg';
import image5 from '../assets/images/5.svg';
import image6 from '../assets/images/6.svg';
import image7 from '../assets/images/7.svg';
import image8 from '../assets/images/8.svg';
import image9 from '../assets/images/9.svg';
import image10 from '../assets/images/10.svg';
import image11 from '../assets/images/11.svg';
import image12 from '../assets/images/12.svg';
import image13 from '../assets/images/13.svg';
import image14 from '../assets/images/14.svg';
import image15 from '../assets/images/15.svg';
import image16 from '../assets/images/16.svg';
import image17 from '../assets/images/17.svg';
import image18 from '../assets/images/18.svg';
import image19 from '../assets/images/19.svg';
import image20 from '../assets/images/20.svg';
import image21 from '../assets/images/21.svg';
import image22 from '../assets/images/22.svg';
import image23 from '../assets/images/23.svg';
import image24 from '../assets/images/24.svg';
import image25 from '../assets/images/25.svg';
import image26 from '../assets/images/26.svg';
import image27 from '../assets/images/27.svg';
import image28 from '../assets/images/28.svg';



const PenggunaanSection = () => {
  const sections = [
    {
      title: 'Splash Screen',
      imageCount: 4,
      images: [image1, image2, image3, image4],
      paragraf: 'Splash Screen ini adalah bagian  saat aplikasi mulai dijalankan dengan memperlihatkan brand logo aplikasi dan mulainya aplikasi.'
    },
    {
        title: 'Login & Sign In',
        imageCount: 4,
        images: [image5, image6, image7, image8, image9, image10, image11, image12],
        paragraf: 'Sign In, yaitu membuat akun menggunakan email dan password, sementara login akan mengisi email dan password yang sudah terdaftar. Di login juga terdapat pembuatan password baru karena lupa password. Terakhir tedapat login pendukung tentang profil anak.'
    },
    {
        title: 'Buku',
        imageCount: 8,
        images: [image13, image14, image15, image16, image17], 
        paragraf: 'Disini, terdapat rekomendasi buku yang dapat dibaca contohnya buku baru terbit, deskripsi dari buku, rangkuman karya tulis atau rangkuman buku dari salah satu penulis, dan terakhir bagian membaca buku yang bisa dibuat speaker atau mengeluarkan suara.'
    },
    {
      title: 'Video',
      imageCount: 8,
      images: [image18, image19, image20, image21], 
      paragraf:'Bagian ini adalah rekomendasi dari video atau tampilan home video, deskripsi dari video yang inging ditonton jika di klik videonya, rangkuman karya author atau rangkuman video dari salah satu author, terakhir menonton videonya ditambah dengan teks yang ada.'
    },
    {
        title: 'Search',
        imageCount: 8,
        images: [image22, image23], 
        paragraf:'Search adalah bagian pencarian buku menurut kategori, entah berdasarkan keluaran terbaru, dongeng dan sebagainya, contohnya jika yang dicari keluaran terbaru akan tampil buku-buku keluaran terbaru.'
    },
    {
        title: 'Profil Anak',
        imageCount: 8,
        images: [image24, image25, image26, image27], 
        paragraf: 'Profil anak adalah berisi tentang nama dan umur, lalu berisi buku, video ataupun bookmark yang sementara progress ataupun sudah selesai dibaca.'
    },
    {
        title: 'Profil Orang Tua',
        imageCount: 8,
        images: [image28],
        paragraf:'Profil Orang Tua adalah informasi pribadi dari Orang Tua, juga terdapat pengaturan, dapat mempublish karya dan mengontrol akun anak.' 
    },

  ];

  const generateImageRows = (images) => {
    const imagesPerRow = 4;
    const totalRows = Math.ceil(images.length / imagesPerRow);

    const imageRows = [];

    for (let i = 0; i < totalRows; i++) {
      const rowImages = [];

      for (let j = 0; j < imagesPerRow; j++) {
        const imageIndex = i * imagesPerRow + j;
        if (imageIndex < images.length) {
          rowImages.push(
            <img key={imageIndex} src={images[imageIndex]} alt={`Image ${imageIndex}`} className="mr-2 mb-2 mx-10 items-center" />
          );
        }
      }

      imageRows.push(
        <div key={i} className="flex justify-center">
          {rowImages}
        </div>
      );
    }

    return imageRows;
  };

  return (
    <section className="flex flex-col p-8 justify-center">
        <div className="text-center rounded-md p-4 mb-8" style={{ fontFamily: "Roboto" }}>
        <h1 className="font-bold text-yellow-500 mb-4 ">Cara Penggunaan</h1>
      </div>
      {sections.map((section, index) => (
        <div key={index} className=' justify-center'>
          <div className="mb-5">
            <h3 className='text-3xl font-bold'>{section.title}</h3>
            <p>{section.paragraf}</p>
          </div>
            <div className='items-center'>
          {generateImageRows(section.images)}
          </div>
          
        </div>
      ))}

    </section>
  );
};

export default PenggunaanSection;
