import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sekilas from './pages/Sekilas'
import Penggunaan from './pages/Penggunaan'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import Dashboard from './pages/admin/Dashboard'
import KategoriAll from './pages/admin/kategori/kategoriAll'
import KategoriAdd from './pages/admin/kategori/KategoriAdd'
import KategoriEdit from './pages/admin/kategori/KategoriEdit'
import FiturAll from './pages/admin/fitur/FiturAll'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sekilas' element={<Sekilas />} />
        <Route path='/penggunaan' element={<Penggunaan />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/kategoriadmin' element={<KategoriAll />} />
        <Route path='/kategoriadminadd' element={<KategoriAdd />} />
        <Route path='/kategoriedit/:id' element={<KategoriEdit />} />
        <Route path='/fituradmin' element={<FiturAll />} />
      </Routes>
    </Router>
  )
}

export default App
