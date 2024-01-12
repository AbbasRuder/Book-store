import { data } from "../../books-data";
import { For } from "solid-js";
import ScrollableCard from "../widgets/ScrollableCard";

const categories = ['Novel', 'Crime', 'Science', 'Romance', 'History', 'Literature']

export default function Home() {
  return (
    <div class="">
      <div class="my-7 w-5/6 px-[30px]">
        <p class="text-xs font-medium text-black_secondary">Welcome back, Bunny!</p>
        <h1 class="text-xl font-medium text-back_primary">What do you want to do read today?</h1>
      </div>

      {/* search */}
      <div class="relative px-[30px] flex items-center">
        <div class="absolute inset-y-0 start-0 flex items-center ps-12 pointer-events-none">
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
      <div class="my-7 px-[30px] flex gap-6 rounded overflow-y-scroll text-xs">
        <For each={categories}>
          {(item, index) => (
            <div class={`${index() === 1 && 'border-b-2 border-red_primary'}`}>
              {item}
            </div>
          )}
        </For>
      </div>

      {/*Books card */}
      <div class="mt-3 px-[30px] flex gap-3 overflow-y-scroll">
        <ScrollableCard books={data.books} />
      </div>

      {/* New Arrivals */}
      <div class="pb-20">
        <div class="mt-4 mb-3 pl-[30px]">
          <p class="text-lg font-bold text-black_primary">New Arrivals</p>
        </div>
        {/* books cards */}
        <div class="mt-3 px-[30px] flex flex-wrap gap-3">
          <ScrollableCard books={data.books} />
        </div>
      </div>
    </div>
  )
}
