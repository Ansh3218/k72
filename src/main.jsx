import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PageTransition from "./components/common/PageTransition";
import NavProvider from "./components/context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-black">
      <NavProvider>
        <BrowserRouter>
          <PageTransition>
            <App />
          </PageTransition>
        </BrowserRouter>
      </NavProvider>
    </div>
  </StrictMode>
);
