import { data } from "../books-data"
import { subscribedBooks } from "../store"
import { createSignal } from "solid-js"
import { useNavigate } from "@solidjs/router"
import not_Found_img from '../assets/book-not-found.svg'
import BottomNav from "../widgets/BottomNav"
import ScrollableCard from "../widgets/ScrollableCard"

const genres = [
  "All",
  "Novel",
  "Crime",
  "Science",
  "Drama",
  "Romance",
  "History",
  "Literature",
  "Fiction",
  "Comedy",
]

export default function ExploreBooks() {
  // const [allBooks] = createSignal([...subscribedBooks]);
  // const [filteredBooks, setFilteredBooks] = createSignal([...subscribedBooks]);
  const [allBooks] = createSignal([...data.books]);
  const [filteredBooks, setFilteredBooks] = createSignal([...data.books]);
  const [selectedGenre, setSelectedGenre] = createSignal("All");
  const [selectedPriceType, setSelectedPriceType] = createSignal("All");

  const navigate = useNavigate()

  const applyFilters = () => {
    const genre = selectedGenre();
    const priceType = selectedPriceType();
    const books = allBooks().filter((book) => {
      const genreMatch = genre === "All" || book.genres.includes(genre);
      const priceTypeMatch = priceType === "All" || book.type === priceType;
      return genreMatch && priceTypeMatch;
    });
    setFilteredBooks(books);
  };

  const filterBooksByPriceType = (priceType) => {
    setSelectedPriceType(priceType);
    applyFilters();
  };

  const filterBooksByGenre = (genre) => {
    setSelectedGenre(genre);
    applyFilters();
  };
  return (
    <>
      <div class="px-[20px] pt-[50px]">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            {/* go back icon */}
            <div onClick={() => navigate("/home", { replace: true })}>
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
            <p class="text-2xl font-semibold">Explore</p>
          </div>

          {/* Filter (free/paid) */}
          <select
            class="p-2.5 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => filterBooksByPriceType(e.target.value)}
          >
            <option value="All" selected>
              All Books
            </option>
            <option value="Free">Free Books</option>
            <option value="Paid">Paid Books</option>
          </select>
        </div>

        {/* genres filter */}
        <div class="mt-6 flex gap-6 rounded overflow-y-scroll">
          <For each={genres}>
            {(item) => (
              <div
                onClick={() => filterBooksByGenre(item)}
                class={`cursor-pointer ${
                  selectedGenre() === item && "border-b-2 border-red_primary"
                }`}
              >
                {item}
              </div>
            )}
          </For>
        </div>

        {/* books card */}
        {filteredBooks().length === 0 ? (
         <div class="">
         <img src={not_Found_img} alt="" class="mx-auto w-2/3 xs:w-1/2 sm:w-80" />
         <p class="text-center text-lg">No books found</p>
       </div>
        ) : (
          <div class="mt-3 pb-24 w-full grid grid-cols-2 gap-3 sm:gap-x-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          <For each={filteredBooks()}>
            {(item) => (
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
        )}
      </div>
      <BottomNav />
    </>
  )
}
