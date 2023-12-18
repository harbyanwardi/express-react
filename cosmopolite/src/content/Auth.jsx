import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import image from '../assets/images/rg.svg'
import image2 from '../assets/images/lg.svg'
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthForm = ({ type }) => {
    const [isLogin, setIsLogin] = useState(type === 'login');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [userrole, setRole] = useState('');
    const [token, setToken] = useState('');
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [msg, setMsg] = useState('')

    const handleemail = (e) => {
        setemail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
      const response = await axios.post('http://localhost:3000/login', {
          email: email,
          password: password
      });
  
      setRole(response.data.role)
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('role', response.data.role.toLowerCase());
     
      if (response.data.role.toLowerCase() === "admin") {
          navigate('/admin');
      } else if (response.data.role.toLowerCase() === "pengguna") {
          navigate('/home');
      } else {
          setMsg("email Tidak Ditemukan");
      }
      } catch (error) {
      if (error.response) {
          console.log('Error Response:', error.response.data);
          setMsg(error.response.data.msg);
      }
      }
  };

    const Register = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3000/register', {
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
          });
          window.location.reload()
          } catch (error) {
          setMsg(error.response.data.msg);
          }
      };

    useEffect(() => {
      if (msg !== null && msg.trim() !== '') {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    }, [msg]);


    useEffect(() => {
      handleLogin();
      Register();
    }, [])

    const toggleFormType = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
      };
      
      return (
        <div className="flex justify-center items-center bg-gray-300 rounded-xl shadow-lg ">
          <div className="w-full flex">
            <div className="w-1/2 bg-gray-300 shadow-md rounded-xl p-8">
              <div className="flex justify-center mb-8">
                {isLogin ? <img src={image} alt="" /> : <img src={image2} alt="" />}
              </div>
            </div>
      
            <div className="w-1/2 bg-gray-300 shadow-md rounded-xl p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-yellow-400 mb-7">
                  {isLogin ? 'Login' : 'Register'}
                </h2>
      
                <p className="text-center mb-7">
                  <button
                    onClick={toggleFormType}
                    className={`text-blue-500 hover:underline focus:outline-none ${isLogin ? 'bg-yellow-500' : ''}`}
                  >
                    Login
                  </button>
                  {' '}
                  |
                  {' '}
                  <button
                    onClick={toggleFormType}
                    className={`text-blue-500 hover:underline focus:outline-none ${!isLogin ? 'bg-yellow-500' : ''}`}
                  >
                    Register
                  </button>
                </p>
      
              </div>
              <form >
              {showAlert && (
              <div className="flex items-center bg-yellow-200 text-white text-sm font-bold px-4 py-3" role="alert">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
                </svg>
                <p>{msg}</p>
              </div>
            )}
                {isLogin ? (
                  <>
                    {/* Form login content */}
                    <div className="mb-4">
                      <input
                        type="email"
                        id="formBasicEmail"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleemail}
                        required
                      />
                    </div>
      
                    <div className="mb-4">
                      <input
                        type="password"
                        id="formBasicPassword"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Form register content */}
                    <div className="mb-4">
                      <input
                        type="text"
                        id="NamaLengkap"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        placeholder="Nama Lengkap"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
      
                    <div className="mb-4">
                      <input
                        type="email"
                        id="formBasicEmail"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleemail}
                        required
                      />
                    </div>
      
                    <div className="mb-4">
                      <input
                        type="password"
                        id="formBasicPassword"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="password"
                        id="formBasicConfirmPassword"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}
      
                <div className="mb-4">
                {isLogin ? <button
                    type="submit"
                    onClick={handleLogin}
                    className="bg-yellow-500 text-white py-2 px-4 rounded-xl w-full hover:bg-yellow-400"
                  >
                    Login
                  </button> : 
                  <button
                  type="submit"
                  onClick={Register}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-xl w-full hover:bg-yellow-400"
                >
                  Register
                </button>}
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}      
export default AuthForm;