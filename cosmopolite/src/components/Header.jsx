import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTokenRefresh from '../controllers/useToken';

const MainHeader = ({bg, bgnav}) => {
    const navigate = useNavigate()
    // const { data,  refreshToken } = useTokenRefresh()

    // useEffect(() => {
    //   refreshToken()
    // }, [])

    const Logout = async () => {
      try {
        //await axios.delete('http://localhost:3000/logout')     
        localStorage.removeItem('token');
        localStorage.removeItem('data'); 
        navigate('/');
      } catch(error) {
        console.log(error)
      }
    }

    

    const handlehome = () => {
        navigate('/home')
    }

  return (
    <div className={`myHeader py-10 flex justify-between items-center ${bgnav} pl-11 pr-11`}>
      <h1 className={`${bg} font-bold text-3xl`} onClick={handlehome}>Cosmopolite</h1>

      <div className="flex items-center space-x-4">
        <Link to="/sekilas" className={`${bg} font-bold`}>
          Sekilas
        </Link>

        <Link to="/home" className={`${bg} font-bold`}>
          Fitur
        </Link>

        <Link to="/home" className={`${bg} font-bold`}>
          Kontak
        </Link>

        <Link to="/penggunaan" className={`${bg} font-bold`}>
          Cara Penggunaan
        </Link>

        
        <button onClick={Logout} className={`${bg} font-bold cursor-pointer`}>
            Logout
        </button>
  
      </div>
    </div>
  );
};

export default MainHeader;
