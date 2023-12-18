import MainFooter from "../components/Footer"
import MainHeader from "../components/Header"
import SekilasCotent from "../content/Sekilas"

const Sekilas = () => {
    return (
        <>
        <div className="overflow-x-hidden">
        <MainHeader bg="text-black" bgnav="bg-yellow-500" />
        <SekilasCotent />
        <MainFooter bg="bg-yellow-500" bgtext="text-white" bgicon="text-white" />
        </div>
        </>
    )
}

export default Sekilas