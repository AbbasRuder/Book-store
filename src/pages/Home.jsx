import image from "../assets/book.jpg"
import { For } from "solid-js";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div class="h-full mt-4 mb-12">
      {/* Popular books */}
      <div class="bg-white shadow-lg p-3 rounded">
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-semibold text-slate-400">Popular Books</h1>
          <A href="/explore">
            <p class="text-sm text-red-500">More</p>
          </A>
        </div>
        {/* books card */}
        <div class="mt-3 flex gap-3 overflow-y-scroll">

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-lg" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

        </div>
      </div>

      {/* Newest books */}
      <div class="mt-4 p-3 bg-white shadow-lg rounded">
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-semibold text-slate-400">Newest Books</h1>
          <p class="text-sm text-red-500">More</p>
        </div>
        {/* books card */}
        <div class="mt-3 flex gap-3 overflow-y-scroll">

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-lg" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

          <div class="w-28">
            <img src={image} alt="book cover" class="w-full rounded shadow-xl" />
            <div class="mt-2">
              <p class="text-xs text-gray-400 truncate">Terry Brooks</p>
              <p class="truncate">Bloodfire Quest</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
