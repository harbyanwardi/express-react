import MainFooter from "../components/Footer"
import MainHeader from "../components/Header"
import PenggunaanCotent from "../content/Penggunaan"

const Penggunaan = () => {
    return (
        <>
        <div className="overflow-x-hidden">
        <MainHeader bg="text-black" bgnav="bg-gray-50" />
        <PenggunaanCotent />
        <MainFooter bg="bg-gray-200" bgtext="text-black" bgicon="text-black" />
        </div>
        </>
    )
}

export default Penggunaan