import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MainProvider from "./context/main-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MainProvider>
    <App />
  </MainProvider>
);
