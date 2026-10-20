import type { ReactNode } from "react";
import { Navigate } from "react-router";

function RequireAuth({
    loggedIn,
    children,
}: {
    loggedIn: boolean;
    children: ReactNode;
}) {
    return loggedIn ? <>{children}</> : <Navigate to="/login" replace />;
}

export default RequireAuth;
