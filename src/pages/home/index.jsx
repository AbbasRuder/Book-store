import { data } from "../../books-data";
import { For, createSignal } from "solid-js";
import { BookCard } from "../../widgets";

const categories = ['All','Novel', 'Crime', 'Science', 'Romance', 'History', 'Literature', 'Fiction', 'Comedy']

export default function Home() {
  const [filteredBooks, setFilteredBooks] = createSignal([...data.books]);
  const [selectedGenre, setSelectedGenre] = createSignal("All");

  const freeBooks = data.books.filter(book => book.type === 'Free')

  const filterBooksByGenre = (selectedGenre) => {
    setSelectedGenre(selectedGenre)
    let filterBooks = []

    if(selectedGenre === 'All') {
      filterBooks = [...data.books]
    } else {
      filterBooks = data.books.filter(book => book.genres.includes(selectedGenre))
    }

    setFilteredBooks(filterBooks)
  }

  return (
    <div class="">
      <div class="my-7 w-5/6 px-[20px]">
        <p class="font-medium text-black_secondary">Welcome back, Bunny!</p>
        <h1 class="text-3xl font-medium text-back_primary">What do you want to read today?</h1>
      </div>

      {/* search */}
      <div class="relative px-[20px] flex items-center">
        <div class="absolute inset-y-0 start-0 flex items-center ps-10 pointer-events-none">
          <svg class="w-4 h-4 text-[#C4C4C4]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          class="block w-full p-2 ps-10 outline-none rounded-lg bg-[#C4C4C426]/15"
          placeholder="Search"
          required
        />
      </div>

      {/* Free books */}
      <div class="mt-4 pl-[20px]">
        <p class="text-2xl font-bold text-black_primary">Free for you</p>
      </div>
      {/*Books card */}
      <div class="mt-3 px-[20px] flex gap-3 overflow-y-scroll">
        <For each={freeBooks}>
          {item => (
            <div class="min-w-48 py-3 px-2 grow bg-white shadow-lg rounded">
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

      <div class="pb-24">
        {/* Discover */}
        <div class="mt-4 pl-[20px]">
          <p class="text-2xl font-bold text-black_primary">Discover</p>
        </div>
        {/* Category tags */}
        <div class="mt-4 px-[20px] flex gap-6 rounded overflow-y-scroll">
          <For each={categories}>
            {(item) => (
              <div
                onClick={() => filterBooksByGenre(item)}
                class={`cursor-pointer ${item === selectedGenre() && 'border-b-2 border-red_primary'}`}>
                {item}
              </div>
            )}
          </For>
        </div>
        {/* Books cards */}
        <div class="mt-4 px-[20px] w-full grid grid-cols-2 gap-3 sm:gap-x-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          <For each={filteredBooks()}>
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
      </div>
    </div>
  )
}