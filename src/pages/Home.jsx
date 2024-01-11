import image from "../assets/book.jpg"
import { data } from "../../books-data";
import { For } from "solid-js";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div class="">

      <div class="my-7 w-5/6">
        <p class="text-xs font-medium text-black_secondary">Welcome back, Bunny!</p>
        <h1 class="text-xl font-medium text-back_primary">What do you want to do read today?</h1>
      </div>

      {/* search */}
      <div class="relative flex items-center">
        <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
          <svg class="w-3 h-3 text-[#C4C4C4]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          class="block w-full p-2 ps-10 text-xs text-gray-900 outline-none rounded-lg bg-[#C4C4C426]/15"
          placeholder="Search"
          required
        />
      </div>

      {/* category */}
      <div class="my-7 flex gap-6 rounded overflow-y-scroll text-xs">
        <div class="">
          Novel
        </div>
        <div class="border-b-2 border-red_primary">
          Crime
        </div>
        <div class="">
          Science
        </div>
        <div class="">
          Romance
        </div>
        <div class="">
          History
        </div>
        <div class="">
          Literature
        </div>
      </div>


      {/*Books card */}
      <div class="mt-3 flex gap-3 overflow-y-scroll">
        <For each={data.books}>
          {(item) => (
            <div class="min-w-32 p-3 bg-white shadow-lg rounded">
              <img src={image} alt="book cover" class="w-28 h-40 shadow shadow-black/70 rounded" />
              <div class="mt-3">
                <p class="truncate text-black_primary font-semibold">{item.title}</p>
                <p class="text-xs text-black_secondary font-medium truncate">{item.author}</p>
              </div>
            </div>
          )}
        </For>
        <div class="w-32 p-3 bg-white shadow-lg rounded">
          <img src={image} alt="book cover" class="w-full shadow shadow-black/70 rounded" />
          <div class="mt-3">
            <p class="truncate text-black_primary font-semibold">Bloodfire Quest</p>
            <p class="text-xs text-black_secondary font-medium truncate">Terry Brooks</p>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div class="pb-20">
        <div class="mt-4 mb-3">
          <p class="text-lg font-bold text-black_primary">New Arrivals</p>
        </div>
        <div class="mt-3 flex gap-3 overflow-y-scroll">
          <div class="w-32 p-3 bg-white shadow-lg rounded">
            <img src={image} alt="book cover" class="w-full shadow shadow-black/70 rounded" />
            <div class="mt-3">
              <p class="truncate text-black_primary font-semibold">Bloodfire Quest</p>
              <p class="text-xs text-black_secondary font-medium truncate">Terry Brooks</p>
            </div>
          </div>
          <div class="w-32 p-3 bg-white shadow-lg rounded">
            <img src={image} alt="book cover" class="w-full shadow shadow-black/70 rounded" />
            <div class="mt-3">
              <p class="truncate text-black_primary font-semibold">Bloodfire Quest</p>
              <p class="text-xs text-black_secondary font-medium truncate">Terry Brooks</p>
            </div>
          </div>
          <div class="w-32 p-3 bg-white shadow-lg rounded">
            <img src={image} alt="book cover" class="w-full shadow shadow-black/70 rounded" />
            <div class="mt-3">
              <p class="truncate text-black_primary font-semibold">Bloodfire Quest</p>
              <p class="text-xs text-black_secondary font-medium truncate">Terry Brooks</p>
            </div>
          </div>
          <div class="w-32 p-3 bg-white shadow-lg rounded">
            <img src={image} alt="book cover" class="w-full shadow shadow-black/70 rounded" />
            <div class="mt-3">
              <p class="truncate text-black_primary font-semibold">Bloodfire Quest</p>
              <p class="text-xs text-black_secondary font-medium truncate">Terry Brooks</p>
            </div>
          </div>
          <div class="w-32 p-3 bg-white shadow-lg rounded">
            <img src={image} alt="book cover" class="w-full shadow shadow-black/70 rounded" />
            <div class="mt-3">
              <p class="truncate text-black_primary font-semibold">Bloodfire Quest</p>
              <p class="text-xs text-black_secondary font-medium truncate">Terry Brooks</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
