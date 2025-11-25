import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Dashboard from "./Dashboard";
import SignIn from "./sign-in/Sign-in";
import Nearest from "./Nearest";
import Projects from "./Projects";
import Profile from "./Profile";
const App = () => {

  const location = useLocation()

  return (
    <>
      {location.pathname === "/sign-in" ? <SignIn /> :
        <div className="flex h-full">
          <Menu />
          <div className="w-7/8 py-5 px-[30px]">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Nearest" element={<Nearest />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Profile" element={<Profile />} />

            </Routes>
          </div>
        </div>

      }


    </>
  );
}

export default App;
