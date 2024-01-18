import image from "../assets/book.jpg"
import { data } from "../books-data";
import { bookmark, setBookmark } from "../store";
import { useParams } from "@solidjs/router";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function BookDetails() {
  const [seeMore, setSeeMore] = createSignal(true)
  const { id } = useParams()
  const navigate = useNavigate()

  const selectedBook = data.books.filter(item => item.ISBN === parseInt(id))[0]

  const bookmarkedBooks = bookmark.filter(item => item.ISBN === selectedBook.ISBN)
  const BMinitialState = bookmarkedBooks[0] !== undefined
  const [isBookmarked, setIsBookmarked] = createSignal(BMinitialState)
  
  const handleBookmark = () => {
    if(isBookmarked()) {
      setBookmark(bookmarks => bookmarks.filter(item => item.ISBN !== selectedBook.ISBN))
    } else {
      setBookmark(bookmarks => [...bookmarks, {...selectedBook}])
    }
    setIsBookmarked(!isBookmarked())
  }

  return (
    <>
      <div class="h-screen mx-8 pt-[50px]">
        {/* navigation */}
        <div class="flex justify-between">
          <div onClick={() => navigate("/home", { replace: true })}>
            {/* go back icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="cursor-pointer w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          {/* bookmark icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill={`${isBookmarked() ? 'currentcolor' : 'none'}`} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
            class="cursor-pointer w-6 h-6 text-red_primary"
            onClick={handleBookmark}
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
        </div>

        {/* book details */}
        <div class="flex flex-col justify-center items-center">
          <img
            // src={selectedBook.image}
            src={image}
            alt="book cover"
            class="w-44 rounded-xl shadow-lg shadow-black/30"
          />
          <div class="mt-4">
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">{selectedBook.title}</p>
              <p class="text-black_secondary">{selectedBook.author}</p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <span class="text-lg font-bold">Overview</span>
          <p class={`mt-1 text-sm leading-5 text-black_secondary ${seeMore() && "line-clamp-5"}`}>
            {selectedBook.summary}
          </p>
          <div
            class="text-sm text-red_primary/70"
            onClick={() => setSeeMore(!seeMore())}
          >
            {seeMore() ? "see more" : "see less"}
          </div>
          <div class="pb-20 mt-4 flex gap-3">
            <div class="flex items-center gap-1 bg-amber-400 w-20 py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mt-1 w-5 h-4">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <p class="font-semibold">Listen</p>
            </div>
            <div class="flex items-center gap-1 bg-amber-400 w-20 py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mt-1 w-5 h-4.5">
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <p class="font-semibold">Read</p>
            </div>
          </div>
        </div>

      </div>
      <div class="fixed w-full pb-4 bottom-0 flex gap-2 justify-center items-center text-xs bg-white">
        <button class="w-32 py-3 rounded-lg font-semibold text-lg text-white bg-red_primary">Buy for ₹20</button>
      </div>
    </>
  );
}
