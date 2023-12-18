import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useTokenRefresh from "../../../controllers/useToken";

const KategoriAll = () => {
  const [kategori, setKategori] = useState([]);
  const { data,axiosJWT, token, refreshToken } = useTokenRefresh();
  const navigate = useNavigate();

  useEffect(() => {
    getKategori();
    refreshToken();
  }, []);

  const getKategori = async () => {
    try {
      const response = await axios.get("http://localhost:3000/kategori");
      setKategori(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (kategoriId) => {
    try {
      const token = localStorage.getItem('token');
      await axiosJWT.delete(`http://localhost:3000/deletekategori/${kategoriId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getKategori();
    } catch (error) {
      console.log(error);
    }
  };

  const KategoriData = () => {
    return kategori.length;
  };

  let counterid = 1;
  const datatabel = kategori.map((item) => ({
    id: counterid++,
    title: item.title,
    content: item.subtitle,
    action: "",
    item_id: item.id,
  }));

  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Judul", selector: "title", sortable: true },
    { name: "Content", selector: "content", sortable: true },
    {
      name: "Action",
      selector: "action",
      sortable: true,
      cell: (row) => (
        <div>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDelete(row.item_id)}
            style={{ cursor: "pointer", marginRight: "10px" }}
          />
          <a href={`/kategoriedit/${row.item_id}`}>
            <FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} />
          </a>
        </div>
      ),
    },
  ];

  const handleaddkategori = () => {
    navigate('/kategoriadminadd')
  }

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
      
      <main className="ml-60  max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10">All Data For this Kategori</h1>
              <hr className="my-10" />

              <button className="h-full bg-yellow-700" onClick={handleaddkategori}>Add</button>
              <div className="h-full  mt-14 mb-10">
                <section className="p-8 ">
                  <h1 className="pb-3 font-semibold text-xl text-gray-900">Kategori List</h1>
                  <DataTable columns={columns} data={datatabel} pagination highlightOnHover />
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    
  );
};

export default KategoriAll;
