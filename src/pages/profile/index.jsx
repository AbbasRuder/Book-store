import { useNavigate } from "@solidjs/router"
import { BottomTab, Button } from "../../widgets"
import profileImg from "../../assets/profile.png"
import { userIcon, emailIcon } from "../../assets/icons/icons"

export default function Profile() {
  const navigate = useNavigate()

  return (
    <>
      <div class="px-[20px] pt-[20px]">
        <p class="text-2xl font-bold">Profile</p>
        <div class="mt-6 flex flex-col items-center justify-center relative">
          <img
            src={profileImg}
            alt="profile"
            class="w-32 z-10 rounded-full shadow-lg"
          />
          <div class="absolute top-20 w-full py-14 flex flex-col items-center rounded bg-dark-primary/20">
            <div class="w-4/5 flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <img src={userIcon} alt="" class="w-7 h-7" />
                <p class="">Bunny Sharma</p>
              </div>
              <div class="flex items-center gap-2 ">
                <img src={emailIcon} alt="" class="w-7 h-7" />
                <p class="">Bunnysharma@gmail.com</p>
              </div>
              <Button
                class="mt-8"
                onClick={() => navigate("/login")}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BottomTab />
    </>
  )
}
