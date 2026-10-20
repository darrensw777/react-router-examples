import { Route, Routes } from "react-router";
import { SiteLayout, RequireAuth } from "./components";
import {
    Home,
    About,
    Services,
    ServiceDetail,
    NotFound,
    Bookings,
    ThankYou,
    Singing,
    Account,
    Login,
} from "./pages";

const loggedIn = false;

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<SiteLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="services">
                    <Route index element={<Services />} />
                    <Route path=":slug" element={<ServiceDetail />} />
                </Route>
                <Route path="bookings" element={<Bookings />} />
                <Route path="thank-you" element={<ThankYou />} />
                <Route path="singing" element={<Singing />} />
                <Route
                    path="account"
                    element={
                        <RequireAuth loggedIn={loggedIn}>
                            <Account />
                        </RequireAuth>
                    }
                />
                <Route path="login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
