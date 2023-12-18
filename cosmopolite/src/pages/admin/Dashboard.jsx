import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTokenRefresh from '../../controllers/useToken';
import LayoutAdmin from './components/LayoutAdmin'
import HomeAdmin from './components/Home'

const Dashboard = () => { 
    const navigate = useNavigate()
    const {data, refreshToken} = useTokenRefresh()

    useEffect(() => {
        refreshToken()
    }, [])
    //const data = localStorage.getItem('data');
    console.log(data)

    if (data.role !== 'admin') {
        return navigate('/')
    }

    return (
        <><LayoutAdmin /></>
      );
  };
  
  export default Dashboard;
  