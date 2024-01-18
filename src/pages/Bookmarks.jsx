import { For } from "solid-js"
import { useNavigate } from "@solidjs/router"
import { bookmark } from "../store"
import ScrollableCard from "../widgets/ScrollableCard"
import BottomNav from "../widgets/BottomNav"

export default function Bookmarks() {
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
                            stroke-width="1"
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
                    <p class="text-2xl font-semibold">Bookmarks</p>
                </div>
                <div class="mt-6 pb-24 w-full grid grid-cols-2 gap-3 sm:gap-x-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
                    <For each={bookmark}>
                        {item => (
                            <div class="min-w-44 py-3 px-2 grow bg-white bg-slate-200 shadow-lg rounded">
                                <ScrollableCard
                                    image={item.image}
                                    title={item.title}
                                    author={item.author}
                                    ISBN={item.ISBN}
                                    price={item.price}
                                />
                            </div>
                        )}
                    </For>
                </div>
            </div>
            {bookmark.length === 0 && (
                <div class="px-[20px] text-lg">
                    No Bookmarks added yet.
              </div>
            )}
            <BottomNav />
        </>
    )
}
