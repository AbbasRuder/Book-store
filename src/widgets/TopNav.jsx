import profile from '../assets/profile.png'

export default function TopNav() {
    return (
        <div class="px-[30px] pt-[50px] flex justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
                class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div class="">
                <img src={profile} alt="" class='w-7 h-7' />
            </div>
        </div>
    )
}
