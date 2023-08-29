import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout/RouteWrapper/AdminLayout";
import { MalePage } from "../pages/admin/MalePage";
import { PrivateAuthRouteByRole } from "./private/PrivateAuthRouteByRole";
import { FemalePage } from "../pages/admin/FemalePage";
import { ChildrenPage } from "../pages/admin/ChildrenPage";

// localhost:3000/admin/*
export const AdminRoutes = ({ role }) => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to={"male"} />} />
        <Route
          path="male"
          element={
            <PrivateAuthRouteByRole
              role={role} // CLIENT
              roles={["ADMIN"]}
              fallbackPath={"sign-in"}
              RouteComponent={<MalePage />}
            />
          }
        />
        <Route
          path="female"
          element={
            <PrivateAuthRouteByRole
              role={role} // CLIENT
              roles={["ADMIN"]}
              fallbackPath={"sign-in"}
              RouteComponent={<FemalePage />}
            />
          }
        />
        <Route
          path="children"
          element={
            <PrivateAuthRouteByRole
              role={role} // CLIENT
              roles={["ADMIN"]}
              fallbackPath={"sign-in"}
              RouteComponent={<ChildrenPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
