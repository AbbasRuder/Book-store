import TopNav from "./widgets/TopNav";
import Home from "./pages/Home";
import BottomNav from "./widgets/BottomNav";

function App() {
  return (
    <div class="relative bg-slate-100">
      <TopNav />
      <Home/>
      <BottomNav />
    </div>
  );
}

export default App;
