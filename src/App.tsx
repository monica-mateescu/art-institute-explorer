import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { MainLayout } from "./layouts";
import { Home, Gallery } from "./pages";
import { getArtworks } from "./data";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
      hydrateFallbackElement={<div>Loading…</div>}
    >
      <Route index element={<Home />} loader={getArtworks} />
      <Route path="gallery" element={<Gallery />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
