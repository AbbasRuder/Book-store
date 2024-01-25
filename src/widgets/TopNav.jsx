import icon from '../assets/book-icon2.png'
import { A } from '@solidjs/router'
import { newCartAdded } from '../store'

export default function TopNav() {
    return (
        <div class="px-[20px] pt-[50px] flex justify-between">
            <div class='flex items-center gap-2'>
                <img src={icon} alt="" class='w-8 h-8' />
                <p class='text-xl font-bold'>Bookify</p>
            </div>

            <div class="flex gap-5 justify-center items-center">
                <A href='/cart' class='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                        <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                    </svg>
                    <div class={`${newCartAdded() && 'absolute bottom-0 right-0 w-2 h-2 rounded-full bg-red-500'}`}>
                    </div>
                </A>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mt-1 w-8 h-8">
                    <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    )
}
