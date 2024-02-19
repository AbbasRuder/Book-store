import { A } from "@solidjs/router"
import { createSignal } from "solid-js"
import {
  cart,
  setCart,
  bookmark,
  setBookmark,
  setNewCartCount,
  setNewBookmarkCount,
} from "../../store"
import { Icons } from "../../assets/icons"

export default function BookCard(props) {
  const book = cart.filter((item) => item.title === props.title)
  const initialState = book[0] !== undefined
  const [showCart, setShowCart] = createSignal(initialState) //-for toggling the add to cart/remove from cart
  const bookmarkedBooks = bookmark.filter((item) => item.ISBN === props.ISBN)
  const BMinitialState = bookmarkedBooks[0] !== undefined
  const [isBookmarked, setIsBookmarked] = createSignal(BMinitialState)

  const addToCart = () => {
    setShowCart(!showCart())
    setCart((oldCart) => [...oldCart, { ...props, quantity: 1 }])
    setNewCartCount(count => count + 1)
  }

  const deleteFromCart = () => {
    setShowCart(!showCart())
    setCart((oldCart) => oldCart.filter((item) => item.ISBN !== props.ISBN))
    setNewCartCount(count => Math.max(0, count - 1))
  }

  const handleBookmark = () => {
    if (isBookmarked()) {
      setBookmark((bookmarks) =>
        bookmarks.filter((item) => item.ISBN !== props.ISBN)
      )
      setNewBookmarkCount(count => Math.max(0, count - 1))
    } else {
      setBookmark((bookmarks) => [...bookmarks, { ...props }])
      setNewBookmarkCount(count => count + 1);
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
        <p class="text-sm text-dark-secondary font-medium truncate">
          {props.author}
        </p>
        <p class="h-[33px] w-4/5 leading-4 font-semibold">
          {props.title}
        </p>
      </div>
      <div class="ml-2 flex justify-between items-center">
        <p class={`text-lg font-semibold ${props.price === "Free" ? 'text-secondary' : 'text-primary'}`}>
          {props.price !== "Free" && '₹'}{props.price}
        </p>
        <div class="flex items-center gap-2">
          {showCart() ? (
            <Icons.CrossIcon
              class="w-8 h-8 cursor-pointer text-green-400 bg-white rounded-full"
              onClick={deleteFromCart}
            />
          ) : (
            <Icons.PlusIcon
              class="w-8 h-8 cursor-pointer text-primary bg-white rounded-full"
              onClick={addToCart}
            />
          )}
          {/* bookmark icon */}
          <Icons.BookmarkIcon
            fill={`${isBookmarked() ? "currentcolor" : "none"}`}
            class={`w-8 h-8 cursor-pointer text-primary`}
            onClick={handleBookmark}
          />
        </div>
      </div>
    </>
  )
}
