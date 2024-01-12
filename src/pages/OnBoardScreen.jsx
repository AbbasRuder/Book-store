import svg from '../assets/onboardsvg.svg'
import { useNavigate } from '@solidjs/router'

export default function OnBoardScreen() {
    const navigate = useNavigate()

    return (
        <div class='h-screen flex flex-col justify-center items-center gap-10'>
            <img src={svg} class='mx-8' />
            <div class='mx-10 flex flex-col gap-2 justify-center items-center'>
                <p class='text-lg font-semibold'>Read your favourite books</p>
                <p class='text-xs text-center text-black_secondary'>All your favourites book in one place, read any book, staying at home, on travelling, or anywhere else</p>
            </div>
            <button
                class='mt-10 py-3 px-14 rounded-lg font-semibold bg-red_primary text-white'
                onClick={() => navigate("/home", { replace: true })}
            >
                Sign Up
            </button>
        </div>
    )
}
