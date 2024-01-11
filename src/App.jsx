import { data } from "../books-data";
import TopNav from "./widgets/TopNav";
import Home from "./pages/Home";
import BottomNav from "./widgets/BottomNav";
// import image from './assets/book.jpg'
function App() {
  return (
    <div class="relative px-4 py-4 bg-teal-50">
      <TopNav />
      <Home/>
      <BottomNav />
    </div>
  );
}

export default App;
