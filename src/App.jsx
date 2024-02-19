import Header from "./pages/home/header";
import Home from "./pages/home";
import { BottomTab } from "./widgets";

function App() {
  return (
    <div class="relative bg-slate-100">
      <Header />
      <Home/>
      <BottomTab />
    </div>
  );
}

export default App;
