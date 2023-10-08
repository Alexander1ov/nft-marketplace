import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import CreateAccount from "./pages/CreateAccount/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path={ROUTES.REGISTER} element={<CreateAccount />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
