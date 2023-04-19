import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
/* routing */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* data fetching loader & guard*/
import Loader from "./components/loader/Loader";
import { isUserLoggedGuard } from "./middleware/guard";
import ProtectedRoutes from "./components/protected-route/ProtectedRoute";
/* main style for all page */
import "./assets/scss/main.scss";
import "./assets/scss/pages/_home.scss";
import "./assets/scss/pages/_send.scss";
import "./assets/scss/pages/_archive.scss";
import "./assets/scss/pages/_arch.scss";
import "./assets/scss/pages/_compte.scss";
import "./assets/scss/components/modal.scss";
import "./assets/scss/pages/_achat.scss";
import "./assets/scss/pages/_pointvente.scss";
import "./assets/scss/pages/_dash.scss";
import "./assets/scss/pages/_etape.scss";

import reportWebVitals from "./reportWebVitals";
import {
  faWineGlass,
  faHomeAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* page & components with lazy load */
const Connexion = lazy(() => import("./views/connexion/Connexion"));
const Inscription = lazy(() => import("./views/inscription/Inscription"));
const Dashboard = lazy(() => import("./views/home/Dashboard"));
const AppWrapper = lazy(() => import("./views/app/AppWrapper"));
const NotFoundPage = lazy(() => import("./views/not-found-page/NotFoundPage"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path={"/"}
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />

            {/* <Route
              path={"/connexion"}
              element={
                <ProtectedRoutes
                  isAllowed={isUserLoggedGuard() !== true}
                  redirectPath={"/"}
                >
                  <Connexion />
                </ProtectedRoutes>
              }
            />
            <Route
              path={"/inscription"}
              element={
                <ProtectedRoutes
                  isAllowed={isUserLoggedGuard() !== true}
                  redirectPath={"/"}
                >
                  <Inscription />
                </ProtectedRoutes>
              }
            /> */}
            <Route path={"/loader"} element={<Loader />} />

            {/* francky start */}
            <Route path={"/home/*"} element={<Dashboard />} />
            {/* francky end */}

            {/* <Route path={"*"} element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
