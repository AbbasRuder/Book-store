import { A, useLocation } from "@solidjs/router"
import { newBookmarkCount } from "../../store.js"
import { createSignal } from "solid-js"
import { Icons } from "../../assets/icons/index.jsx"

export default function BottomTab() {
  const [currentTab, setCurrentTab] = createSignal("")

  const location = useLocation()
  setCurrentTab(location.pathname)

  return (
    <div class="fixed bottom-0 left-0 right-0 rounded-t-3xl bg-white shadow-2xl shadow-black">
      <div class="py-6 px-6 flex justify-around items-center">
        <div>
          {/* home */}
          <A href="/home">
            <Icons.HomeIcon
              fill={`${currentTab() === "/home" ? "#D45555" : "none"}`}
              stroke-width="1.5"
              stroke={`${currentTab() === "/home" ? 'none' : "currentColor"}`}
              class="w-7 h-7 cursor-pointer text-dark-primary"
            />
          </A>
        </div>

        <div>
          {/* my-subscriptions */}
          <A href="/subscriptions">
            <Icons.MySubscriptionsIcon
              fill={`${currentTab() === "/subscriptions" ? "#D45555" : "none"}`}
              stroke-width="1.5"
              stroke={`${currentTab() === "/subscriptions" ? 'none' : "currentColor"}`}
              class="w-7 h-7 cursor-pointer text-dark-primary"
            />
          </A>
        </div>

        <div>
          {/* bookmark */}
          <A href="/bookmark" class="relative">
            <Icons.BookmarkIcon
              stroke-width="1.5"
              stroke={`${currentTab() === "/bookmark" ? 'none' : "currentColor"}`}
              fill={`${currentTab() === "/bookmark" ? "#D45555" : "none"}`}
              class="w-7 h-7 cursor-pointer text-dark-primary"
            />
            {/* red dot for new bookmarks */}
            <div class={`${newBookmarkCount() > 0 && 'absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500'}`}></div>
          </A>
        </div>

        <div>
          {/* profile */}
          <A href="/profile">
            <Icons.ProfileIcon
              fill={`${currentTab() === "/profile" ? "#D45555" : "none"}`}
              stroke={`${currentTab() === "/profile" ? 'none' : "currentColor"}`}
              stroke-width="1.5"
              class="w-7 h-7 cursor-pointer text-dark-primary"
            />
          </A>
        </div>
      </div>
    </div>
  )
}
