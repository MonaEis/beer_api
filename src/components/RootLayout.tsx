import { Outlet } from "react-router-dom";
import NaviComponent from "./NaviComponent";

function RootLayout() {
    return (
        <div>
            <main>
                <Outlet/>
            </main>
            <NaviComponent/>
        </div>
    );
}

export default RootLayout;
