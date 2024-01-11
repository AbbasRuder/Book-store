import { A } from "@solidjs/router"

export default function ScrollableCard(props) {
    return (
        <For each={props.books}>
            {(item) => (
                // <A href={`/${item.ISBN}`}>
                    <div class="min-w-32 p-3 bg-white shadow-lg rounded">
                        <img src={item.image} alt="book cover" class="w-28 h-40 shadow shadow-black/70 rounded" />
                        <div class="mt-3">
                            <p class="truncate text-black_primary font-semibold">{item.title}</p>
                            <p class="text-xs text-black_secondary font-medium truncate">{item.author}</p>
                        </div>
                    </div>
                // </A>
            )}
        </For>
    )
}
