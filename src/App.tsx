import TopBar from "./components/TopBar";
import ContainerApp from "./components/ContainerApp";
import {Outlet} from "react-router-dom";
import SideBar from "./components/SideBar";


function App() {
  return (
          <div className="h-screen w-screen flex flex-column">
              <TopBar />
              <ContainerApp>
                  <SideBar />
                  <Outlet />
              </ContainerApp>
          </div>

  )
}

export default App
