import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Dashboard from "./Dashboard";
const App = () => {
  return (

    <div className="flex">
      <Menu />
      <div className="w-7/8 py-5 px-[30px]">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
