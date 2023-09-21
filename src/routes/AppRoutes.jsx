import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../pages/MainLayout";
import { SignUpForm } from "../components/authForm/SignUpForm";
import { SignInForm } from "../components/authForm/SignInForm";
import { PrivateAuthRoute } from "./PrivateAuthRoute";
import { AdminPage } from "../pages/AdminPage";

export const AppRoutes = ({ isAuthorized, role }) => {
  console.log(role);
  return (
    <Routes>
      <Route path="vite-deploy-demo/" element={<MainLayout />}>
        <Route index element={<Navigate to={"sign-up"} />} />
        <Route
          path="sign-up"
          element={
            <PrivateAuthRoute
              RouteComponent={SignUpForm}
              fallbackPath={"/admin"}
              isAuthorized={!isAuthorized}
            />
          }
        />
        <Route
          path="sign-in"
          element={
            <PrivateAuthRoute
              RouteComponent={SignInForm}
              fallbackPath={"/admin"}
              isAuthorized={!isAuthorized}
            />
          }
        />
      </Route>
      <Route
        path="/admin"
        element={
          <PrivateAuthRoute
            RouteComponent={AdminPage}
            fallbackPath={"/sign-in"}
            isAuthorized={isAuthorized}
          />
        }
      ></Route>
    </Routes>
  );
};
