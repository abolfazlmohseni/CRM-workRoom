import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Dashboard from "./Dashboard";
import SignIn from "./sign-in/Sign-in";
const App = () => {

  const location = useLocation()

  return (
    <>
      {location.pathname === "/sign-in" ? <SignIn /> :
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

      }


    </>
  );
}

export default App;
