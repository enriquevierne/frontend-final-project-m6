import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
