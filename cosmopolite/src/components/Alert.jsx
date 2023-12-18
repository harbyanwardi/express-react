// eslint-disable-next-line react/prop-types, no-unused-vars
const AlertPopup = ({ isVisible, onClose, onLogin }) => {
    return isVisible ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
          <div className="bg-white rounded-md p-16">
            <p className="text-black text-2xl font-bold mb-4 opacity-100 ">OOPS...</p>
            <p className="text-black text-2xl font-bold mb-4 opacity-100 ">MOHON MAAF</p>
            <button className="bg-yellow-400 text-white font-bold px-4 py-2 rounded opacity-100" onClick={onLogin}>
              Ayo Login
            </button>
            <button className="ml-4 text-gray-500  opacity-100" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      ) : null;
  };
  
  export default AlertPopup;
  