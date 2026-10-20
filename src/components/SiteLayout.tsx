import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function SiteLayout() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-xl">
            <Header />

            <main>
                {/* The matched child page renders here */}
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default SiteLayout;
