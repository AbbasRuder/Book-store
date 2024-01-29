import profileImg from "../assets/profile.png"
import { useNavigate } from "@solidjs/router"
import BottomNav from "../widgets/BottomNav"
import { userIcon, emailIcon } from "../assets/icons/icons"

export default function Profile() {
    const navigate = useNavigate()
    
    return (
        <>
            <div class="px-[20px] pt-[50px]">
                <div class="flex items-center gap-4">
                    <div onClick={() => navigate("/home", { replace: true })}>
                        {/* go back icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 cursor-pointer"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </div>
                    <p class="text-2xl font-semibold">Profile</p>
                </div>
                <div class="mt-6 flex flex-col items-center justify-center relative">
                    <img src={profileImg} alt="profile" class="w-32 z-10 rounded-full shadow-lg" />
                    <div class="absolute top-20 w-full py-14 flex flex-col items-center rounded bg-slate-200">
                        <div class="w-4/5 flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <img src={userIcon} alt="" class="w-7 h-7" />
                                <p class="">Bunny Sharma</p>
                            </div>
                            <div class="flex items-center gap-2 ">
                                <img src={emailIcon} alt="" class="w-7 h-7" />
                                <p class="">Bunnysharma@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav />
        </>
    )
}
