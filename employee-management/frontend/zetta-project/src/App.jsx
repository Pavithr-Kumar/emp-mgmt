import "./App.css";

import { AllRoutes } from "./components/routes/AllRoutes";
import Header from "./components/Header";
import { AuthWrapper } from "./components/AuthWrapper";

import { useSelector } from "react-redux";

function App() {
  let user = useSelector((st) => st.userSlice);

  return (
    <>
      <AuthWrapper>
        <div className={user == null ? "appx" : "app"}>
          {user && <Header />}
          <AllRoutes />
        </div>
      </AuthWrapper>
    </>
  );
}

export default App;
