import { Navigate } from "react-router-dom";

export const PrivateAuthRouteByRole = ({
  RouteComponent,
  role /* login role */,
  roles = [] /* [ADMIN, CLIENT] */,
  fallbackPath,
}) => {
  if (roles.includes(role)) {
    return RouteComponent;
  }

  return <Navigate to={fallbackPath} replace />;
};
