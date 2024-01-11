import BottomNav from "../widgets/BottomNav"
import { useNavigate } from "@solidjs/router"

export default function ExploreBooks() {
  const navigate = useNavigate()
  return (
    <>
      <div class="px-4 py-4">
        {/* top nav (back, search, filter) */}
        <div class="flex items-center justify-around">
          <div onclick={() => navigate("/", {replace: true})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          {/* search input */}
          <div class="w-1/2">
            <div class="relative">
              <input
                type="search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 outline-none border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search Books"
                required
              />
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>

        </div>

        <div class="mt-4 flex gap-0.5 bg-gray-200/60 rounded overflow-y-scroll">
          <div class="m-1 py-1 px-3 rounded bg-white shadow">
            History
          </div>
          <div class="m-1 py-1 px-3 rounded">
            Business
          </div>
          <div class="m-1 py-1 px-3 rounded">
            Design
          </div>
          <div class="m-1 py-1 px-3 rounded">
            Literature
          </div>
          <div class="m-1 py-1 px-3 rounded">
            Novel
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}
