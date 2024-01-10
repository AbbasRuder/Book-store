import { data } from "../books-data";
import Home from "./pages/Home";

function App() {
  return (
    <div class="px-4 sm:px-24 bg-orange-50">
      <h1 class="px-8 py-8 sm:py-12 ml-5 text-xl sm:text-4xl font-bold underline text-orange-900">
        Latest Books
      </h1>
      <div class='py-4 flex flex-row justify-center flex-wrap gap-5'>
        <Home books={data.books}/>
      </div>
    </div>
  );
}

export default App;
