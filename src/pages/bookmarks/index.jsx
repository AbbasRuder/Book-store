import { For } from "solid-js"
import { useNavigate } from "@solidjs/router"
import { bookmark, setNewBookmarkAdded } from "../../store"
import { BookCard, BottomTab } from "../../widgets"

export default function Bookmarks() {
    const navigate = useNavigate()
    setNewBookmarkAdded(false)

    return (
        <>
            <div class="px-[20px] pt-[20px]">
                <p class="text-2xl font-bold">Bookmarks</p>
                {bookmark.length === 0 ?
                    (
                        <div class="mt-6 text-lg">
                            No Bookmarks added yet.
                        </div>
                    ) :
                    (
                        <div class="mt-6 pb-24 w-full grid grid-cols-2 gap-3 sm:gap-x-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
                            <For each={bookmark}>
                                {item => (
                                    <div class="min-w-44 py-3 px-2 grow bg-white shadow-lg rounded">
                                        <BookCard
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
                    )
                }
            </div >
            <BottomTab />
        </>
    )
}
