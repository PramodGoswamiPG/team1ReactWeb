import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EnterOTP from "../pages/EnterOTP";
import GetOTP from "../pages/GetOTP";
import UnauthGuard from "./UnauthGuard";


const UnauthRoutes = [
        <Route key="get-otp" path="/" 
            element={<UnauthGuard component={<GetOTP />} />} ></Route>,
        <Route key="enter-otp" path="/enter-otp" 
            element={<UnauthGuard component={<EnterOTP />} />} > </Route>
    ]

export default UnauthRoutes;