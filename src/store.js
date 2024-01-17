// store.js
// import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"

const [cart, setCart] = createStore([])

export { cart, setCart }