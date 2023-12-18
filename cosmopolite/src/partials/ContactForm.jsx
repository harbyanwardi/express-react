import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AlertPopup from '../components/Alert';
import { useNavigate } from 'react-router-dom';
import useTokenRefresh from '../controllers/useToken';
import axios from 'axios';

const ContactCard = ({ icon, label, content }) => {
    return (
      <div className="mb-4 flex items-center mx-5 my-7">
        <FontAwesomeIcon icon={icon} className="text-yellow-500 text-2xl mr-2" title={label} />
        <div>
          <p className="font-bold">{label}</p>
          <p>{content}</p>
        </div>
      </div>
    );
  };
const ContactFormSection = () => {

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();

    const [feedback, setfeedback] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const { refreshToken} = useTokenRefresh()
  
    useEffect(() => {
      refreshToken();
      handleSubmit();
    }, [])

    const handleFeedbackChange = (e) => {
      setfeedback(e.target.value);
    };

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    try {
      const tokenLocal = localStorage.getItem('token');
      const dataLocal = localStorage.getItem('data');
      console.log("userId :", dataLocal.userId)
      const response = await axios.get(`http://localhost:3000/me/${dataLocal.userId}`, {
        headers:{
          "Authorization" : `Bearer ${tokenLocal}`
      }
      });
      setname(response.data.name);
      setemail(response.data.email);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log("getuser", getUsers())
  
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("feedback", feedback)
      try {
          const response = await axios.post("http://localhost:3000/saveFeed", formData, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          window.location.reload()
          console.log("sukses", response)
      } catch {
          console.log("error", formData)
      }
    };


  const handleLoginClick = () => {
    setIsAlertVisible(false);

    navigate('/login');
  };

  const handleCloseAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between ">
      <div className="md:w-1/2 mb-8 md:mb-0 text-center ">
        <div className="mb-4">
          <h1 className="font-bold text-3xl mb-2">Kirim Masukan</h1>
        </div>
        <form className="w-full max-w-lg ml-16">
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Nama"
            value={name}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />

          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            placeholder="Pesan"
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

        <button
                type="submit"
                onClick={handleSubmit}
                className="bg-yellow-500 text-white py-2 px-4 rounded w-full hover:bg-yellow-400"
                >
          Kirim Pesan
        </button>
        </form>
      </div>
      <AlertPopup isVisible={isAlertVisible} onClose={handleCloseAlert} onLogin={handleLoginClick} />

      <div className="md:w-1/2 flex flex-col justify-start">
        <div className="mb-4 text-center">
            <h1 className="font-bold text-3xl mb-2">Atau Hubungi Kami</h1>
        </div>

        <ContactCard
            icon={faMapMarkerAlt}
            label="Alamat"
            content="Jl. Medan Merdeka Selatan No.23 Jakarta 2323"
        />

        <ContactCard
            icon={faPhone}
            label="Phone"
            content="(+62)8123456789"
        />

        <ContactCard
            icon={faEnvelope}
            label="Email"
            content="cosmopolite014@gmail.com"
        />
    </div>

    </section>
  );
};

export default ContactFormSection;
