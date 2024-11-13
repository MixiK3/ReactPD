import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Импортируйте ваш новый MainLayout и страницы
import MainLayout from "./components/MainLayout";
import Contacts from "./pages/Contacts/Contacts";
import Statistics from "./pages/Statistics/Statistics";
import Rating from "./pages/Rating/Rating";
import NotFound from "./pages/NotFound/NotFound";
import Bonuses from "./pages/Bonuses/Bonuses";
import Station from "./pages/Station/Station";
import ViewPage from "./pages/ViewPage/ViewPage";
import { BonusProvider } from "./context/BonusesContext/BonusContext";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <BonusProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout toggleNav={toggleNav} isNavOpen={isNavOpen} />}
          >
            <Route path="viewPage" element={<ViewPage />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="rating" element={<Rating />} />
            <Route path="bonuses" element={<Bonuses />} />
            <Route path="station" element={<Station />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BonusProvider>
  );
}

export default App;
