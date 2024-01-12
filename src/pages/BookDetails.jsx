import image from "../assets/book.jpg"
import { data } from "../../books-data";
import { useParams } from "@solidjs/router";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function BookDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [seeMore, setSeeMore] = createSignal(true)

  const selectedBook = data.books.filter(item => item.ISBN === parseInt(id))[0]

  return (
    <>
      <div class="h-screen mx-8 pt-[50px]">
        <div class="flex justify-between">
          <div onClick={() => navigate("/home", { replace: true })}>
            {/* go back icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          {/* bookmark icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
        </div>

        <div class="flex flex-col justify-center items-center">
          <img
            src={selectedBook.image}
            alt="book cover"
            class="w-40 rounded-xl shadow-lg shadow-black/20"
          />
          <div class="mt-4">
            <div class="flex flex-col items-center leading-4">
              <p class="text-lg font-semibold">{selectedBook.title}</p>
              <p class="text-black_secondary">{selectedBook.author}</p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <span class="text-lg font-semibold">Overview</span>
          <p class={`mt-1 text-xs leading-5 text-black_secondary ${seeMore() && "line-clamp-5"}`}>
            {selectedBook.summary}
          </p>
          <div
            class="pb-20 text-xs text-red_primary/70"
            onClick={() => setSeeMore(!seeMore())}
          >
            {seeMore() ? "see more" : "see less"}
          </div>
        </div>

      </div>
      <div class="fixed w-full pb-4 bottom-0 flex gap-2 justify-center items-center text-xs bg-white">
        <button class="w-32 py-3 rounded-lg font-semibold bg-red_primary text-white">Read Previews</button>
        <button class="w-32 py-3 rounded-lg font-semibold bg-black_primary text-white">Buy for 20$</button>
      </div>
    </>
  );
}
