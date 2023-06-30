import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AuthGaurd from "./AuthGuard";

const AuthRoutes = [
    <Route key="dashboard" path="/dashboard" element={<AuthGaurd component={<Dashboard />} />} />
]

export default AuthRoutes;