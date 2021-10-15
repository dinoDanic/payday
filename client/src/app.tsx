import { FC } from "react";
import CheckAuth from "./components/checkAuth/checkAuth.component";
import { Route } from "react-router";
import "./theme/global.scss";
import Auth from "./pages/auth/auth.page";

const App: FC = () => {
  return (
    <div>
      <CheckAuth />
      <Route exact path="/auth" component={Auth} />
    </div>
  );
};

export default App;
