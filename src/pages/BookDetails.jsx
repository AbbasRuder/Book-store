import image from "../assets/book.jpg"
import { data } from "../../books-data";
import { useParams } from "@solidjs/router";

export default function BookDetails() {
  const { id } = useParams()
  const selectedBook = data.books.filter(item => item.ISBN === parseInt(id))[0]

  return (
    <div class="h-screen sm:px-28 py-8 sm:py-12 bg-orange-50">
      <span class="text-xl sm:text-4xl font-bold underline text-orange-900">
        Details
      </span>

      <div class="sm:px-8 px-2 sm:py-8 flex flex-col sm:flex-row justify-center items-center sm:gap-6 bg-slate-50 rounded shadow-md">
        <img
          src={image}
          alt="book cover"
          class="my-8 rounded-xl w-60 h-70 sm:h-96 shadow"
        />
        <div>
          <div>
            <p class="text-lg font-bold">{selectedBook.title}</p>
            <p class="">{selectedBook.author}</p>
          </div>
          <div class="mt-4">
            <span class="font-semibold">Summary :</span>
            <p>{selectedBook.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
