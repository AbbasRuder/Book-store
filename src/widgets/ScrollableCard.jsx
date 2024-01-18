import { A } from "@solidjs/router";
import image from "../assets/book.jpg";
import { createSignal } from "solid-js";
import { cart, setCart } from "../store";
import { produce } from "solid-js/store";

export default function ScrollableCard(props) {
  const book = cart.filter(item => item.title === props.title)
  const initialState = book[0] !== undefined
  const [showCart, setShowCart] = createSignal(initialState);

  const addToCart = () => {
    setShowCart(!showCart());
    setCart(oldCart => [...oldCart, { ...props, quantity: 1 }]);
  };

  const deleteFromCart = () => {
    setShowCart(!showCart());
    setCart(oldCart => oldCart.filter(item => item.ISBN !== props.ISBN));
  }

  return (
    <>
      <A href={`/${props.ISBN}`} class="relative">
        <img
          src={image}
          alt="book cover"
          class="w-26 h-40 sm:h-52 mx-auto shadow shadow-black/70 rounded"
        />
      </A>

      <div class="mt-3 ml-2">
        <p class="mt-1 text-sm text-black_secondary font-medium truncate">
          {props.author}
        </p>
        <p class="h-[35px] text-black_primary leading-5 font-semibold">{props.title}</p>
      </div>
      <div class="ml-2 flex justify-between items-center">
        <p class="text-lg font-semibold">{`${props.price.value}$`}</p>
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
            class="w-8 h-8 float-right cursor-pointer text-red_primary bg-white rounded-full"
            onClick={addToCart}
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </div>
    </>
  );
}
