import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import { UserProvider } from "./Providers/userContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { AnoucementProvider } from "./Providers/anouncementContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
      <BrowserRouter>
        <UserProvider>
          <AnoucementProvider>
            <App />
          </AnoucementProvider>
        </UserProvider>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);
