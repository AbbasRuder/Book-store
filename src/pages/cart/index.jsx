import { cart, setCart,setNewCartAdded } from "../../store";
import image from "../../assets/book.jpg";
import { For, createSignal, createEffect } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import emptyCart from "../../assets/Empty-cartoon.png"

export default function Cart() {
  const [total, setTotal] = createSignal();
  const navigate = useNavigate()
  setNewCartAdded(false)

  function updateQuantity(index, amount) {
    setCart(oldCart => {
      let newCart = [...oldCart];
      let itemCopy = {...newCart[index]};
      // console.log({...newCart[index]})
      itemCopy.quantity += amount;
      if(itemCopy.quantity < 1) itemCopy.quantity = 1
      newCart[index] = itemCopy;
      return newCart;
    });
  }

  const handleDeleteItem = (book) => {
    setCart(oldCart => oldCart.filter(item => item.ISBN !== book.ISBN));
  }

  createEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      const itemPrice = item.price === "Free" ? 0 : parseInt(item.price);
      return acc + itemPrice * item.quantity
    }, 0);

    setTotal(newTotal)
  })

  return (
    <div class="px-[20px]">
      <div class="pt-[50px] flex items-center gap-4">
        <div onClick={() => navigate("/home", { replace: true })}>
          {/* go back icon */}
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
        <p class="text-2xl font-semibold">Cart</p>
      </div>

      <div class="mt-6 flex flex-col justify-center gap-3">
        <For each={cart}>
          {(item, index) => {
            return (
              <div class="min-w-[128px] flex py-3 px-2 grow bg-white shadow-lg rounded">
                <A href={`/${item.ISBN}`} class="relative">
                  <img
                    src={item.image}
                    alt="book cover"
                    class="w-26 h-44 mx-auto shadow shadow-black rounded"
                  />
                </A>

                <div class="ml-8 flex flex-col justify-center">
                  <div class="">
                    <p class="text-black_primary font-semibold">{item.title}</p>
                    <p class="text-sm text-black_secondary font-medium truncate">
                      {item.author}
                    </p>
                    <p class="text-lg font-semibold">
                      {item.price === "Free" ? item.price : `₹ ${(parseInt(item.price) * item.quantity)}`}
                    </p>
                  </div>
                  <div class="mt-4 flex items-center gap-8">
                    <div class="flex items-center border-gray-100">
                      <span
                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => updateQuantity(index(), -1)}
                      >
                        -
                      </span>
                      <p class="mx-2 text-xs">{item.quantity}</p>
                      <span
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => updateQuantity(index(), 1)}
                      >
                        +
                      </span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                      class="w-6 h-6 cursor-pointer text-red_primary"
                      onClick={() => handleDeleteItem(item)}
                    >
                      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                      <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          }}
        </For>
      </div>

      {cart.length === 0 ? (
        <div>
          <img src={emptyCart} class="mx-auto w-2/3 xs:w-1/2 sm:w-80"/>
          <p class="text-center">No items found</p>
        </div>
      ) : (
        <div class="my-6 border-t text-lg font-semibold">
          <div class="mt-3">
            <span class="">Total</span>
            <span class="float-right">{`₹ ${total()}`}</span>
          </div>
        </div>)}
    </div>
  );
}
