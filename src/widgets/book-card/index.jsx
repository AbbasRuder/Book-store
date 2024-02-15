import { A } from "@solidjs/router"
import image from "../../assets/book.jpg"
import { createSignal } from "solid-js"
import {
  cart,
  setCart,
  setNewCartAdded,
  bookmark,
  setBookmark,
  setNewBookmarkAdded,
} from "../../store"

export default function BookCard(props) {
  const book = cart.filter((item) => item.title === props.title)
  const initialState = book[0] !== undefined
  const [showCart, setShowCart] = createSignal(initialState) //-for toggling the add-cart/remove cart icon
  const bookmarkedBooks = bookmark.filter((item) => item.ISBN === props.ISBN)
  const BMinitialState = bookmarkedBooks[0] !== undefined
  const [isBookmarked, setIsBookmarked] = createSignal(BMinitialState) //-for coloring the bookmark icon

  const addToCart = () => {
    setShowCart(!showCart())
    setCart((oldCart) => [...oldCart, { ...props, quantity: 1 }])
    setNewCartAdded(true)
  }

  const deleteFromCart = () => {
    setShowCart(!showCart())
    setCart((oldCart) => oldCart.filter((item) => item.ISBN !== props.ISBN))
    // setNewCartAdded(false)
  }

  const handleBookmark = () => {
    if (isBookmarked()) {
      setBookmark((bookmarks) =>
        bookmarks.filter((item) => item.ISBN !== props.ISBN)
      )
      // setNewBookmarkAdded(false)
    } else {
      setBookmark((bookmarks) => [...bookmarks, { ...props }])
      setNewBookmarkAdded(true)
    }
    setIsBookmarked(!isBookmarked())
  }

  return (
    <>
      <A href={`/${props.ISBN}`} class="relative">
        <img
          src={props.image}
          alt="book cover"
          class="w-26 h-40 sm:h-52 mx-auto shadow shadow-black/70 rounded"
        />
      </A>

      <div class="mt-3 ml-2">
        <p class="text-sm text-black_secondary font-medium truncate">
          {props.author}
        </p>
        <p class="h-[33px] w-4/5 text-black_primary leading-4 font-semibold">
          {props.title}
        </p>
      </div>
      <div class="ml-2 flex justify-between items-center">
        <p class={`text-lg font-semibold ${props.price === "Free" ? 'text-green-600' : 'text-red_primary'}`}>
          {props.price !== "Free" && '₹'}{props.price}
        </p>
        <div class="flex items-center gap-2">
          {showCart() ? (
            // cross icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8 cursor-pointer text-green-400 bg-white rounded-full"
              onClick={deleteFromCart}
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            // plus icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8 cursor-pointer text-red_primary bg-white rounded-full"
              onClick={addToCart}
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clip-rule="evenodd"
              />
            </svg>
          )}
          {/* bookmark icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={`${isBookmarked() ? "currentcolor" : "none"}`}
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class={`w-8 h-8 cursor-pointer text-red_primary`}
            onClick={handleBookmark}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  )
}
