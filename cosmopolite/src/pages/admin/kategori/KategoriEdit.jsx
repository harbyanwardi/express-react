import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useTokenRefresh from "../../../controllers/useToken";

const KategoriEdit = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const navigate = useNavigate();
  const { token, refreshToken} = useTokenRefresh()
  const {id} = useParams()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlesubtitleChange = (e) => {
    setsubtitle(e.target.value);
  };


  const getArtikelId = async() => {
    const response = await axios.get(`http://localhost:3000/kategori/${id}`)
    setTitle(response.data.title)
    setsubtitle(response.data.subtitle)
  }


  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("subtitle", subtitle)
    try {
      const token = localStorage.getItem('token');
        const response = await axios.patch(`http://localhost:3000/updatekategori/${id}`, formData, {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization" : `Bearer ${token}`
            }
        })
        console.log("sukses", response)
        navigate('/kategoriadmin')
    } catch {
        console.log("error", formData)
    }
  };

  useEffect(() => {
   getArtikelId();
   refreshToken()
  }, []);

  return (
    <div>
    <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          
          <div className="text-lg font-bold">Hi Admin</div>
          
        </div>
      </div>
    </header>
    <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="px-4 py-6 text-center border-b">
            <h1 className="text-xl font-bold leading-none"><span className="text-yellow-700">Task Manager</span> App</h1>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              
              <li>
                <a href="/kategoriadmin" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                  </svg>Kategori Admin
                </a>
              </li>
              <li>
                <a href="/fituradmin" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                  </svg>Data Fitur
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="p-4">
          <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </button> <span className="font-bold text-sm ml-2">Logout</span>
        </div>
      </div>
    </aside>
    <main className="flex-1 p-8 mt-14 overflow-auto">
      <h1 className="text-3xl font-bold mb-10">Edit Data For this Kategori</h1>
      <hr className="w-full" />
      <div className="h-full ml-14  mb-10 md:ml-64">

        <section className="p-8 ">
          <form className="border-2 border-gray-600 p-8">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subtitle" className="block text-gray-700 text-sm font-bold mb-2">
                Subtitle
              </label>
              <textarea
                id="subtitle"
                name="subtitle"
                value={subtitle}
                onChange={handlesubtitleChange}
                className="border rounded-md py-2 px-3 w-full h-32 focus:outline-none focus:shadow-outline"
              />
            </div>


            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-sm px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white focus:outline-none focus:shadow-outline"
            >
              Edit Artikel
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
  );
};

export default KategoriEdit;
