import { NavLink } from "react-router";

const checkActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

const Header = () => {
    return (
        <header className="border-b border-gray-200 pb-4 mb-12">
            <nav className="flex gap-12">
                <NavLink to="/" className={checkActive}>
                    Home
                </NavLink>{" "}
                <NavLink to="/about" className={checkActive}>
                    About
                </NavLink>{" "}
                <NavLink to="/services" className={checkActive}>
                    Services
                </NavLink>
                <NavLink to="/bookings" className={checkActive}>
                    Bookings
                </NavLink>
                <NavLink to="/singing" className={checkActive}>
                    Singing
                </NavLink>
                <NavLink to="/account" className={checkActive}>
                    Account
                </NavLink>
            </nav>
            <div className="flex text-sm mt-2 text-gray-400">
                Use <code className="mx-2">{`<Link />`}</code> for standard
                routing, use
                <code className="mx-2">{`<NavLink />`}</code> for active links
            </div>
        </header>
    );
};

export default Header;
