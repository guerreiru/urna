import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./routes";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./styles/globalStyles";
import { ItemsProvider } from "./hooks/useItems";

export default function App() {
  return (
    <BrowserRouter>
      <ItemsProvider>
        <ToastContainer autoClose={500} />
        <GlobalStyles />
        <Router />
      </ItemsProvider>
    </BrowserRouter>
  );
}
