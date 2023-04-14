import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SinglePage from "./SinglePage";

// Alan to bayad
export default function NewApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="mahzaa" element={<SinglePage />} />
          <Route path="search" element={<SinglePage />} />
          <Route path="explore" element={<SinglePage />} />
          <Route path="community" element={<SinglePage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
/ -> Home
/login -> Login
/register -> Register
/logout -> Logout
/profile -> Profile
 */
