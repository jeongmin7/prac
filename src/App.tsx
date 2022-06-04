import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SelectMenu from "./pages/SelectMenu";
import Payment from "./pages/Payment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<SelectMenu />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
