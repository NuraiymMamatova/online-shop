import { useEffect, useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/slices/authSlice";
import { CircularProgress } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {
    isAuthorized,
    data: { role },
  } = useSelector((state) => state.auth);
  useEffect(() => {
    const storagedData = JSON.parse(localStorage.getItem("clientData") || "{}");
    if (storagedData?.token && storagedData?.role) {
      dispatch(authActions.autoLogin(storagedData));
    }
    // fake loading
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return <AppRoutes isAuthorized={isAuthorized} role={role} />;
}

export default App;
