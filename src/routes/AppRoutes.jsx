import { Navigate, Route, Routes } from "react-router-dom";
import { SignInForm } from "../components/authForm/SignInForm";
import { SignUpForm } from "../components/authForm/SignUpForm";
import { MainLayout } from "../layout/RouteWrapper/MainLayout";
import { AdminRoutes } from "./AdminRoutes";
import { PrivateAuthRoute } from "./private/PrivateAuthRoute";

export const AppRoutes = ({ isAuthorized, role }) => {
  const pahtsByRole = {
    ADMIN: "/admin",
    CLIENT: "/client",
  };
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={"sign-up"} />} />
        <Route
          path="sign-up"
          element={
            <PrivateAuthRoute
              RouteComponent={<SignUpForm />}
              fallbackPath={pahtsByRole[role]}
              isAuthorized={!isAuthorized}
            />
          }
        />
        <Route
          path="sign-in"
          element={
            <PrivateAuthRoute
              RouteComponent={<SignInForm />}
              fallbackPath={pahtsByRole[role]}
              isAuthorized={!isAuthorized}
            />
          }
        />
      </Route>
      <Route
        path="/admin/*"
        element={
          <PrivateAuthRoute
            RouteComponent={<AdminRoutes role={role} />}
            fallbackPath={"/sign-in"}
            isAuthorized={isAuthorized}
          />
        }
      />
      <Route path="/client/*" element={<h1>Client Page</h1>} />
      <Route path="*" element={<h1>Not found!</h1>} />
    </Routes>
  );
};
