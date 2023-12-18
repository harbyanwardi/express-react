import { useEffect } from "react"
import MainFooter from "../components/Footer"
import MainHeader from "../components/Header"
import HomeCotent from "../content/Home"
import useTokenRefresh from "../controllers/useToken"

const Home = () => {
    const { refreshToken } = useTokenRefresh()

    useEffect(() => {
      refreshToken()
    }, [])
    return (
        <>
        <div className="overflow-x-hidden">
        <MainHeader bg="text-black" bgnav="bg-gray-50" />
        <HomeCotent />
        <MainFooter bg="bg-gray-200" bgtext="text-black" bgicon="text-black" />
        </div>
        </>
    )
}

export default Home