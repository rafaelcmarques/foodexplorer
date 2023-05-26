import { BrowserRouter } from "react-router-dom";
import { UserAppRoutes } from "./app.user.routes";
import { AdminAppRoutes } from "./app.admin.routes";
import { AuthRoutes } from "./app.auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AdminAppRoutes />
    </BrowserRouter>
  );
}
