// store.js
import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"

const [cart, setCart] = createStore([])
const [bookmark, setBookmark] = createStore([])

const [newCartAdded, setNewCartAdded] = createSignal(false)
const [newBookmarkAdded, setNewBookmarkAdded] = createSignal(false)

export {
    cart,
    setCart,
    bookmark, 
    setBookmark,
    newBookmarkAdded,
    setNewBookmarkAdded,
    newCartAdded,
    setNewCartAdded
}
