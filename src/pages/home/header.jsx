import icon from '../../assets/book-icon2.png'
import { A } from '@solidjs/router'
import { newCartCount } from '../../store'
import { Icons } from '../../assets/icons'

export default function Header() {
    return (
        <div class="px-[20px] pt-[20px] flex justify-between">
            <div class='flex items-center gap-2'>
                <img src={icon} alt="" class='w-8 h-8' />
                <p class='text-2xl font-bold'>Bookify</p>
            </div>

            <div class="flex gap-5 justify-center items-center">
                <A href='/cart' class='relative'>
                    <Icons.CartIcon class="w-8 h-8" />
                    <div class={`${newCartCount() > 0 && 'absolute bottom-0 right-0 w-2 h-2 rounded-full bg-red-500'}`}></div>
                </A>
                <Icons.NotificationIcon class="mt-1 w-8 h-8"/>
            </div>
        </div>
    )
}
