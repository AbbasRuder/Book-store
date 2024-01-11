import icon from '../assets/book-icon.png'
import profile from '../assets/profile.png'

export default function TopNav() {
    return (
        <div class="pb-2 flex justify-between border-b">
            <div class="flex gap-2 items-center">
                <div class='flex items-center gap-2'>
                    <img src={icon} alt="icon" class='w-5 h-5' />
                    <h1 class="font-semibold">
                        Book Store
                    </h1>
                </div>
            </div>
            <div class="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <img src={profile} alt="" class='w-6 h-6'/>
            </div>
        </div>
    )
}
