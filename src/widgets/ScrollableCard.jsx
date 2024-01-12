import { A } from "@solidjs/router"
import image from "../assets/book.jpg"

export default function ScrollableCard(props) {

    return (
        <For each={props.books}>
            {(item) => (
                <A href={`/${item.ISBN}`} class="min-w-[128px] py-3 px-2 grow bg-white shadow-lg rounded">
                    <img src={item.image} alt="book cover" class="w-26 h-52 mx-auto shadow shadow-black/70 rounded" />
                    <div class="mt-3 ml-2">
                        <p class="text-black_primary font-semibold">{item.title}</p>
                        <p class="text-sm text-black_secondary font-medium truncate">{item.author}</p>
                    </div>
                </A>
            )}
        </For>
    )
}
