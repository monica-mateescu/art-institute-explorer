import { Routes, Route } from "react-router";
import { MainLayout } from "./layouts";
import { Home } from "./pages";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
