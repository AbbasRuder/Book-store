import { cart, setCart, setNewCartCount } from "../../store";
import { For, createSignal, createEffect } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import emptyCart from "../../assets/Empty-cartoon.png"
import { Icons } from "../../assets/icons";

export default function Cart() {
  const [total, setTotal] = createSignal();
  const navigate = useNavigate()
  setNewCartCount(0)

  function updateQuantity(index, amount) {
    setCart(oldCart => {
      let newCart = [...oldCart];
      let itemCopy = { ...newCart[index] };
      itemCopy.quantity += amount;
      if (itemCopy.quantity < 1) itemCopy.quantity = 1
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
      <div class="pt-[20px] flex items-center gap-4">
        <div onClick={() => navigate("/home", { replace: true })}>
          <Icons.BackIcon />
        </div>
        <p class="text-2xl font-semibold">Cart</p>
      </div>

      {/* ---- Book-cards ---- */}
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
                  <div>
                    <p class="font-semibold">{item.title}</p>
                    <p class="text-sm text-dark-primary font-medium truncate">
                      {item.author}
                    </p>
                    <Show when={item.price === "Free"}>
                      <div class="mt-1 px-2 bg-secondary/20 rounded w-fit">
                        <p class="text-lg font-semibold text-secondary">Free</p>
                      </div>
                    </Show>
                    <Show when={item.price !== "Free"}>
                      <p class="text-lg font-semibold text-primary">₹{(parseInt(item.price) * item.quantity)}</p>
                    </Show>
                  </div>
              
                  <div class="mt-4 flex items-center gap-8">
                    <div class="flex items-center border-gray-100">
                      <span
                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary hover:text-blue-50"
                        onClick={() => updateQuantity(index(), -1)}
                      >
                        -
                      </span>
                      <p class="mx-2 text-xs">{item.quantity}</p>
                      <span
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50"
                        onClick={() => updateQuantity(index(), 1)}
                      >
                        +
                      </span>
                    </div>
                    <Icons.TrashIcon
                      onClick={() => handleDeleteItem(item)}
                      class="w-6 h-6 cursor-pointer text-primary"
                    />
                  </div>
                </div>
              </div>
            )
          }}
        </For>
      </div>

      {cart.length === 0 ? (
        <div>
          <img src={emptyCart} class="mx-auto w-2/3 xs:w-1/2 sm:w-80" />
          <p class="text-center text-lg">No items found</p>
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
