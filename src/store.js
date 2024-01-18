// store.js
// import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"

const [cart, setCart] = createStore([])
const [bookmark, setBookmark] = createStore([])

export { cart, setCart, bookmark, setBookmark }