import { data } from "../../books-data"
import { useParams, useNavigate } from "@solidjs/router"
import { For, createSignal } from "solid-js"
import {
    bookmark,
    setBookmark,
    setNewBookmarkCount,
    subscribedBooks,
    setSubscribedBooks,
} from "../../store"
import { Icons } from "../../assets/icons"

export default function BookDetails() {
    const [seeMore, setSeeMore] = createSignal(true)
    const navigate = useNavigate()

    const { id } = useParams()
    const selectedBook = data.books.filter(
        (item) => item.ISBN === parseInt(id)
    )[0]

    const subscribedBooksList = subscribedBooks.filter((item) => item.ISBN === selectedBook.ISBN)
    const subscriptionInitialState = subscribedBooksList[0] !== undefined
    const [isSubscribed, setIsSubscribed] = createSignal(subscriptionInitialState)

    const bookmarkedBooks = bookmark.filter(
        (item) => item.ISBN === selectedBook.ISBN
    )
    const BMinitialState = bookmarkedBooks[0] !== undefined
    const [isBookmarked, setIsBookmarked] = createSignal(BMinitialState)

    const handleBookmark = () => {
        if (isBookmarked()) {
            setBookmark((bookmarks) =>
                bookmarks.filter((item) => item.ISBN !== selectedBook.ISBN)
            )
            setNewBookmarkCount(count => Math.max(0, count - 1))
        } else {
            setBookmark((bookmarks) => [...bookmarks, { ...selectedBook }])
            setNewBookmarkCount(count => count + 1)
        }
        setIsBookmarked(!isBookmarked())
    }

    const handleBookSubscription = () => {
        if (isSubscribed()) {
            setSubscribedBooks((books) =>
                books.filter((item) => item.ISBN !== selectedBook.ISBN)
            )
        } else {
            setSubscribedBooks((books) => [...books, { ...selectedBook }])
        }

        setIsSubscribed(!isSubscribed())
    }

    return (
        <>
            <div class="h-screen mx-8 pt-[20px]">
                {/* navigation */}
                <div class="flex justify-between">
                    <div onClick={() => navigate(-1, { replace: true })}>
                        <Icons.BackIcon />
                    </div>
                    <Icons.BookmarkIcon
                        fill={`${isBookmarked() ? "currentcolor" : "none"}`}
                        class="cursor-pointer w-8 h-8 text-primary"
                        onClick={handleBookmark}
                    />
                </div>

                {/* book details */}
                <div class="flex flex-col justify-center items-center">
                    <img
                        src={selectedBook.image}
                        alt="book cover"
                        class="w-44 rounded-xl shadow-lg shadow-black/30"
                    />
                    <div class="mt-4">
                        <div class="flex flex-col items-center">
                            <p class="text-lg font-bold">{selectedBook.title}</p>
                            <p class="text-dark-primary">{selectedBook.author}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-8 pb-20">
                    <div class="flex gap-1">
                        <For each={selectedBook.genres}>
                            {(genre) => (
                                <div class="text-xs px-2 py-1 rounded-full border border-gray-60">
                                    {genre}
                                </div>
                            )}
                        </For>
                    </div>
                    <span class="text-lg font-bold">Overview</span>
                    <p
                        class={`mt-1 text-sm leading-5 text-dark-primary ${seeMore() && "line-clamp-5"
                            }`}
                    >
                        {selectedBook.summary}
                    </p>
                    <div
                        class="text-sm text-primary/70 cursor-pointer"
                        onClick={() => setSeeMore(!seeMore())}
                    >
                        {seeMore() ? "see more" : "see less"}
                    </div>
                    {isSubscribed() && (
                        <div class="mt-4 flex gap-3">
                            <div class="w-20 py-1 px-2 flex items-center gap-1 cursor-pointer bg-secondary/70 rounded">
                                <Icons.PlayIcon class="w-5 h-5" />
                                <p class="font-medium">Listen</p>
                            </div>
                            <div class="w-20 py-1 px-2 flex items-center gap-1 cursor-pointer bg-secondary/70 rounded">
                                <Icons.ReadIcon class="w-5 h-5" />
                                <p class="font-medium">Read</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div class="fixed pb-4 flex w-full bottom-0 text-xs">
                <button
                    onClick={handleBookSubscription}
                    class="py-3 px-8 mx-auto rounded-lg font-semibold text-lg text-white bg-primary"
                >
                    {isSubscribed()
                        ? "Subscribed"
                        : `Subscribe for ${selectedBook.price === "Free" ? "" : "₹"}${selectedBook.price}`}
                </button>
            </div>
        </>
    )
}
