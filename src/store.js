// store.js
import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"

const [cart, setCart] = createStore([])
const [bookmark, setBookmark] = createStore([])
const [subscribedBooks, setSubscribedBooks] = createStore([])

const [newCartCount, setNewCartCount] = createSignal(0)
const [newBookmarkCount, setNewBookmarkCount] = createSignal(0);

export {
    cart,
    setCart,
    bookmark, 
    setBookmark,
    subscribedBooks,
    setSubscribedBooks,
    newCartCount,
    setNewCartCount,
    newBookmarkCount,
    setNewBookmarkCount
}
